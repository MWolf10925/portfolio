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
    headline: "I turn hard problems into things that ship.",
    subheadline:
      "High school developer and Worlds-qualified VEX robotics lead programmer, building robotics autonomy, automation, and AI tools that actually run.",
    primaryCta: { label: "See what I've shipped", href: "#projects" },
    secondaryCta: { label: "Start a conversation", href: "#contact" },
  },

  // Short thesis section — the differentiator, stated plainly.
  approach: {
    eyebrow: "The difference",
    heading: "Most people talk about building. I ship.",
    body: "Plenty of people can describe an idea. Fewer take it all the way. I work in the gap between a cool idea and something that actually runs, then I document the whole way there. Autonomous routines that win matches, a Chrome extension live in the store, AI tools running on real machines.",
    pillars: [
      {
        title: "Robotics autonomy",
        body: "C++ autonomous systems, odometry, and sensor feedback for a Worlds-qualified VEX robot.",
      },
      {
        title: "Shipped software",
        body: "A CRM-importer Chrome extension and companion iOS and Android apps, live in real stores.",
      },
      {
        title: "AI and automation",
        body: "Local-first AI assistants and workflow tools that solve actual day-to-day problems.",
      },
    ],
  },

  education: [
    {
      school: "Randall K. Cooper High School",
      detail: "Early College Program · GPA 4.0 (unweighted) · 33 ACT Math",
      period: "2023 to 2027 (expected)",
    },
    {
      school: "Northern Kentucky University",
      detail: "Early-college / dual-enrollment coursework",
      period: "Current",
    },
  ],

  about: {
    heading: "How I build",
    body: "I'm not trying to look like a finished expert. I'm building proof through real projects. Robotics systems, automation tools, web experiments, and AI workflows that solve actual problems. My focus is simple. Learn fast, build useful things, test them, and keep improving.",
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
    heading: "Let's build something.",
    body: "I'm looking for internships and project-based software work. If you're a founder, engineer, or team that ships, I'd love to talk. Email is the fastest way to reach me.",
  },
} as const;
