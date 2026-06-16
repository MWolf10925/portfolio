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
      "C++ robotics software for VEX competition, including autonomous routines, odometry, sensors, driver-control systems, and structured testing. The backbone of a Worlds-qualified competition robot.",
    tags: ["C++", "VEX V5", "Odometry", "Sensors", "Autonomous"],
    status: "Competition",
    featured: true,
    image: "/projects/robotics.jpg",
  },
  {
    title: "3009H Heroic Robotics — VEX Worlds",
    description:
      "Lead programmer, driver, and notebooker for 3009H Heroic Robotics. Built the autonomous and driver-control systems that helped qualify the team for the VEX Robotics World Championship, alongside a Design Award, a Skills Award, tournament championships, and multiple state qualifications.",
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
      "Worked on automation tooling for extracting, cleaning, and organizing client data from business workflows. Focused on practical software that saves time and reduces manual work.",
    tags: ["Python", "JavaScript", "Chrome Extension", "AI", "Automation"],
    status: "Work / Confidential",
  },
  {
    title: "MattOS",
    description:
      "A local-first Obsidian-based idea and execution system for organizing thoughts, projects, tasks, prompts, and next actions.",
    tags: ["Python", "Obsidian", "Local AI", "Productivity", "Automation"],
    status: "In Progress",
  },
];
