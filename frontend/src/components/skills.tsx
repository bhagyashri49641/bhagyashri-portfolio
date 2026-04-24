import { portfolioData } from "@/data/portfolio";

import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="glass-card section-shell">
      <SectionHeading eyebrow="Skills" title="" />
      <div className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}