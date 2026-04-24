import Image from "next/image";
import { Download, FolderGit2, Briefcase, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const profileLinks = [
  {
    icon: Briefcase,
    href: portfolioData.socials.linkedin,
    label: "LinkedIn",
    external: true,
  },
  {
    icon: FolderGit2,
    href: portfolioData.socials.github,
    label: "GitHub",
    external: true,
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_24%),linear-gradient(135deg,#120d1f_0%,#0b0911_45%,#140f20_100%)] px-6 py-12 sm:px-10 lg:px-14 lg:py-16"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:42px_42px] opacity-25" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-extrabold leading-[0.95] tracking-tight text-violet-100 sm:text-4xl lg:text-5xl">
            {portfolioData.name}
          </h1>

          <h2 className="mt-4 text-lg font-bold text-violet-400 text-nowrap sm:text-xl lg:text-2xl">
            {portfolioData.role}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
            Transforming Raw Data → Reliable Pipelines → Meaningful Insights
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {profileLinks.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex min-w-[150px] items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-violet-200 shadow-[0_10px_25px_rgba(0,0,0,0.22)] transition duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-white"
                >
                  <Icon size={22} strokeWidth={2.1} />
                  <span className="text-base font-medium">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={portfolioData.socials.resume}
              download
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition hover:scale-[1.02]"
            >
              <Download size={18} />
              Resume
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-6 py-3.5 text-base font-semibold text-white shadow-[0_0_30px_rgba(168,85,247,0.35)] transition hover:scale-[1.02]"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative h-[280px] w-[280px] overflow-hidden rounded-full border-4 border-violet-500 bg-[#120f18] shadow-[0_0_45px_rgba(139,92,246,0.35)] sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]">
              <Image
                src={portfolioData.profileImage}
                alt={`${portfolioData.name} profile photo`}
                fill
                priority
                className="object-cover object-[center_25%]"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 340px, 420px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}