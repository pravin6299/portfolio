import { ArrowDown, Bot, Boxes, BrainCircuit, Braces, Mic2, Network, Sparkles } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const progression = [
  { name: 'Backend Engineering', note: 'Professional foundation', icon: Braces, level: 'foundation' },
  { name: 'LLM Integration', note: 'Hands-on', icon: Bot, level: 'hands-on' },
  { name: 'Prompt Engineering', note: 'Hands-on', icon: Sparkles, level: 'hands-on' },
  { name: 'RAG', note: 'Active focus', icon: Network, level: 'focus' },
  { name: 'AI Agents', note: 'Active focus', icon: BrainCircuit, level: 'focus' },
  { name: 'Production AI Systems', note: 'Growth direction', icon: Boxes, level: 'growth' },
]

const exploring = ['RAG', 'AI Agents', 'Production LLM Systems', 'Generative AI Engineering']

export default function AIFocus() {
  return (
    <section id="ai-focus" className="section ai-focus section--tinted">
      <div className="container">
        <Reveal><SectionHeading eyebrow="06 / AI Focus" title="Growing from integration to intelligent systems." text="Practical experience today, with a clear direction toward deeper Generative AI engineering." /></Reveal>
        <div className="ai-layout">
          <Reveal className="ai-statement"><span>Engineering direction</span><p>Building on production backend experience to create AI features that are <strong>useful, reliable, and ready for real applications.</strong></p><div className="level-legend"><span><i className="level-hands-on" />Hands-on</span><span><i className="level-focus" />Active focus</span><span><i className="level-growth" />Growth direction</span></div></Reveal>
          <div className="ai-path ai-path--progression">
            {progression.map((area, i) => <Reveal key={area.name} delay={i * .04} className={`ai-path-item ai-level--${area.level}`}>
              <span className="ai-step-number">{String(i + 1).padStart(2, '0')}</span><span className="ai-icon"><area.icon size={19} /></span><div><strong>{area.name}</strong><small>{area.note}</small></div>{i < progression.length - 1 && <ArrowDown className="ai-arrow" size={14} />}
            </Reveal>)}
          </div>
        </div>
        <Reveal className="exploring-strip">
          <div><span className="exploring-pulse" /><strong>CURRENTLY EXPLORING</strong><small>Learning & focus areas</small></div>
          <ul>{exploring.map(item => <li key={item}>{item}</li>)}</ul>
        </Reveal>
      </div>
    </section>
  )
}
