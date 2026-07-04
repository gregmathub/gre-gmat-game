# Formula Sprint — FreeStudy Hub games

Upload ALL these web files to your GitHub repo (keep them together in one folder).

## Files
- index.html          — sign in / create account (lands on games.html)
- games.html          — arcade hub: pick a game
- game.html           — Formula Sprint (20 mixed Q, live ranked leaderboard)
- topic-sprint.html   — Topic Sprint: pick 1 of 9 topics, race your best
- match.html          — Formula Match: WhoT-style duel (Computer / Pass & Play / Online code)
- rapid-fire.html     — Rapid Fire: 60-second high-yield blitz across all topics
- coach.html          — Coach Dashboard: monitor student progress (instructor)
- leaderboard.html    — global + class boards
- sprint-auth.js      — auth + your Firebase config (already set)
- sprint-game.js      — game logic + scoring + live rooms
- invites.js          — challenge/invite layer (opponent picker)
- questions.js        — the 20 Formula Sprint questions
- math-games.js       — 9 topic games incl. Geometry (Topic Sprint / Match / Rapid Fire)
- database.rules.json — security rules (paste into Firebase; do NOT upload to web)

## Firebase (do once)
1. Realtime Database → Rules → paste database.rules.json → Publish.
   NOTE: this version ADDS a "challenges" section (for the opponent picker).
   Re-paste the whole file and Publish again if you deployed an earlier version.
2. Authentication → enable Email/Password.
3. After deploying: Authentication → Settings → Authorized domains → add your github.io domain.

## Coach dashboard
- Open coach.html (link is in the games hub top bar).
- "By class code": type the class code you gave students → see each student's tier,
  best score, games played, and last-active (7-day inactivity is flagged). Export CSV.
- "All members": same view across everyone. No extra setup — reads the live boards.

## Opponent picker (Formula Match → Online → Pick opponent)
- Shows your class members (or all members), with a green dot for who's online.
- Click Challenge → they get an "X challenged you" banner on the games hub / match page
  (Accept joins the same deck). You can still share a Room code the old way.

## Deploy
GitHub repo → Settings → Pages → deploy from main / root.
Open your Pages URL → Create account → play.

## The four games (ALL feed the leaderboard — best score counts)
- Formula Sprint — 20 mixed problems, streak ×3, hint costs 40, live leaderboard.
- Topic Sprint — choose 1 of 9 topics incl. Geometry & Solids. Personal best per topic.
- Formula Match — ask/answer duel: Computer, Pass & Play, or Online by room code.
- Rapid Fire — 60-second high-yield blitz across every topic, streak up to ×3.

Contacts: WhatsApp +234 803 271 0570 · freestudyhub.store · youtube.com/@LeonardNwosu-k8z
Prepared by Leonard Nwosu — Free Study Hub.
