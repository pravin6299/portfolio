import { ArrowUpRight, Github, GraduationCap, Languages } from 'lucide-react'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { profile } from '../data/profile'

export default function ProfileDetails() {
  return (
    <section className="section profile-details" aria-label="Education, languages, and GitHub">
      <div className="container profile-grid">
        <Reveal className="detail-card"><div className="detail-icon"><GraduationCap /></div><span>Education</span><h3>{profile.education.degree}</h3><p>{profile.education.institution}</p><div className="detail-meta"><strong>{profile.education.year}</strong><strong>{profile.education.score}</strong></div></Reveal>
        <Reveal className="detail-card"><div className="detail-icon"><Languages /></div><span>Languages</span><h3>Four languages</h3><div className="language-list">{profile.languages.map(l => <span key={l}>{l}</span>)}</div></Reveal>
        <Reveal className="github-card"><Github size={31} /><div><span>Open source profile</span><h3>Explore my code and projects on GitHub.</h3><p>@pravin6299</p></div><Button href={profile.github} variant="light" icon={ArrowUpRight} external>View GitHub</Button></Reveal>
      </div>
    </section>
  )
}
