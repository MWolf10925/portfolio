// ───────────────────────────────────────────────────────────────────────────
//  PROOF / STATS  ·  short, verifiable credibility points
// ───────────────────────────────────────────────────────────────────────────

export interface Stat {
  label: string;
  detail?: string;
}

export const stats: Stat[] = [
  { label: "VEX Worlds Qualified", detail: "Competitive VEX V5 robotics" },
  { label: "4.0 Unweighted GPA", detail: "High school / early college" },
  { label: "5,000+ game project plays", detail: "Across published independent projects" },
  { label: "Robotics Lead Programmer", detail: "Heroic Robotics Team" },
  { label: "Built PID auto-tuning workflow", detail: "Days of tuning → ~1–5 minutes" },
  {
    label: "6 languages in active use",
    detail: "C++, Python, JavaScript, Java, Lua, SQL",
  },
];
