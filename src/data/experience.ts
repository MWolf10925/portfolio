// ───────────────────────────────────────────────────────────────────────────
//  EXPERIENCE  ·  most recent / most relevant first
//  `bullets` is optional; short roles can omit it.
// ───────────────────────────────────────────────────────────────────────────

export interface Experience {
  role: string;
  org: string;
  period?: string;
  bullets?: string[];
}

export const experience: Experience[] = [
  {
    role: "Lead Programmer / Driver / Notebooker",
    org: "Heroic Robotics Team",
    period: "May 2024 – Present",
    bullets: [
      "Develop autonomous and driver-control systems in C++ for competitive VEX robotics using odometry, sensors, and structured testing.",
      "Created a custom PID auto-tuning tool that reduced tuning time from multiple days to roughly 1–5 minutes.",
      "Contributed across programming, driving, strategy, competition prep, and engineering notebook documentation.",
      "Earned VEX Worlds qualification, Design Award, Skills Award, tournament championships, and multiple state qualifications.",
    ],
  },
  {
    role: "Product Automation Engineer (Internship)",
    org: "Instant Quote",
    period: "Jun 2026 – Present · Cincinnati, OH",
    bullets: [
      "Build browser-based automation tools that streamline quoting workflows, reduce manual work, and improve user experience.",
      "Shipped a published Chrome extension (client/CRM importer) through the Chrome Web Store, including review, privacy-policy, and release work.",
      "Work across product development, workflow automation, browser tooling, and frontend improvements for real-world business operations.",
    ],
  },
  {
    role: "Independent Software, Game & Web Developer",
    org: "Self-employed",
    period: "May 2018 – Present",
    bullets: [
      "Build independent software, game, and web projects using Lua, Python, JavaScript, HTML, and CSS.",
      "Use AI tools and automation workflows to speed up debugging, development, and iteration.",
      "Published game projects reached over 5,000 total plays.",
    ],
  },
  {
    role: "Lawn Care & Yard Maintenance",
    org: "Self-employed",
    period: "Jun 2024 – Present",
    bullets: [
      "Run independent yard-work jobs — scheduling, client communication, and consistent follow-through on physically demanding work.",
    ],
  },
  {
    role: "Team Member",
    org: "Dreamy's Ice Cream",
    period: "Jul 2024 – Sep 2025",
    bullets: [
      "Customer service, cash handling, food prep, and teamwork in a fast-paced environment.",
    ],
  },
];
