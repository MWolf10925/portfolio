"use client";

import Image from "next/image";
import { ArrowLeft, Mail, ExternalLink, Trophy } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/animations/mask-text";
import { TransitionLink } from "@/components/effects/page-transition";
import { site } from "@/data/site";

const META = [
  { k: "Role", v: "Lead Programmer · Driver · Notebooker" },
  { k: "Team", v: "3009H Heroic Robotics (VEX V5)" },
  { k: "When", v: "May 2024 to Present" },
  { k: "Stack", v: "C++ · VEX V5 · Odometry · PID · Fusion 360" },
];

const RESULTS = [
  "VEX Worlds Qualified",
  "Design Award",
  "Skills Award",
  "Tournament Championships",
  "Multiple State Qualifications",
];

const BUILT = [
  {
    title: "Autonomous systems in C++",
    body: "Routines built on odometry and sensor feedback with structured testing. This autonomy is the backbone of a Worlds-qualified robot.",
  },
  {
    title: "A PID auto-tuner",
    body: "A custom tool that cut drivetrain tuning from multiple days to roughly one to five minutes. The method stays private to protect a competitive advantage, but the result is real and repeatable.",
  },
  {
    title: "Drivetrain design (CAD)",
    body: "Designed a six-wheel 2.75 inch drivetrain, two 11W plus one 5.5W motor per side, targeting about 450 rpm at the wheel. Parametric, documented, and built.",
  },
  {
    title: "Driver control",
    body: "Tuned, predictable driver controls, then drove them in competition. Writing the code and driving it under pressure is a tight, useful feedback loop.",
  },
  {
    title: "Engineering notebook",
    body: "Documented design decisions, testing, and iteration throughout the season. The notebook is a big part of how the team earned the Design Award.",
  },
  {
    title: "Competition under pressure",
    body: "Programming, driving, strategy, and prep across a full season, qualifying for Worlds with awards and state qualifications along the way.",
  },
];

const GALLERY = [
  { src: "/projects/robotics.jpg", alt: "3009H robot mechanism in detail", fit: "cover", caption: "The robot, up close" },
  { src: "/projects/controller.jpg", alt: "VEX controller with a custom 3D-printed mount", fit: "cover", caption: "Controller with a custom mount" },
  { src: "/projects/robotics-cad.png", alt: "CAD render of the drivetrain assembly", fit: "contain-dark", caption: "Drivetrain in CAD" },
  { src: "/projects/robotics-drivetrain.png", alt: "Top-view drivetrain layout schematic", fit: "contain-light", caption: "Drivetrain layout (top view)" },
];

export function RoboticsContent() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <TransitionLink href="/" className="group flex items-center gap-2.5" aria-label={`${site.name}, home`}>
            <Logo className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold tracking-tight">
              {site.name}
              <span className="text-primary">.</span>
            </span>
          </TransitionLink>
          <Button asChild size="sm" variant="outline">
            <a href={`mailto:${site.email}`}>
              <Mail className="h-4 w-4" />
              Email me
            </a>
          </Button>
        </div>
      </header>

      <main className="container py-12 sm:py-16">
        <TransitionLink
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to work
        </TransitionLink>

        <div className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Case study · Competition robotics
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <MaskText text="3009H Heroic Robotics" />
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Lead programmer, driver, and notebooker on a VEX V5 team that
            qualified for the World Championship. I write the autonomy in C++,
            design the drivetrain in CAD, drive in matches, and document the
            engineering.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {RESULTS.map((r) => (
              <Badge key={r} variant="primary">
                <Trophy className="mr-1 h-3 w-3" />
                {r}
              </Badge>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          {META.map((m) => (
            <div key={m.k}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{m.k}</p>
              <p className="mt-1.5 text-sm text-foreground">{m.v}</p>
            </div>
          ))}
        </Reveal>

        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          whileInView={reduce ? undefined : { clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card"
        >
          <Image
            src="/projects/robot-dark.jpg"
            alt="The 3009H robot in a dark practice setting"
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <MaskText text="What I own on the team" />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Robotics is where I learned to take a hard problem all the way down to
            something that works under pressure. Here is the concrete work, the
            same way I would explain it in a notebook review.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {BUILT.map((item, i) => (
            <Reveal key={item.title} index={i % 2}>
              <div className="h-full rounded-lg border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-primary/40">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <h2 className="mt-16 text-2xl font-semibold tracking-tight sm:text-3xl">
          <MaskText text="Design, build, drive" />
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} index={i % 2}>
              <figure>
                <div
                  className={`relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border ${
                    g.fit === "contain-light" ? "bg-white" : "bg-card"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 540px"
                    className={g.fit === "cover" ? "object-cover" : "object-contain p-3"}
                  />
                </div>
                <figcaption className="mt-2 font-mono text-xs text-muted-foreground/70">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 rounded-xl border border-border bg-card/50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            This is how I learned to ship.
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tight loops, real deadlines, and documentation. The same habits show
            up in everything else I build. Email is the fastest way to reach me.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4" />
                Email me
              </a>
            </Button>
            <TransitionLink
              href="/"
              className={buttonVariants({ size: "lg", variant: "outline" })}
            >
              <ArrowLeft className="h-4 w-4" />
              Back to work
            </TransitionLink>
          </div>
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {site.name}</p>
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            More on GitHub <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
