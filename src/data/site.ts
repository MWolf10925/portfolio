// ───────────────────────────────────────────────────────────────────────────
//  SITE-WIDE CONTENT  ·  edit names, copy, and links here
// ───────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Matthew Wolf",
  role: "High school developer & VEX robotics lead programmer",
  location: "Union, KY",
  // Core one-line positioning (used for the SEO/social description).
  positioning:
    "High school developer building robotics, automation, and AI tools.",

  // Public contact — email only (phone intentionally kept private).
  email: "mattmtw09@gmail.com",

  // Replace the # placeholders with your real profile URLs.
  links: {
    github: "https://github.com/MWolf10925",
    linkedin: "https://www.linkedin.com/in/matt-wolf-478972401",
  },

  hero: {
    headline: "I build robotics, automation, and AI tools.",
    subheadline: "High school developer and VEX robotics lead programmer.",
  },

  education: [
    {
      school: "Randall K. Cooper High School",
      detail: "Early College Program · GPA 4.0 (unweighted) · 33 ACT Math",
      period: "2023 – 2027 (expected)",
    },
    {
      school: "Northern Kentucky University",
      detail: "Early-college / dual-enrollment coursework",
      period: "Current",
    },
  ],

  about: {
    heading: "How I build",
    body: "I'm not trying to look like a finished expert. I'm building proof through real projects: robotics systems, automation tools, web experiments, and AI workflows that solve actual problems. My focus is simple. Learn fast, build useful things, test them, and keep improving.",
    // What I'm working toward (professional framing).
    buildingToward: [
      "Tools and systems that are actually useful to real people.",
      "Independence, never boxed into a single path.",
      "Respect earned through skill and results, not attention.",
      "Always improving. Always building.",
    ],
    // Skills I'm actively leveling up.
    learning: [
      "A personal \"Jarvis\" AI assistant",
      "AI-driven web UI",
      "Leading teams",
      "Communication & psychology",
      "Calm under pressure",
      "Building in public",
      "Boxing & calisthenics",
    ],
  },

  contact: {
    heading: "Want to connect?",
    body: "I'm open to internships, project-based work, mentorship, robotics/software opportunities, and conversations with builders, founders, and technical teams.",
  },
} as const;
