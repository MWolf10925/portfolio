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
    org: "3009H Heroic Robotics (VEX V5)",
    period: "May 2024 to Present",
    bullets: [
      "Develop autonomous and driver-control systems in C++ for competitive VEX robotics using odometry, sensors, and structured testing.",
      "Created a custom PID auto-tuning tool that reduced tuning time from multiple days to roughly 1 to 5 minutes.",
      "Contributed across programming, driving, strategy, competition prep, and engineering notebook documentation.",
      "Earned VEX Worlds qualification, Design Award, Skills Award, tournament championships, and multiple state qualifications.",
    ],
  },
  {
    role: "Product Automation Engineer (Internship)",
    org: "Instant Quote",
    period: "Jun 2026 to Present · Cincinnati, OH",
    bullets: [
      "Built and shipped a CRM-importer Chrome extension (live on the Chrome Web Store) that scrapes and organizes 100+ client records (notes, invoices, jobs, payments, files, and locations) into a one-click import and export flow.",
      "Published companion iOS and Android apps to the App Store and Google Play, handling privacy policies, demo videos, TestFlight and manual on-device testing, and review submissions.",
      "Shipped tap-to-pay payments with Stripe, a point-of-sale flow, background location plus fleet and mileage tracking, clock-in/out, and Supabase auth.",
      "Worked across Google Cloud Run (terminal deploys), API integrations, HTML scraping, and a simplified dark/light-mode UI.",
    ],
  },
  {
    role: "Independent Software, Game & Web Developer",
    org: "Self-employed",
    period: "May 2018 to Present",
    bullets: [
      "Build independent software, game, and web projects using Lua, Python, JavaScript, HTML, and CSS.",
      "Use AI tools and automation workflows to speed up debugging, development, and iteration.",
      "Published game projects reached over 5,000 total plays.",
    ],
  },
  {
    role: "Lawn Care & Yard Maintenance",
    org: "Self-employed",
    period: "Jun 2024 to Present",
    bullets: [
      "Run independent yard-work jobs, handling scheduling, client communication, and consistent follow-through on physically demanding work.",
    ],
  },
  {
    role: "Team Member",
    org: "Dreamy's Ice Cream",
    period: "Jul 2024 to Sep 2025",
    bullets: [
      "Customer service, cash handling, food prep, and teamwork in a fast-paced environment.",
    ],
  },
];
