/* ============================================================
   Formula Sprint — game data layer (sprint-game.js)
   Load AFTER sprint-auth.js. REST + fresh token, near-real-time
   via light polling (no extra Firebase SDK needed).

     gamePlayers/<room>/<ek>        a member's live run in a room
     leaderboard/global/<ek>        member's all-time best (platform-wide)
     leaderboard/class/<code>/<ek>  member's best within a class code
   ============================================================ */
(function () {
  if (!window.SprintAuth) { console.error("sprint-game.js needs sprint-auth.js first"); return; }
  var rest = SprintAuth.rest;

  function emailKey(e) { return String(e || "").trim().toLowerCase().replace(/[.#$\[\]]/g, "-"); }
  function obj(v) { return v && typeof v === "object" ? v : {}; }
  function list(v) { return Object.entries(obj(v)).map(function (e) { return Object.assign({ emailKey: e[0] }, e[1]); }); }

  function multForStreak(s) { return Math.min(1 + Math.max(0, s - 1) * 0.5, 3); }
  function pointsForCorrect(streakAfter) { return Math.round(100 * multForStreak(streakAfter)); }
  var HINT_COST = 40;
  var TIERS = [
    { min: 0, name: "Rookie" }, { min: 1000, name: "Apprentice" }, { min: 2000, name: "Sharpshooter" },
    { min: 3000, name: "Ace" }, { min: 4000, name: "Master" }, { min: 5000, name: "Grandmaster" }
  ];
  function titleForScore(sc) { var t = TIERS[0]; for (var i = 0; i < TIERS.length; i++) if (sc >= TIERS[i].min) t = TIERS[i]; return t.name; }
  function nextTier(sc) { for (var i = 0; i < TIERS.length; i++) if (TIERS[i].min > sc) return TIERS[i]; return null; }

  // ---- live run inside a room (default "open" = always-on room) ----
  async function joinRoom(room, profile) {
    profile = profile || SprintAuth.profile() || {};
    var ek = emailKey(profile.email);
    await rest.put("gamePlayers/" + room + "/" + ek, {
      name: profile.nickname || profile.name || profile.email, email: profile.email,
      classCode: profile.classCode || null, score: 0, streak: 0, answered: 0, done: false,
      startedAt: Date.now(), updatedAt: Date.now()
    });
    return ek;
  }
  async function pushProgress(room, o) {
    await rest.patch("gamePlayers/" + room + "/" + emailKey(o.email), {
      name: o.name, email: o.email, score: o.score, streak: o.streak,
      answered: o.answered, done: !!o.done, updatedAt: Date.now()
    });
  }
  async function roomPlayers(room) {
    return list(await rest.get("gamePlayers/" + room))
      .sort(function (a, b) { return (b.score || 0) - (a.score || 0); });
  }
  // near-real-time board: polls the room; returns unsubscribe()
  function subscribeRoom(room, cb, intervalMs) {
    var stopped = false, timer = null;
    async function tick() {
      if (stopped) return;
      try { var players = await roomPlayers(room); if (!stopped) cb(players); } catch (e) {}
      if (!stopped) timer = setTimeout(tick, intervalMs || 1200);
    }
    tick();
    return function () { stopped = true; if (timer) clearTimeout(timer); };
  }
  async function leaveRoom(room, email) { await rest.put("gamePlayers/" + room + "/" + emailKey(email), null); }

  // ---- finish: freeze run + roll best into class/global boards ----
  async function finishRun(room, o) {
    var ek = emailKey(o.email);
    await rest.patch("gamePlayers/" + room + "/" + ek, { score: o.score, answered: o.answered, done: true, finishedAt: Date.now(), updatedAt: Date.now() });
    return await bumpLeaderboard(o);
  }
  async function bumpLeaderboard(o) {
    var ek = emailKey(o.email), now = Date.now();
    var g = obj(await rest.get("leaderboard/global/" + ek));
    var gBest = Math.max(g.bestScore || 0, o.score || 0);
    await rest.put("leaderboard/global/" + ek, { name: o.name, email: o.email, bestScore: gBest, lastScore: o.score || 0, title: titleForScore(gBest), plays: (g.plays || 0) + 1, updatedAt: now });
    if (o.classCode) {
      var c = obj(await rest.get("leaderboard/class/" + o.classCode + "/" + ek));
      var cBest = Math.max(c.bestScore || 0, o.score || 0);
      await rest.put("leaderboard/class/" + o.classCode + "/" + ek, { name: o.name, email: o.email, bestScore: cBest, title: titleForScore(cBest), plays: (c.plays || 0) + 1, updatedAt: now });
    }
    return { globalBest: gBest, title: titleForScore(gBest) };
  }
  async function globalLeaderboard(limit) {
    var rows = list(await rest.get("leaderboard/global")).sort(function (a, b) { return (b.bestScore || 0) - (a.bestScore || 0); });
    return limit ? rows.slice(0, limit) : rows;
  }
  async function classLeaderboard(code, limit) {
    if (!code) return [];
    var rows = list(await rest.get("leaderboard/class/" + code)).sort(function (a, b) { return (b.bestScore || 0) - (a.bestScore || 0); });
    return limit ? rows.slice(0, limit) : rows;
  }
  async function myBest(email) { var g = obj(await rest.get("leaderboard/global/" + emailKey(email))); return g.bestScore || 0; }

  window.SprintGame = {
    emailKey: emailKey, multForStreak: multForStreak, pointsForCorrect: pointsForCorrect,
    HINT_COST: HINT_COST, titleForScore: titleForScore, nextTier: nextTier,
    joinRoom: joinRoom, pushProgress: pushProgress, roomPlayers: roomPlayers, subscribeRoom: subscribeRoom, leaveRoom: leaveRoom,
    finishRun: finishRun, bumpLeaderboard: bumpLeaderboard,
    globalLeaderboard: globalLeaderboard, classLeaderboard: classLeaderboard, myBest: myBest
  };
})();
