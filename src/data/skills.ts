// ───────────────────────────────────────────────────────────────────────────
//  SKILLS  ·  grouped; add or rename groups freely
// ───────────────────────────────────────────────────────────────────────────

export interface SkillGroup {
  title: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["C++", "Python", "JavaScript", "Java", "Lua", "SQL"],
  },
  {
    title: "Robotics",
    skills: [
      "VEX V5",
      "Autonomous programming",
      "Odometry",
      "PID control",
      "Sensors",
      "Driver control",
      "Testing",
      "Notebooking",
    ],
  },
  {
    title: "Web / Automation",
    skills: [
      "Next.js",
      "HTML",
      "CSS",
      "Chrome extensions",
      "Workflow automation",
      "AI-assisted development",
      "Data extraction",
    ],
  },
  {
    title: "Work style",
    skills: [
      "Problem solving",
      "Fast learning",
      "Documentation",
      "Testing",
      "Independent execution",
      "Communication",
    ],
  },
];
