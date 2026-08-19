import { Bot, Braces, MapPin, Network } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const highlights = [
  { value: '4+', label: 'Years', detail: 'Backend engineering', icon: Braces },
  { value: 'API', label: 'Systems', detail: 'REST architecture', icon: Network },
  { value: 'AI', label: 'Integration', detail: 'LLM & voice features', icon: Bot },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal><SectionHeading eyebrow="01 / About" title="Engineering reliable systems at the intersection of backend and AI." /></Reveal>
        <div className="about-grid">
          <Reveal className="about-copy">
            <p className="lead-paragraph">I’m a backend developer with <strong>4+ years of experience</strong> building and scaling REST APIs with Python, Django, and FastAPI.</p>
            <p>My work centers on secure, well-documented services using <span>JWT authentication</span>, <span>RBAC</span>, <span>OpenAPI/Swagger</span>, and <span>PostgreSQL</span>—with hands-on experience integrating LLM-powered and voice-enabled features into production backend systems.</p>
            <p>I’m growing deeper into Generative AI Engineering through practical LLM integration and prompt engineering, with an active interest in AI agents, RAG, and production-grade AI systems.</p>
            <div className="location"><MapPin size={17} /> Gujarat, India</div>
          </Reveal>
          <div className="highlight-grid">
            {highlights.map((item, i) => <Reveal key={item.value} delay={i * .08} className={`highlight-card ${i === 0 ? 'highlight-card--wide' : ''}`}>
              <item.icon size={21} /><strong>{item.value}</strong><span>{item.label}</span><small>{item.detail}</small>
            </Reveal>)}
          </div>
        </div>
      </div>
    </section>
  )
}
