import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import SystemPlayground from './sections/SystemPlayground'
import AIFocus from './sections/AIFocus'
import ProfileDetails from './sections/ProfileDetails'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main" className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SystemPlayground />
        <AIFocus />
        <ProfileDetails />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
