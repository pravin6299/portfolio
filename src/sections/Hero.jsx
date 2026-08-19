import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Button from '../components/Button'
import HeroPipeline from '../components/HeroPipeline'
import { profile } from '../data/profile'

export default function Hero() {
  const reduce = useReducedMotion()
  const enter = reduce ? {} : { opacity: [0, 1], y: [20, 0] }
  return (
    <section id="home" className="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="orb orb--one" aria-hidden="true" />
      <div className="container hero-layout">
        <motion.div className="hero-copy" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }}>
          <motion.div className="status" animate={enter} transition={{ duration: .55 }}><span /> Building Backend + AI Systems</motion.div>
          <motion.p className="hero-intro" animate={enter} transition={{ duration: .55, delay: .08 }}>Hi, I’m Pravin Mali.</motion.p>
          <motion.h1 animate={enter} transition={{ duration: .65, delay: .14 }}>Backend Developer<br />& <em>AI/LLM Engineer</em></motion.h1>
          <motion.p className="hero-lead" animate={enter} transition={{ duration: .65, delay: .22 }}>I build scalable backend systems and AI-powered applications using <strong>Python</strong>, <strong>FastAPI</strong>, <strong>Django</strong>, and modern LLM technologies.</motion.p>
          <motion.div className="hero-actions" animate={enter} transition={{ duration: .65, delay: .3 }}>
            <Button href="#projects" icon={ArrowDown}>View My Work</Button>
            <Button href={profile.github} variant="secondary" icon={Github} external>GitHub</Button>
            <Button href={profile.linkedin} variant="ghost" icon={Linkedin} external>LinkedIn</Button>
            <Button href={`mailto:${profile.email}`} variant="ghost" icon={Mail}>Contact Me</Button>
          </motion.div>
        </motion.div>
        <motion.div className="system-panel" initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .25 }}>
          <HeroPipeline />
        </motion.div>
      </div>
      <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={16} /></a>
    </section>
  )
}
