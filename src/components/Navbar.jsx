import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Playground', 'AI Focus', 'Contact']
const ids = { 'AI Focus': 'ai-focus' }

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll(); window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a href="#home" className="brand" aria-label="Pravin Mali, home"><span>PM</span><i /></a>
        <div className="nav-links">
          {links.map(link => <a key={link} href={`#${ids[link] || link.toLowerCase()}`}>{link}</a>)}
        </div>
        <a className="nav-cta" href="mailto:malipravin749@gmail.com">Let’s talk <span>↗</span></a>
        <button className="menu-toggle" onClick={() => setOpen(v => !v)} aria-expanded={open} aria-label={open ? 'Close navigation' : 'Open navigation'}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" initial={reduce ? false : { opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
            {links.map((link, i) => <a key={link} href={`#${ids[link] || link.toLowerCase()}`} onClick={() => setOpen(false)}><span>0{i + 1}</span>{link}</a>)}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
