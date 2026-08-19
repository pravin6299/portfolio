import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <div><strong>Pravin Mali</strong><span>Backend Developer & AI/LLM Engineer</span></div>
        <p>© {new Date().getFullYear()} Pravin Mali</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
        </div>
      </div>
    </footer>
  )
}
