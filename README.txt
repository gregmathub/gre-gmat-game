# Formula Sprint — FreeStudy Hub games

Upload ALL these web files to your GitHub repo (keep them together in one folder).

## Files
- index.html          — sign in / create account (lands on games.html)
- games.html          — arcade hub: pick a game
- game.html           — Formula Sprint (20 mixed Q, live ranked leaderboard)
- topic-sprint.html   — Topic Sprint: pick 1 of 8 topics, race your best
- match.html          — Formula Match: WhoT-style duel (Computer / Pass & Play / Online code)
- leaderboard.html    — global + class boards
- sprint-auth.js      — auth + your Firebase config (already set)
- sprint-game.js      — game logic + scoring + live rooms
- questions.js        — the 20 Formula Sprint questions
- math-games.js       — 8 topic games (used by Topic Sprint & Formula Match)
- database.rules.json — security rules (paste into Firebase; do NOT upload to web)

## Firebase (do once)
1. Realtime Database → Rules → paste database.rules.json → Publish.
2. Authentication → enable Email/Password.
3. After deploying: Authentication → Settings → Authorized domains → add your github.io domain.

## Deploy
GitHub repo → Settings → Pages → deploy from main / root.
Open your Pages URL → Create account → play.

## The three games
- Formula Sprint — 20 mixed problems, streak ×3, hint costs 40, live leaderboard.
- Topic Sprint — choose Fractions, Exponents, Number Properties, Algebra, Statistics,
  Rate/Work/Ratios, Counting/Probability, or Coordinate Geometry & Sequences. Personal best per topic.
- Formula Match — one player asks a formula question, the other must answer.
  Miss = challenger scores (penalty toggle). Play the Computer, Pass & Play with a
  student on one device, or Online by room code.

Contacts: WhatsApp +234 803 271 0570 · freestudyhub.store · youtube.com/@LeonardNwosu-k8z
Prepared by Leonard Nwosu — Free Study Hub.
