export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-8 space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{description}</p> : null}
    </div>
  );
}
