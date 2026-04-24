import { About } from "@/components/about";
import { BackgroundGlow } from "@/components/background-glow";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0911] text-white">
      <BackgroundGlow />
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-0 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

/*import { About } from "@/components/about";
import { BackgroundGlow } from "@/components/background-glow";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0911] text-white">
      <BackgroundGlow />
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}*/