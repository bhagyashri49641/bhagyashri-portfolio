import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section id="experience" className="glass-card section-shell">
      <SectionHeading eyebrow="Work Experience" title="" />
      <div className="grid gap-4">
        {portfolioData.experience.map((item) => (
          <article key={item.title} className="rounded-[24px] border border-white/10 bg-white/5 p-6">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-white">{item.title} · {item.org}</h3>
              <span className="text-sm text-pink-200/80">{item.period}</span>
            </div>
            <p className="mt-3 text-sm leading-7 text-white/70">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

