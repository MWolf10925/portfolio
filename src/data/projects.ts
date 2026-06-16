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
}

export const projects: Project[] = [
  {
    title: "Robotics Autonomous Systems",
    description:
      "C++ robotics software for VEX competition, including autonomous routines, odometry, sensors, driver-control systems, and structured testing.",
    tags: ["C++", "VEX V5", "Odometry", "Sensors", "Autonomous"],
    status: "Competition",
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
  {
    title: "Independent Game & Web Projects",
    description:
      "Built independent game and web projects using Lua, Python, JavaScript, HTML, and CSS, with published projects reaching over 5,000 total plays.",
    tags: ["Lua", "JavaScript", "HTML", "CSS", "UI"],
    status: "Built",
  },
];
