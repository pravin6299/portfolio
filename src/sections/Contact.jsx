import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-grid-bg" aria-hidden="true" />
      <div className="container">
        <Reveal className="contact-inner">
          <span className="eyebrow"><i />07 / Contact</span>
          <span className="contact-kicker">Have a backend or AI problem?</span>
          <h2>Let’s build something <em>reliable.</em></h2>
          <p>Have a project, collaboration, or opportunity in mind? Let’s connect.</p>
          <div className="contact-actions">
            <Button href={`mailto:${profile.email}`} icon={Mail}>Send an Email</Button>
            <Button href={profile.linkedin} variant="secondary" icon={Linkedin} external>LinkedIn</Button>
            <Button href={profile.github} variant="ghost" icon={Github} external>GitHub</Button>
          </div>
          <div className="contact-details">
            <a href={`mailto:${profile.email}`}><Mail size={16} />{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone size={16} />{profile.phone}</a>
            <span><MapPin size={16} />{profile.location}</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
