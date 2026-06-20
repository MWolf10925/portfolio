// ───────────────────────────────────────────────────────────────────────────
//  GAMES  ·  independently-built Roblox games
//  Cover art goes in /public/games/. Add a `href` once a game is published.
// ───────────────────────────────────────────────────────────────────────────

export interface Game {
  title: string;
  genre: string;
  description: string;
  image: string;
  href?: string; // Roblox link — omit if unpublished/offline
}

export const games: Game[] = [
  {
    title: "Dark Hours",
    genre: "SCP Survival",
    description:
      "Scavenge an IKEA-like map by day for items and weapons, then survive the monsters that come out at night.",
    image: "/games/dark-hours.png",
    href: "https://www.roblox.com/games/18579942960/Dark-Hours",
  },
  {
    title: "Tower Offense",
    genre: "Strategy",
    description:
      "Reverse tower-defense. Instead of holding off waves, you attack the defenses with different characters and abilities.",
    image: "/games/tower-offense.png",
    href: "https://www.roblox.com/games/112312927264179/Tower-Offense",
  },
  {
    title: "Road Rage",
    genre: "Open World",
    description: "An open-world driving game where you roam a custom city and earn cash. My take on GTA.",
    image: "/games/road-rage.png",
  },
  {
    title: "Find the Cartoons",
    genre: "Adventure",
    description: "Hunt down hidden cartoons across a big, detailed map.",
    image: "/games/find-the-cartoons.png",
  },
];
