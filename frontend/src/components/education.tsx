import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Education() {
  return (
    <section id="education" className="glass-card section-shell">
      <SectionHeading
        eyebrow="Education"
        title=""
        description=""
      />

      <div className="grid gap-4">
        {portfolioData.education.map((item) => (
          <article
            key={`${item.degree}-${item.institution}`}
            className="rounded-[24px] border border-white/10 bg-white/5 p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-lg font-semibold text-white">
                {item.degree} · {item.institution}
              </h3>

              <span className="text-sm text-pink-200/80">{item.period}</span>
            </div>

            <p className="mt-3 text-sm leading-7 text-white/70">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}