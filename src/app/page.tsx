import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Preloader } from "@/components/effects/preloader";
import { AuroraBackground } from "@/components/effects/aurora-background";
import { ScrollProgress } from "@/components/effects/scroll-progress";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { Projects } from "@/components/sections/projects";
import { Games } from "@/components/sections/games";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Preloader />
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Games />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
