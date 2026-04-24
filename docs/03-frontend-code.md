
# Frontend code

## 1) Install one extra package
```powershell
cd frontend
npm install lucide-react clsx tailwind-merge
```

## 2) Create `.env.local`
```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

## 3) Replace `src/app/layout.tsx`
```tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bhagyashri | Portfolio",
  description: "Modern full-stack portfolio built with Next.js, Tailwind, and FastAPI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
```

## 4) Replace `src/app/page.tsx`
```tsx
import { About } from "@/components/about";
import { BackgroundGlow } from "@/components/background-glow";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0911] text-white">
      <BackgroundGlow />
      <Header />
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
```

## 5) Replace `src/app/globals.css`
```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

:root {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Plus Jakarta Sans', sans-serif;
  background:
    radial-gradient(circle at top left, rgba(244, 114, 182, 0.16), transparent 28%),
    radial-gradient(circle at top right, rgba(192, 132, 252, 0.18), transparent 24%),
    linear-gradient(180deg, #0b0911 0%, #120d1f 50%, #0b0911 100%);
}

::selection {
  background: rgba(244, 114, 182, 0.35);
  color: #ffffff;
}

.glass-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
  border: 1px solid rgba(255,255,255,0.12);
  box-shadow: 0 20px 60px rgba(0,0,0,0.22);
  backdrop-filter: blur(16px);
}

.section-shell {
  border-radius: 28px;
  padding: 1.5rem;
}

@media (min-width: 768px) {
  .section-shell {
    padding: 2rem;
  }
}
```

## 6) Create `src/data/portfolio.ts`
```ts
export const portfolioData = {
  name: "Bhagyashri",
  role: "Aspiring Data Engineer • Data Analyst • Full-Stack Developer",
  tagline:
    "I build clean data-driven experiences, modern web apps, and scalable backend systems.",
  about:
    "I am a tech-focused professional transitioning into data engineering and analytics, with hands-on experience in Python, SQL, React, FastAPI, cloud tools, and project-based learning.",
  email: "youremail@example.com",
  location: "Nashik, Maharashtra, India",
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://www.linkedin.com/in/yourprofile",
  },
  skills: [
    "Python",
    "SQL",
    "FastAPI",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Pandas",
    "PostgreSQL",
    "GCP",
    "AWS",
  ],
  projects: [
    {
      title: "Data Analytics Dashboard",
      description: "Interactive analytics project with clean visual UI and KPI storytelling.",
      stack: ["Python", "SQL", "Streamlit"],
      link: "#",
    },
    {
      title: "Job Tracker Web App",
      description: "Track applications, progress, notes, and interview preparation in one place.",
      stack: ["Next.js", "FastAPI", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Portfolio API",
      description: "FastAPI backend serving portfolio content and future contact/blog endpoints.",
      stack: ["FastAPI", "Pydantic", "Render"],
      link: "#",
    },
  ],
  experience: [
    {
      title: "Systems Engineer",
      org: "Infosys",
      period: "Past experience",
      detail: "Worked on engineering workflows and gained a strong base in problem-solving and enterprise delivery.",
    },
    {
      title: "Career Transition to Data",
      org: "Self-driven learning",
      period: "Recent years",
      detail: "Focused on Python, SQL, analytics, backend development, and portfolio projects to shift into data engineering and analysis.",
    },
  ],
};
```

## 7) Create `src/components/section-heading.tsx`
```tsx
export function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-8 space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-pink-300/80">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm leading-7 text-white/70 sm:text-base">{description}</p> : null}
    </div>
  );
}
```

## 8) Create `src/components/background-glow.tsx`
```tsx
export function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-8rem] top-[-5rem] h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="absolute right-[-5rem] top-40 h-80 w-80 rounded-full bg-fuchsia-400/15 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-400/10 blur-3xl" />
    </div>
  );
}
```

## 9) Create `src/components/header.tsx`
```tsx
const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0911]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-lg font-extrabold tracking-wide text-white">
          Bhagyashri<span className="text-pink-300">.</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/75 transition hover:text-pink-200">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-full border border-pink-300/30 bg-pink-300/10 px-4 py-2 text-sm font-medium text-pink-100 transition hover:bg-pink-300/20"
        >
          Let’s talk
        </a>
      </div>
    </header>
  );
}
```

## 10) Create `src/components/hero.tsx`
```tsx
import { portfolioData } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="grid min-h-[82vh] items-center gap-8 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:pt-12">
      <div className="glass-card section-shell relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.1),transparent_55%)]" />
        <div className="relative space-y-6">
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-pink-200/90">
            Open to opportunities
          </span>
          <div className="space-y-4">
            <p className="text-sm font-medium text-violet-200/80">{portfolioData.role}</p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building elegant products, useful data workflows, and scalable backend systems.
            </h1>
            <p className="max-w-2xl text-base leading-8 text-white/70 sm:text-lg">{portfolioData.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="rounded-full bg-gradient-to-r from-pink-300 to-violet-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
              View projects
            </a>
            <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Contact me
            </a>
          </div>
        </div>
      </div>

      <div className="grid gap-5">
        <div className="glass-card section-shell">
          <p className="text-sm uppercase tracking-[0.24em] text-pink-200/80">Current focus</p>
          <h3 className="mt-4 text-2xl font-bold text-white">Data engineering + modern full-stack portfolio systems</h3>
          <p className="mt-4 leading-7 text-white/70">
            Strong interest in Python, SQL, APIs, analytics projects, and production-ready frontend design.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="glass-card section-shell">
            <p className="text-3xl font-bold text-pink-200">10+</p>
            <p className="mt-2 text-sm text-white/70">Core tools across web, backend, and data stack</p>
          </div>
          <div className="glass-card section-shell">
            <p className="text-3xl font-bold text-violet-200">∞</p>
            <p className="mt-2 text-sm text-white/70">Room to scale with blog, CMS, and admin features later</p>
          </div>
        </div>
      </div>
    </section>
  );
}
```

## 11) Create the remaining components

### `src/components/about.tsx`
```tsx
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function About() {
  return (
    <section id="about" className="glass-card section-shell">
      <SectionHeading eyebrow="About" title="A modern portfolio with substance" />
      <div className="grid gap-6 lg:grid-cols-2">
        <p className="text-base leading-8 text-white/75">{portfolioData.about}</p>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm leading-7 text-white/70">
          This template is intentionally modular so you can later add a blog, admin dashboard, analytics, project CMS, or contact form backend without redesigning everything.
        </div>
      </div>
    </section>
  );
}
```

### `src/components/skills.tsx`
```tsx
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Skills() {
  return (
    <section id="skills" className="glass-card section-shell">
      <SectionHeading eyebrow="Skills" title="Tools I use" />
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
```

### `src/components/project-card.tsx`
```tsx
type Project = {
  title: string;
  description: string;
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
```

### `src/components/projects.tsx`
```tsx
import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionHeading } from "./section-heading";

export function Projects() {
  return (
    <section id="projects" className="glass-card section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Use this section to highlight your strongest project stories with impact, tools, and outcomes."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
```

### `src/components/experience.tsx`
```tsx
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Experience() {
  return (
    <section className="glass-card section-shell">
      <SectionHeading eyebrow="Journey" title="Experience and transition" />
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
```

### `src/components/contact.tsx`
```tsx
import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "./section-heading";

export function Contact() {
  return (
    <section id="contact" className="glass-card section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build something meaningful"
        description="Later, you can connect this section to the FastAPI backend for a working contact form and project inquiry flow."
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
```

### `src/components/footer.tsx`
```tsx
export function Footer() {
  return (
    <footer className="pb-4 pt-2 text-center text-sm text-white/45">
      Built with Next.js, Tailwind CSS, and FastAPI.
    </footer>
  );
}
```
