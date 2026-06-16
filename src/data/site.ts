// ───────────────────────────────────────────────────────────────────────────
//  SITE-WIDE CONTENT  ·  edit names, copy, and links here
// ───────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Matthew Wolf",
  role: "High school developer & VEX robotics lead programmer",
  location: "Union, KY",
  // Core one-line positioning.
  positioning:
    "High school developer building robotics software, automation tools, and practical AI workflows.",

  // Public contact — email only (phone intentionally kept private).
  email: "mattmtw09@gmail.com",

  // Replace the # placeholders with your real profile URLs.
  links: {
    github: "https://github.com/MWolf10925",
    linkedin: "https://www.linkedin.com/in/matt-wolf-478972401",
  },

  hero: {
    badge: "Open to internships & project work",
    headline: "I build robotics software, automation tools, and practical AI workflows.",
    subheadline:
      "I'm Matthew Wolf, a high school developer and VEX robotics lead programmer focused on C++, automation, web tools, and real-world problem solving.",
    // Short mono "currently" line under the hero.
    currently: "Product Automation Eng. intern @ Instant Quote · competitive VEX C++",
  },

  education: [
    {
      school: "Randall K. Cooper High School",
      detail: "Early College Program · GPA 4.0 (unweighted)",
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
    body: "I'm not trying to look like a finished expert. I'm building proof through real projects — robotics systems, automation tools, web experiments, and AI workflows that solve actual problems. My focus is simple: learn fast, build useful things, test them, and keep improving.",
    // What I'm working toward (professional framing).
    buildingToward: [
      "Building tools, systems, and businesses that are genuinely useful and help real people.",
      "Independence — the freedom to choose what I work on and never be boxed into one path.",
      "Respect earned through discipline, skill, and results — not attention.",
      "Always on an incline: stronger, smarter, and more capable than I was last year.",
      "Building something my family is proud of, and that younger people can look up to.",
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
