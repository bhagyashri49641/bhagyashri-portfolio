import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Certifications() {
  return (
    <section id="certifications" className="glass-card section-shell">
      <SectionHeading
        eyebrow="Certifications"
        title=""
      />
      <div className="grid gap-4 md:grid-cols-2">
        {portfolioData.certifications.map((item) => (
          <article
            key={`${item.title}-${item.issuer}`}
            className="rounded-[24px] border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-violet-200/80">
              {item.issuer}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-white/65">{item.date}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-block text-sm font-semibold text-pink-200 hover:text-violet-200"
            >
              View credential →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}