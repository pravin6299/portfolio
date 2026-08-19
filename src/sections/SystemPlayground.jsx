import { useEffect, useState } from 'react'
import { CheckCircle2, Play, RotateCcw, TerminalSquare } from 'lucide-react'
import { useReducedMotion } from 'framer-motion'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const demos = {
  '/api/auth': { method: 'POST', steps: ['Request received', 'Credentials parsed', 'User validated', 'JWT generated', 'Access rules applied'] },
  '/api/voice': { method: 'POST', steps: ['Request received', 'JWT validated', 'Audio processing', 'Whisper transcription', 'LLM generation', 'TTS response'] },
  '/api/llm': { method: 'POST', steps: ['Request received', 'JWT validated', 'Prompt prepared', 'Groq LLM processing', 'Response formatted'] },
  '/api/health': { method: 'GET', steps: ['Health request received', 'Service status checked', 'Database connection checked', 'Health response prepared'] },
}

export default function SystemPlayground() {
  const [endpoint, setEndpoint] = useState('/api/voice')
  const [visible, setVisible] = useState(0)
  const [runId, setRunId] = useState(0)
  const reduce = useReducedMotion()
  const demo = demos[endpoint]

  useEffect(() => {
    setVisible(reduce ? demo.steps.length : 0)
    if (reduce) return
    const timers = demo.steps.map((_, i) => setTimeout(() => setVisible(i + 1), 250 + i * 360))
    return () => timers.forEach(clearTimeout)
  }, [endpoint, demo.steps, reduce, runId])

  const replay = () => {
    setRunId(value => value + 1)
  }

  return (
    <section id="playground" className="section playground section--tinted">
      <div className="container">
        <Reveal><SectionHeading eyebrow="05 / Interactive Demo" title="System Playground" text="Interact with a simplified representation of the systems I build." /></Reveal>
        <Reveal className="terminal-window">
          <div className="terminal-titlebar"><span><i /><i /><i /></span><div><TerminalSquare size={13} /> architecture-demo.sh</div><small>UI SIMULATION · NO LIVE API</small></div>
          <div className="terminal-layout">
            <aside className="command-list" aria-label="Demo endpoints">
              <span>SELECT ENDPOINT</span>
              {Object.entries(demos).map(([path, value]) => <button type="button" key={path} className={endpoint === path ? 'is-selected' : ''} onClick={() => setEndpoint(path)}><i>{value.method}</i>{path}<Play size={11} /></button>)}
            </aside>
            <div className="terminal-output" aria-live="polite">
              <div className="terminal-command"><span>pravin@systems:~$</span> {demo.method} {endpoint}</div>
              <div className="terminal-log">
                {demo.steps.map((step, i) => <div key={step} className={i < visible ? 'is-visible' : ''}><span>[{String(i + 1).padStart(2, '0')}]</span><p>{step}</p>{i < visible && <CheckCircle2 size={13} />}</div>)}
              </div>
              <div className={`terminal-response ${visible === demo.steps.length ? 'is-visible' : ''}`}><span>&lt;</span> 200 OK <small>SIMULATED RESPONSE</small></div>
              <button className="replay-button" type="button" onClick={replay}><RotateCcw size={13} /> Replay trace</button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
