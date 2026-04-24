type Project = {
  title: string;
  description: string[];
  stack: string[];
  link: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-[24px] border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]">
      <div className="mb-4 inline-flex rounded-full border border-pink-300/20 bg-pink-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-pink-100">
        Featured project
      </div>
      <h3 className="text-xl font-bold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-white/70">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full bg-white/6 px-3 py-1 text-xs text-white/70">{item}</span>
        ))}
      </div>
      <a href={project.link} className="mt-6 inline-block text-sm font-semibold text-violet-200 hover:text-pink-200">
        View more →
      </a>
    </article>
  );
}