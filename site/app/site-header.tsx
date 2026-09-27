import { ThemeToggle } from './theme-toggle';

export function SiteHeader({ projectsPage = false }: { projectsPage?: boolean }) {
  return <header className="header wrap">
    <a href="/" className="brand" aria-label="Marouane Ben Haddou home">Marouane Ben Haddou</a>
    <nav aria-label="Main navigation">
      <a href="/projects" aria-current={projectsPage ? 'page' : undefined}>Projects</a>
      <a href="/#experience">Experience</a>
      <a href="/#education">Education</a>
      <a href="/#skills">Skills</a>
      <a href="/#contact">Contact</a>
    </nav>
    <ThemeToggle />
  </header>;
}
