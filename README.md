# Marouane Ben Haddou — Portfolio

React and TypeScript portfolio with project highlights, internship experience, skills, contact links, and a downloadable CV.

## Run locally

```powershell
cd site
npm install
npm run dev
```

Open the local URL printed by the development server.

## Validate and build

```powershell
npx tsc --noEmit
npm run build
```

## Edit content

- `site/app/page.tsx`: biography, experience, skills, and page layout.
- `site/app/projects.ts`: project explanations, tech stacks, and repository links.
- `site/app/skills.ts`: the four skills categories.
- `site/app/projects/project-list.tsx`: project filtering.
- `site/app/globals.css`: responsive styles and light/dark themes.
- `site/app/layout.tsx`: page metadata.
- `site/public/portrait.jpeg`: portrait.
- `site/public/Marouane-Ben-Haddou-CV.pdf`: downloadable resume.

Content is based on the supplied English resume and public GitHub README/source files reviewed on 2026-09-26. Includes all 10 original non-exercise public repositories plus the TaaSim and AetherSignal team projects. Homework repositories and the warehouse fork are excluded. Project descriptions describe documented/source functionality, not a runtime audit of those external projects. The project uses React 19 with the Vinext framework and Lucide icons. No contact form backend is needed: contact buttons open the visitor's email app.

The website has not been deployed.
