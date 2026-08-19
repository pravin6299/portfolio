import { AudioLines, Bot, KeyRound, Mic, Radio, Server } from 'lucide-react'

const nodes = [
  { label: 'Client', sub: 'Voice input', icon: Mic },
  { label: 'FastAPI', sub: 'API service', icon: Server },
  { label: 'JWT / RBAC', sub: 'Access layer', icon: KeyRound },
  { label: 'Whisper', sub: 'Speech to text', icon: AudioLines },
  { label: 'Groq LLM', sub: 'Generation', icon: Bot },
  { label: 'TTS', sub: 'Text to speech', icon: Radio },
]

export default function ArchitectureFlow({ compact = false }) {
  return (
    <div className={`architecture ${compact ? 'architecture--compact' : ''}`} aria-label="Client request flows through FastAPI, security, Whisper, Groq LLM, and text-to-speech">
      <div className="architecture-head"><span>VOICE PIPELINE</span><code>6 connected services</code></div>
      <div className="architecture-flow">
        {nodes.map((node, i) => <div className="architecture-step" key={node.label}>
          <div className="architecture-node"><node.icon size={18} /><span><strong>{node.label}</strong><small>{node.sub}</small></span></div>
          {i < nodes.length - 1 && <div className="connector"><i /></div>}
        </div>)}
      </div>
      <div className="architecture-response"><span>↳</span><strong>Voice response</strong><i>200 OK</i></div>
    </div>
  )
}
