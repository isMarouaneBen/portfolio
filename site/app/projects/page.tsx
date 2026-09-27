import { GitHubIcon } from '../social-icons';
import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { ProjectList } from './project-list';
import { SiteHeader } from '../site-header';
export const metadata: Metadata = {
  title: 'Projects | Marouane Ben Haddou',
  description: 'Explore my data engineering, applied AI, and software projects, with technical explanations, tech stacks, and source code.',
};
const github = 'https://github.com/isMarouaneBen';
export default function ProjectsPage() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader projectsPage />
    <main id="main">
      <section className="section wrap projects-page" id="projects">
        <div className="section-heading"><div><h1 className="projects-title">Projects</h1></div><a className="text-link" href={github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub profile <ArrowUpRight size={16}/></a></div>
        <p className="section-intro">Data platforms, AI applications, and software projects. Each project includes how it works and the technologies behind it.</p>
        <ProjectList />
      </section>
    </main>
    <footer className="wrap footer"><p>© {new Date().getFullYear()} Marouane Ben Haddou</p><a href="/">Back to home</a></footer>
  </>;
}
