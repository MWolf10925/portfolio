// ───────────────────────────────────────────────────────────────────────────
//  GAMES  ·  independently-built Roblox games
//  Cover art goes in /public/games/. Add a `href` once each game is published
//  to show a "Play" link.
// ───────────────────────────────────────────────────────────────────────────

export interface Game {
  title: string;
  genre: string;
  description: string;
  image: string;
  href?: string; // Roblox link — add when ready
}

export const games: Game[] = [
  {
    title: "Dark Hours",
    genre: "SCP Survival",
    description:
      "An SCP-style survival game. Scavenge an IKEA-like map by day for items, weapons, and large objects across different plots of land — then defend yourself when night falls and the monsters come out.",
    image: "/games/dark-hours.jpg",
  },
  {
    title: "Road Rage",
    genre: "Open World",
    description:
      "An open-world driving game in the spirit of GTA. Roam a custom city map and earn money — my own take on the genre, built from the ground up.",
    image: "/games/road-rage.jpg",
  },
  {
    title: "Tower Offense",
    genre: "Strategy",
    description:
      "A reverse tower-defense. Instead of holding off waves, you strategically attack the defenses, working around them with different characters and abilities.",
    image: "/games/tower-offense.jpg",
  },
  {
    title: "Find the Cartoons",
    genre: "Adventure",
    description:
      "A classic find-the-character game — search a large, detailed map to track down hidden cartoons.",
    image: "/games/find-the-cartoons.jpg",
  },
];
