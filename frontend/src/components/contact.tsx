import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="glass-card section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something meaningful"
        description="contact form to be added soon"
      />
      <div className="flex flex-wrap gap-4">
        <a href={`mailto:${portfolioData.email}`} className="rounded-full bg-gradient-to-r from-pink-300 to-violet-300 px-6 py-3 text-sm font-semibold text-slate-950">
          Email me
        </a>
        <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
          GitHub
        </a>
        <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white">
          LinkedIn
        </a>
      </div>
    </section>
  );
}