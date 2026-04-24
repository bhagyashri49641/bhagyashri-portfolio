import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="glass-card section-shell">
      <SectionHeading
        eyebrow="Projects"
        title=""
        description="Showcasing my data analytics and visualization work"
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}