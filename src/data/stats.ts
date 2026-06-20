// ───────────────────────────────────────────────────────────────────────────
//  PROOF  ·  big animated numbers + qualitative credibility points
// ───────────────────────────────────────────────────────────────────────────

export interface BigStat {
  value: number;
  decimals?: number;
  comma?: boolean;
  suffix?: string;
  label: string;
}

export const bigStats: BigStat[] = [
  { value: 5000, comma: true, suffix: "+", label: "Game plays" },
  { value: 4.0, decimals: 1, label: "Unweighted GPA" },
  { value: 33, label: "ACT Math" },
  { value: 3, label: "Apps shipped to stores" },
];

export const proofPoints: string[] = [
  "VEX Worlds Qualified",
  "Lead Programmer · 3009H Heroic Robotics",
  "PID auto-tuner: days → ~1–5 min",
];
