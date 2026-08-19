import { Check } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { experiences } from '../data/experience'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal><SectionHeading eyebrow="03 / Experience" title="Building backend systems, one layer at a time." text="A career focused on Python services, API architecture, data reliability, and intelligent integrations." /></Reveal>
        <div className="timeline">
          {experiences.map((item, i) => <Reveal key={item.company} className="timeline-row">
            <div className="timeline-meta"><span>{item.period}</span><small>{String(experiences.length - i).padStart(2, '0')}</small></div>
            <div className="timeline-axis"><i /></div>
            <article className="experience-card">
              <span className="experience-state">{i === 0 ? 'Current role' : 'Previous role'}</span>
              <h3>{item.role}</h3><h4>{item.company}</h4>
              <ul>{item.responsibilities.map(text => <li key={text}><Check size={15} /> <span>{text}</span></li>)}</ul>
            </article>
          </Reveal>)}
        </div>
      </div>
    </section>
  )
}
