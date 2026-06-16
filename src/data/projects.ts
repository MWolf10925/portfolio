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
      "C++ autonomy for VEX: routines, odometry, sensor feedback, and driver control. The backbone of a Worlds-qualified robot.",
    tags: ["C++", "VEX V5", "Odometry", "Sensors", "Autonomous"],
    status: "Competition",
    featured: true,
    image: "/projects/robotics.jpg",
  },
  {
    title: "3009H Heroic Robotics · VEX Worlds",
    description:
      "Lead programmer, driver, and notebooker. Built the systems behind a Worlds qualification, plus a Design Award, a Skills Award, and tournament wins.",
    tags: ["VEX V5", "Lead Programmer", "Worlds", "Autonomous", "Notebook"],
    status: "Worlds Qualified",
    featured: true,
    image: "/projects/competition.jpg",
  },
  {
    title: "Private Robotics PID Tuning Workflow",
    description:
      "Built a custom PID auto-tuning workflow that reduced tuning time from multiple days to roughly 1–5 minutes. Kept private to protect competitive advantage.",
    tags: ["C++", "PID Control", "Robotics", "Testing", "Automation"],
    status: "Private / Case Study",
  },
  {
    title: "CRM Importer / Automation Tooling",
    description:
      "Automation for extracting, cleaning, and organizing client data. Practical software that cuts manual work.",
    tags: ["Python", "JavaScript", "Chrome Extension", "AI", "Automation"],
    status: "Work / Confidential",
  },
  {
    title: "MattOS",
    description:
      "A local-first Obsidian system that turns an idea dump into scored, organized notes and a weekly action queue.",
    tags: ["Python", "Obsidian", "Local AI", "Productivity", "Automation"],
    status: "In Progress",
  },
];
