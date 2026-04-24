import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="glass-card section-shell">
      <SectionHeading eyebrow="About" title="" />
      <div className="grid gap-6 lg:grid-cols-1">
        <p className="text-base leading-8 text-white/75">{portfolioData.about}</p>
       
      </div>
    </section>
  );
}
