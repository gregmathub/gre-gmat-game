/* ============================================================
   Formula Sprint — auth layer (sprint-auth.js)
   Load AFTER firebase-app-compat.js + firebase-auth-compat.js.
   Standalone project: everyone who registers is a player.
   ============================================================ */
(function () {
  var firebaseConfig = {
    apiKey: "AIzaSyCEF-O5G6Q-4DrZDSFIFApl1vs88_8wneU",
    authDomain: "gre-gmat-formula-sprint.firebaseapp.com",
    // ▼▼ If your Realtime Database is in a non-US region, replace this with the
    //    exact URL shown at the top of the RTDB Data tab (…​.firebasedatabase.app).
    databaseURL: "https://gre-gmat-formula-sprint-default-rtdb.firebaseio.com",
    projectId: "gre-gmat-formula-sprint",
    storageBucket: "gre-gmat-formula-sprint.firebasestorage.app",
    messagingSenderId: "948866023967",
    appId: "1:948866023967:web:83353a4068a601f65d4b2a"
  };
  var DB = firebaseConfig.databaseURL;
  var LOGIN_PAGE = "index.html";

  if (window.firebase && !firebase.apps.length) firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();

  async function token() { var u = auth.currentUser; return u ? await u.getIdToken() : null; }
  async function url(path) { var t = await token(); return DB + "/" + path + ".json" + (t ? "?auth=" + t : ""); }
  var rest = {
    async get(path) { try { var r = await fetch(await url(path)); return await r.json(); } catch (e) { console.error("get " + path, e); return null; } },
    async put(path, data) { try { var r = await fetch(await url(path), { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return await r.json(); } catch (e) { console.error("put " + path, e); return null; } },
    async patch(path, data) { try { var r = await fetch(await url(path), { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) }); return await r.json(); } catch (e) { console.error("patch " + path, e); return null; } }
  };

  var _profile = null, _resolved = false, _waiters = [];
  auth.onAuthStateChanged(async function (user) {
    if (user) { var p = await rest.get("players/" + user.uid); _profile = p || { name: user.email, email: user.email, nickname: user.email }; }
    else { _profile = null; }
    _resolved = true;
    _waiters.splice(0).forEach(function (cb) { cb(user, _profile); });
  });
  function onReady(cb) { if (_resolved) cb(auth.currentUser, _profile); else _waiters.push(cb); }

  // Redirect to login unless signed in. Returns Promise<{user,profile}>.
  function gate() {
    return new Promise(function (resolve) {
      onReady(function (user, profile) {
        if (!user) { location.replace(LOGIN_PAGE + "?next=" + encodeURIComponent(location.pathname.split("/").pop())); return; }
        resolve({ user: user, profile: profile });
      });
    });
  }

  async function signIn(email, password) { var c = await auth.signInWithEmailAndPassword(email.trim(), password); return c.user; }
  async function signUp(o) {
    var cred = await auth.createUserWithEmailAndPassword(o.email.trim(), o.password);
    var profile = {
      name: o.name || o.email, email: o.email.trim(),
      nickname: (o.nickname || o.name || o.email).slice(0, 16),
      classCode: (o.classCode || "").trim().toUpperCase() || null,
      createdAt: Date.now()
    };
    await rest.put("players/" + cred.user.uid, profile);
    _profile = profile;
    return { user: cred.user, profile: profile };
  }
  async function updateProfile(patch) {
    var u = auth.currentUser; if (!u) return null;
    await rest.patch("players/" + u.uid, patch);
    _profile = Object.assign({}, _profile, patch);
    return _profile;
  }
  function signOut() { return auth.signOut(); }

  window.SprintAuth = {
    auth: auth, rest: rest, token: token, onReady: onReady, gate: gate,
    signIn: signIn, signUp: signUp, signOut: signOut, updateProfile: updateProfile,
    profile: function () { return _profile; }, LOGIN_PAGE: LOGIN_PAGE
  };
})();
