import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/effects/preloader";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { SectionRail } from "@/components/effects/section-rail";
import { SectionTransition } from "@/components/effects/section-transition";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Approach } from "@/components/sections/approach";
import { ShipPath } from "@/components/sections/ship-path";
import { Projects } from "@/components/sections/projects";
import { Games } from "@/components/sections/games";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Faq } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <ScrollProgress />
      <SectionRail />
      <Navbar />
      <main>
        {/* Each handoff uses a transition matched to the section's content.
            Approach, About, ShipPath and FAQ are left to their own native
            motion (masked text, scroll-reveal copy, the line scene, staggered
            rows) so the page breathes between the bolder reveals. */}
        <Hero />

        {/* Proof / numbers → venetian blinds (instrument-panel feel) */}
        <SectionTransition variant="blinds">
          <Stats />
        </SectionTransition>

        {/* Thesis → native masked-text + word reveal */}
        <Approach />

        {/* Signature scene (sticky — never wrapped) */}
        <ShipPath />

        {/* Selected work → split "doors" part to reveal the work */}
        <SectionTransition variant="doors">
          <Projects />
        </SectionTransition>

        {/* Games → blinds (reliable; the iris failure mode was "invisible") */}
        <SectionTransition variant="blinds">
          <Games />
        </SectionTransition>

        {/* How I build → native scroll-reveal copy */}
        <About />

        {/* Skills → curtain wipe */}
        <SectionTransition variant="curtain">
          <Skills />
        </SectionTransition>

        {/* Experience timeline → blinds (rows echo the timeline) */}
        <SectionTransition variant="blinds">
          <Experience />
        </SectionTransition>

        {/* FAQ → native staggered rows */}
        <Faq />

        {/* Final CTA → curtain bookend (echoes the page-transition curtain) */}
        <SectionTransition variant="curtain">
          <Contact />
        </SectionTransition>
      </main>
      <Footer />
    </>
  );
}
