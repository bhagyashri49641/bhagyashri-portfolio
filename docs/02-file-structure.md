
# File structure

## Final recommended structure

```text
portfolio-starter-kit/
├── frontend/
│   ├── public/
│   │   └── resume.pdf
│   ├── src/
│   │   ├── app/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── components/
│   │   │   ├── about.tsx
│   │   │   ├── background-glow.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── header.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── project-card.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── section-heading.tsx
│   │   │   ├── skills.tsx
│   │   │   └── theme-toggle.tsx
│   │   ├── data/
│   │   │   └── portfolio.ts
│   │   ├── lib/
│   │   │   └── api.ts
│   │   └── types/
│   │       └── index.ts
│   ├── .env.local
│   ├── package.json
│   └── tsconfig.json
│
├── backend/
│   ├── app/
│   │   ├── api/
│   │   │   └── routes/
│   │   │       └── portfolio.py
│   │   ├── core/
│   │   │   └── config.py
│   │   ├── models/
│   │   │   └── schemas.py
│   │   └── main.py
│   ├── .env
│   ├── requirements.txt
│   └── render.yaml
│
└── docs/
    ├── 01-project-setup.md
    ├── 02-file-structure.md
    ├── 03-frontend-code.md
    ├── 04-backend-code.md
    ├── 05-deployment-vercel-render.md
    └── 06-customization-guide.md
```

## Why this scales well
- components are isolated and easy to extend
- portfolio content can be moved later to CMS/database
- backend can expand to contact forms, blog APIs, analytics, auth, admin panel
- frontend is App Router based, which is the modern Next.js default
