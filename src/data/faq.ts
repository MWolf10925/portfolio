// ───────────────────────────────────────────────────────────────────────────
//  FAQ  ·  honest objection-handling. Real answers only, no overpromising.
// ───────────────────────────────────────────────────────────────────────────

export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: "You're still in high school. Why does that matter less than it sounds?",
    a: "Because the work is real. A robot I program qualified for VEX Worlds. A Chrome extension I built is live on the Chrome Web Store with companion iOS and Android apps. The proof does not care how old I am.",
  },
  {
    q: "How much of this did you actually build yourself?",
    a: "The systems are mine. I write the C++ autonomy, ship the extensions and apps, and wire up the integrations. I use AI tools to move faster, the same way any modern developer does, but the architecture and the decisions are mine and I can explain every part.",
  },
  {
    q: "Can you take direction and work on a team?",
    a: "Yes. On 3009H I work across programming, driving, strategy, and notebook documentation with a team under competition pressure. During my internship I shipped to real stores against real review processes and deadlines.",
  },
  {
    q: "What are you looking for right now?",
    a: "Internships and project-based software work where I can ship real things and learn fast. Robotics, automation, web, and AI are all in scope. Email is the fastest way to reach me.",
  },
];
