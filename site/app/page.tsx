import { GitHubIcon, LinkedInIcon } from './social-icons';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { SiteHeader } from './site-header';
import { skillDomains } from './skills';
const github = 'https://github.com/isMarouaneBen';
const linkedin = 'https://www.linkedin.com/in/marouane-ben-haddou-431615254/';
const email = 'mailto:marouanebenhaddou9@gmail.com';
const experience = [
  {company:'Goji',role:'Software Engineering',location:'Paris, France · Remote',date:'JUL — SEP 2026',description:[
    'Contributed to the architecture and development of two AI agents: a sales agent for personalized product exploration and a hospitality concierge agent.',
    'Built the Goji Hospitality inbox service to enable communication between hotel guests and staff.',
    'Developed concierge features to interpret guest requests, retrieve hotel and reservation context, and execute predefined workflows through connected systems.',
    'Built a CI/CD pipeline and implemented evaluations for the AI sales agent.',
    'Collaborated with the engineering team on the hospitality platform using Python, FastAPI, PostgreSQL, pgvector, ChromaDB, the Anthropic SDK, and the WhatsApp API.',
  ],tags:['Python','FastAPI','PostgreSQL','Anthropic SDK']},
  {company:'Smart Automation Technologies',role:'AI Engineering',location:'Tangier, Morocco · Remote',date:'JUL — SEP 2026',description:[
    'Built an AI platform coordinating specialized agents for inventory, equipment, operations, and demand forecasting using Python and LangGraph.',
    'Implemented parallel agent execution, conflict detection, and constraint validation to support traceable warehouse decisions.',
    'Combined SQL, vector search, and BM25 retrieval to ground recommendations in warehouse data and operating procedures.',
    'Developed a React/TypeScript interface and JWT-secured FastAPI backend for conversational queries and knowledge-base management.',
    'Designed modular warehouse adapters with configurable policies and local LLM inference, using Ollama, PostgreSQL, Qdrant, Redis, and Docker.',
  ],tags:['LangGraph','React','Qdrant','Docker']},
  {company:'Provincial Department of Agriculture',role:'Data Analysis',location:'Al Hoceima, Morocco · On-site',date:'JUL — AUG 2025',description:['Collected and processed climate and agricultural data.','Performed exploratory data analysis.','Delivered a Snowflake-backed Power BI dashboard for business stakeholders.'],tags:['Python','SQL','Snowflake','Power BI']},
];
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <SiteHeader />
    <main id="main">
      <section className="hero wrap">
        <div>
          <p className="availability">Open to opportunities & internships</p>
          <h1>Marouane<br/>Ben Haddou<span>.</span></h1>
          <p className="role">Data &amp; AI Engineer</p>
          <p className="hero-description">AI &amp; Data Engineer passionate about building intelligent systems that drive real-world impact. My expertise spans machine learning, NLP, big data, and full-stack development, where I develop AI-driven solutions for scalable insight collection, automation, and decision-making.</p>
          <div className="actions"><a className="button primary" href="/projects">View projects <ArrowUpRight size={18}/></a><a className="button secondary" href="/Marouane-Ben-Haddou-CV.pdf" download>Download CV <Download size={17}/></a></div>
          <div className="hero-links"><span><MapPin size={15}/> Morocco · Open to remote</span><a href={github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub <ArrowUpRight size={14}/></a><a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn <ArrowUpRight size={14}/></a></div>
        </div>
        <img className="portrait" src="/portrait.jpeg" alt="Marouane Ben Haddou" width="928" height="950"/>
      </section>
      <section className="experience-section" id="experience"><div className="wrap experience-layout">
        <div><h2>Professional experience</h2><a className="text-link resume-link" href="/Marouane-Ben-Haddou-CV.pdf" download>Full résumé <Download size={16}/></a></div>
        <div>{experience.map(item => <article className="experience-item" key={item.company}>
          <div className="experience-meta"><span>{item.date}</span><span>{item.location}</span></div><h3>{item.role} · Internship</h3><p className="company">{item.company}</p><ul className="description-list">{item.description.map(detail => <li key={detail}>{detail}</li>)}</ul>
        </article>)}</div>
      </div></section>
      <section className="section wrap experience-layout education-section" id="education" aria-labelledby="education-title">
        <div><h2 id="education-title">Education</h2></div>
        <div>
          <h3>ENSAH — Abdelmalek Essaadi University</h3>
          <p className="institution-location">National School of Applied Sciences, Al Hoceima, Morocco</p>
          <article className="education-entry">
            <p className="education-date">2024 — Present</p>
            <h4>Engineering Degree in Data Engineering</h4>
          </article>
          <article className="education-entry">
            <p className="education-date">2022 — 2024</p>
            <h4>Integrated Preparatory Cycle</h4>
          </article>
        </div>
      </section>
      <section className="section wrap" id="skills" aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <div className="skills-grid">{skillDomains.map(domain => <article className="skill-domain" key={domain.title}>
          <h3>{domain.title}</h3>
          <dl>{domain.entries.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>
        </article>)}</div>
      </section>
      <section className="section wrap experience-layout" id="extracurricular" aria-labelledby="extracurricular-title">
        <div><h2 id="extracurricular-title">Extracurricular experience</h2></div>
        <article className="experience-item">
          <div className="experience-meta"><span>SEP — JUN 2025</span></div>
          <h3>Training Lead</h3>
          <p className="company">DataI Club, ENSAH — Abdelmalek Essaadi University</p>
          <ul className="description-list">
            <li>Designed and delivered a structured data analytics training program, including Python and Power BI sessions.</li>
            <li>Organized and coordinated Data Science webinars with industry and academic speakers.</li>
            <li>Supported members in developing practical data and analytics skills through hands-on workshops.</li>
          </ul>
        </article>
      </section>
      <section className="contact-section" id="contact"><div className="wrap"><div className="contact-content"><div><h2>Let’s work together.</h2><p>For opportunities, internships, or project discussions.</p></div><a className="button contact-button" href={email}>Get in touch <ArrowUpRight size={18}/></a></div><div className="contact-bottom"><a href={email}>marouanebenhaddou9@gmail.com</a><div><a href={linkedin} target="_blank" rel="noreferrer"><LinkedInIcon /> LinkedIn</a><a href={github} target="_blank" rel="noreferrer"><GitHubIcon /> GitHub</a></div></div></div></section>
    </main>
    <footer className="wrap footer"><p>© {new Date().getFullYear()} Marouane Ben Haddou</p><a href="#">Back to top ↑</a></footer>
  </>;
}
