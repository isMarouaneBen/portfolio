'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../projects';

const filters = ['All', 'Data engineering', 'AI & machine learning', 'Software development', 'Data visualization'];
const github = 'https://github.com/isMarouaneBen';
function Tags({ items }: { items: string[] }) {
  return <ul className="tags" aria-label="Tech stack">{items.map(item => <li key={item}>{item}</li>)}</ul>;
}
export function ProjectList() {
  const [activeType, setActiveType] = useState('All');
  const filteredProjects = projects.filter(project => activeType === 'All' || project.types.includes(activeType));
  return <>
    <div className="project-filters" role="group" aria-label="Filter projects by type">
      {filters.map(type => <button key={type} type="button" aria-pressed={activeType === type} aria-controls="project-results" onClick={() => setActiveType(type)}>{type}</button>)}
    </div>
    <p className="filter-status" role="status" aria-live="polite" aria-atomic="true">{filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}{activeType !== 'All' && ` · ${activeType}`}</p>
    <div id="project-results">
        <div className="project-grid">{filteredProjects.map((project) => <article className="project" key={project.repository}>
          <div className="project-meta"><span>{String(projects.indexOf(project) + 1).padStart(2, '0')}</span><span>{project.category}</span></div>
          <h2 className="project-title">{project.name}</h2>
          <ul className="description-list project-detail"><li className="project-summary">{project.summary}</li>{project.details.map(detail => <li key={detail}>{detail}</li>)}</ul>
          <div className="project-stack"><h3 className="stack-heading">Tech stack</h3><Tags items={project.stack}/></div>
          <a className="text-link repository-link" href={project.url || `${github}/${project.repository}`} target="_blank" rel="noreferrer" aria-label={`View ${project.name} on GitHub`}>View source <ArrowUpRight size={16}/></a>
        </article>)}</div>
    </div>
  </>;
}
