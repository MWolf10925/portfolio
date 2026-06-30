"use client";

import Image from "next/image";
import { ArrowLeft, Mail, ExternalLink } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Logo } from "@/components/brand/logo";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { MaskText } from "@/components/animations/mask-text";
import { TransitionLink } from "@/components/effects/page-transition";
import { site } from "@/data/site";

const META = [
  { k: "Role", v: "Product Automation Engineer (Intern)" },
  { k: "Where", v: "Instant Quote · Cincinnati, OH" },
  { k: "When", v: "Jun 2026 to Present" },
  { k: "Stack", v: "React · Vite · TypeScript · Supabase · Capacitor" },
];

const SHIPPED = [
  {
    title: "Field Mode and Today's Route",
    body: "Rebuilt the crew's day-of screen: stops auto-order into the fastest route, each stop got a working Navigate, Call, and Text button, an offline banner, quick-photo capture, and first-load skeletons.",
  },
  {
    title: "Role-aware mobile home",
    body: "Field crews land on a big clock-in hero; office and leads get a different layout. Added friendly empty states and success micro-interactions (the checkmark animations on key actions).",
  },
  {
    title: "The IQ AI chat surface",
    body: "Turned the assistant from a cramped pull-up drawer into its own full-height page with a clean composer and a live voice mode, so it never flashes the page behind it on cold start.",
  },
  {
    title: "Cleaner lists and navigation",
    body: "Compact Quotes, Invoices, and Jobs cards with a Filter dropdown and recent-items view, plus larger, more reliable touch targets across the mobile app.",
  },
  {
    title: "Native iOS and Android",
    body: "Background location for live crew routing and mileage (Capacitor background-geolocation), Android 13 notification + camera permissions (fixing a WebView permission crash), and the iOS privacy manifest.",
  },
  {
    title: "Shipped against real review",
    body: "A branded offline fallback screen replaced the raw connection-error page, and I worked through App Store and Google Play submissions, privacy declarations, and background-location review.",
  },
];

const GALLERY = [
  { src: "/projects/iq-pipeline.png", alt: "Instant Quote sales pipeline board with drag-and-drop stages", tall: false, caption: "Sales pipeline (web)" },
  { src: "/projects/iq-mobile-home.png", alt: "Instant Quote role-aware mobile home with clock-in and tasks", tall: true, caption: "Role-aware mobile home" },
  { src: "/projects/iq-today-route.png", alt: "Instant Quote Today's Route field-mode screen", tall: true, caption: "Today's Route (Field Mode)" },
];

export function InstantQuoteContent() {
  const reduce = useReducedMotion();

  return (
    <div className="min-h-screen">
      {/* minimal top bar */}
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

        {/* header */}
        <div className="mt-8 max-w-3xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Case study · Internship
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            <MaskText text="Instant Quote" />
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A CRM and quoting platform for field-service teams, live on the
            Chrome Web Store, App Store, and Google Play. I joined as a product
            automation engineer intern and shipped the mobile field experience
            and the native iOS and Android layer.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <Badge variant="primary">Live · Chrome Web Store</Badge>
            <Badge variant="primary">Live · App Store</Badge>
            <Badge variant="primary">Live · Google Play</Badge>
          </div>
        </div>

        {/* meta */}
        <Reveal className="mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-2 lg:grid-cols-4">
          {META.map((m) => (
            <div key={m.k}>
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{m.k}</p>
              <p className="mt-1.5 text-sm text-foreground">{m.v}</p>
            </div>
          ))}
        </Reveal>

        {/* hero shot */}
        <motion.div
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          whileInView={reduce ? undefined : { clipPath: "inset(0 0% 0 0)" }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-12 aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-card"
        >
          <Image
            src="/projects/iq-dashboard.png"
            alt="Instant Quote dashboard with the Talk to IQ assistant panel"
            fill
            sizes="(max-width: 768px) 100vw, 1100px"
            className="object-cover object-top"
            priority
          />
        </motion.div>
        <p className="mt-3 font-mono text-xs text-muted-foreground/70">
          Dashboard with the IQ assistant. Screens use demo and seed data.
        </p>

        {/* contribution honesty */}
        <div className="mt-16 max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            <MaskText text="What I actually did" />
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Across roughly two weeks of focused work, my account is on 99 commits
            on the web app. I authored about half directly and co-authored the
            rest with the lead developer. My lane was the mobile field experience
            and the native wrappers. Here is the concrete work, not a summary.
          </p>
        </div>

        {/* shipped grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {SHIPPED.map((item, i) => (
            <Reveal key={item.title} index={i % 2}>
              <div className="h-full rounded-lg border border-border bg-card/50 p-6 transition-colors duration-300 hover:border-primary/40">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* gallery */}
        <h2 className="mt-16 text-2xl font-semibold tracking-tight sm:text-3xl">
          <MaskText text="A few of the screens" />
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((g, i) => (
            <Reveal key={g.src} index={Math.min(i, 2)}>
              <figure>
                <div
                  className={`relative w-full overflow-hidden rounded-xl border border-border bg-card ${
                    g.tall ? "aspect-[9/16]" : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className={g.tall ? "object-contain p-2" : "object-cover object-top"}
                  />
                </div>
                <figcaption className="mt-2 font-mono text-xs text-muted-foreground/70">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* close */}
        <div className="mt-20 rounded-xl border border-border bg-card/50 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Want the same energy on your team?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            This is the kind of thing I do. Real features, shipped to real stores,
            against real review. Email is the fastest way to reach me.
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
