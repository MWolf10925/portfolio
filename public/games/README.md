# Game cover art

Drop your game thumbnails here and they appear automatically in the Games
section. Filenames are referenced in `src/data/games.ts` → `image`:

- `dark-hours.jpg` — Dark Hours (SCP survival)
- `road-rage.jpg` — Road Rage (open-world driving)
- `tower-offense.jpg` — Tower Offense (reverse tower-defense)
- `find-the-cartoons.jpg` — Find the Cartoons

Square images look best (the cards use a 1:1 frame). Any web format works
(`.jpg`, `.png`, `.webp`) — update the path in `games.ts` if you change the
extension. A branded placeholder shows until each file exists.

When you publish/link a game, add its Roblox URL as `href` in `games.ts` to
turn on the "Play on Roblox" link.
