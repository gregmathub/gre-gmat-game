/* ============================================================
   Formula Sprint — challenge / invite layer (invites.js)
   Load AFTER sprint-auth.js. Lets one member challenge another
   to an online Formula Match. Near-real-time via light polling.

     challenges/<toEmailKey>/<room> = { fromName, fromEk, room, topic, rounds, createdAt }
   ============================================================ */
(function () {
  if (!window.SprintAuth) { console.error("invites.js needs sprint-auth.js first"); return; }
  var rest = SprintAuth.rest;
  function ek(e) { return String(e || "").trim().toLowerCase().replace(/[.#$\[\]]/g, "-"); }
  function obj(v) { return v && typeof v === "object" ? v : {}; }
  function list(v) { return Object.entries(obj(v)).map(function (e) { return Object.assign({ room: e[0] }, e[1]); }); }

  async function send(o) { // {toEk, fromName, fromEk, room, topic, rounds}
    await rest.put("challenges/" + o.toEk + "/" + o.room, {
      fromName: o.fromName, fromEk: o.fromEk, room: o.room,
      topic: o.topic, rounds: o.rounds, createdAt: Date.now()
    });
  }
  async function mine(myEk) {
    var now = Date.now();
    return list(await rest.get("challenges/" + myEk))
      .filter(function (c) { return now - (c.createdAt || 0) < 5 * 60 * 1000; }) // last 5 min
      .sort(function (a, b) { return (b.createdAt || 0) - (a.createdAt || 0); });
  }
  async function clear(myEk, room) { await rest.put("challenges/" + myEk + "/" + room, null); }
  function watch(myEk, cb, ms) {
    var stop = false, t = null;
    async function tick() {
      if (stop) return;
      try { var inv = await mine(myEk); if (!stop) cb(inv); } catch (e) {}
      if (!stop) t = setTimeout(tick, ms || 4000);
    }
    tick();
    return function () { stop = true; if (t) clearTimeout(t); };
  }
  window.SprintInvites = { ek: ek, send: send, mine: mine, clear: clear, watch: watch };
})();
