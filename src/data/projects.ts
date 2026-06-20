// ───────────────────────────────────────────────────────────────────────────
//  FEATURED PROJECTS  ·  add / edit / reorder cards here
//  `status` is optional and renders as a small badge on the card.
//  `href` is optional — only add it for projects that are genuinely public.
// ───────────────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  description: string;
  tags: string[];
  status?: string;
  href?: string;
  featured?: boolean;
  /** Path under /public, e.g. "/projects/robotics.jpg". Shows a branded
   *  placeholder frame until set. Featured projects render as big image rows. */
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Robotics Autonomous Systems",
    description:
      "C++ autonomy for VEX, including routines, odometry, sensor feedback, and driver control. The backbone of a Worlds-qualified robot.",
    tags: ["C++", "VEX V5", "Odometry", "Sensors", "Autonomous"],
    status: "Competition",
    featured: true,
    image: "/projects/robotics.jpg",
    href: "https://github.com/MWolf10925/pushback-heroic-telemetry",
  },
  {
    title: "3009H Heroic Robotics · VEX Worlds",
    description:
      "Lead programmer, driver, and notebooker. Built the systems behind a Worlds qualification, plus a Design Award, a Skills Award, and tournament wins.",
    tags: ["VEX V5", "Lead Programmer", "Worlds", "Autonomous", "Notebook"],
    status: "Worlds Qualified",
    featured: true,
    image: "/projects/competition.jpg",
    href: "https://github.com/MWolf10925/robotics-autonomous-systems-case-study",
  },
  {
    title: "Instant Quote · CRM Importer & Automation",
    description:
      "Built and shipped a CRM-importer Chrome extension during my internship, live on the Chrome Web Store, plus companion iOS and Android apps. One-click import of 100+ client records (notes, invoices, jobs, payments, locations), Stripe tap-to-pay, background and fleet tracking, and Supabase auth.",
    tags: ["TypeScript", "Chrome Extension", "Stripe", "Supabase", "Cloud Run"],
    status: "Internship · Shipped",
    featured: true,
    image: "/projects/instant-quote.jpg",
  },
  {
    title: "Private Robotics PID Tuning Workflow",
    description:
      "A custom PID auto-tuner that cut drivetrain tuning from multiple days to roughly 1 to 5 minutes. Kept private to protect competitive advantage.",
    tags: ["C++", "PID Control", "Robotics", "Testing", "Automation"],
    status: "Private / Case Study",
  },
  {
    title: "Business Problem Finder",
    description:
      "An AI diagnostic tool that crawls a business's public site, extracts trust, conversion, and local-SEO signals, and returns ranked problem cards with evidence and next actions.",
    tags: ["TypeScript", "Next.js", "OpenAI", "Crawling"],
    href: "https://github.com/MWolf10925/Business-Audit-System",
  },
  {
    title: "Meeting Recorder",
    description:
      "A Chrome extension that records Google Meet / Zoom audio, then transcribes and summarizes it into speaker-aware notes surfaced in a dashboard.",
    tags: ["TypeScript", "Chrome Extension", "Next.js", "Supabase"],
    href: "https://github.com/MWolf10925/meeting-recorder-extension",
  },
  {
    title: "MattOS",
    description:
      "A local-first Obsidian system that turns an idea dump into scored, organized notes and a weekly action queue.",
    tags: ["Python", "Obsidian", "Local AI", "Productivity"],
    status: "In Progress",
  },
  {
    title: "Jarvis AI Command Center",
    description:
      "A local AI assistant for productivity, focus sessions, hotkeys, and task management. Runs on your own machine without expensive API calls.",
    tags: ["Python", "Local AI", "Automation"],
    href: "https://github.com/MWolf10925/jarvis-ai-command-center",
  },
  {
    title: "Lead Finder",
    description:
      "A prospecting and outreach app for finding, organizing, and tracking leads.",
    tags: ["TypeScript", "Next.js", "Supabase"],
    href: "https://github.com/MWolf10925/lead-finder",
  },
];
