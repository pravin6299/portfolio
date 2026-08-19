import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, CheckCircle2, ChevronDown, Layers3 } from 'lucide-react'
import ArchitectureFlow from '../components/ArchitectureFlow'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { projects } from '../data/projects'

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false)
  const reduce = useReducedMotion()
  const forexFlow = ['Client', 'Django API', 'Data models', 'Forex API', 'Response']

  return <Reveal className={`project-card ${project.featured ? 'project-card--featured' : ''}`}>
    <div className="project-top"><span>{project.number}</span><div><small>{project.label}</small><h3>{project.title}</h3></div><Layers3 aria-hidden="true" /></div>
    <div className="project-body">
      <div className="project-info"><p className="project-objective">{project.objective}</p><div className="tech-row">{project.tech.map(t => <span key={t}>{t}</span>)}</div></div>
      <div className="feature-list"><h4>Key capabilities</h4><ul>{project.features.slice(0, 6).map(f => <li key={f}><CheckCircle2 size={15} />{f}</li>)}</ul></div>
    </div>
    <div className="architecture-preview" aria-hidden="true">
      {(index === 0 ? ['Client', 'FastAPI', 'Auth', 'LLM', 'Voice'] : forexFlow).map((node, i, list) => <span key={node}>{node}{i < list.length - 1 && <ArrowRight size={12} />}</span>)}
    </div>
    <button className="architecture-toggle" type="button" onClick={() => setExpanded(v => !v)} aria-expanded={expanded}>
      <span>{expanded ? 'Close Architecture' : 'View Architecture'} <b>→</b></span><ChevronDown className={expanded ? 'is-rotated' : ''} size={17} />
    </button>
    <AnimatePresence initial={false}>
      {expanded && <motion.div className="case-study" initial={reduce ? false : { height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={reduce ? {} : { height: 0, opacity: 0 }} transition={{ duration: .38, ease: [0.22, 1, 0.36, 1] }}>
        <div className="case-study-inner">
          <div className="case-study-labels"><span>SYSTEM OVERVIEW</span><span>REQUEST FLOW</span><span>TECHNOLOGY STACK</span><span>KEY CAPABILITIES</span></div>
          {index === 0 ? <ArchitectureFlow /> : <div className="forex-architecture">{forexFlow.map((node, i) => <div key={node}><span>{String(i + 1).padStart(2, '0')}</span><strong>{node}</strong>{i < forexFlow.length - 1 && <i />}</div>)}</div>}
        </div>
      </motion.div>}
    </AnimatePresence>
  </Reveal>
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal><SectionHeading eyebrow="04 / Selected Work" title="Featured Projects" text="Backend systems and AI-powered applications I’ve worked on." /></Reveal>
        <div className="projects-list">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </div>
    </section>
  )
}
