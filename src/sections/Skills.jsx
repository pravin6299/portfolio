import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { skillGroups, skillRelationships } from '../data/skills'

function SkillCard({ group, index }) {
  const [active, setActive] = useState(null)
  return (
    <Reveal delay={(index % 4) * .05} className={`skill-card ${group.title === 'AI & LLM' || group.title === 'API & Security' ? 'skill-card--large' : ''}`}>
      <div className="skill-title"><group.icon size={20} /><h3>{group.title}</h3><span>0{index + 1}</span></div>
      <div className="skill-tags">
        {group.skills.map(skill => <button type="button" key={skill} onMouseEnter={() => setActive(skill)} onMouseLeave={() => setActive(null)} onFocus={() => setActive(skill)} onBlur={() => setActive(null)} className={active === skill ? 'is-active' : ''}>{skill}</button>)}
      </div>
      <div className={`skill-relationship ${active ? 'is-visible' : ''}`} aria-live="polite">
        <ArrowUpRight size={13} />
        {active ? <span>{skillRelationships[active] ? <>Used in <strong>→ {skillRelationships[active]}</strong></> : <>Part of the <strong>engineering toolkit</strong></>}</span> : <span>Focus or hover to see context</span>}
      </div>
    </Reveal>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <Reveal><SectionHeading eyebrow="02 / Capabilities" title="A focused toolkit for robust products." text="Backend foundations, API security, and practical AI integration—organized around the systems I build." /></Reveal>
        <div className="skills-grid">
          {skillGroups.map((group, i) => <SkillCard key={group.title} group={group} index={i} />)}
        </div>
      </div>
    </section>
  )
}
