import { Check, CircleDot, KeyRound, Server, Sparkles, TerminalSquare } from 'lucide-react'

const nodes = [
  { label: 'CLIENT', detail: 'POST /api/process', icon: TerminalSquare },
  { label: 'FASTAPI', detail: 'Request received', icon: Server },
  { label: 'AUTH', detail: 'JWT validated', icon: KeyRound },
  { label: 'LLM', detail: 'Processing', icon: Sparkles },
  { label: 'RESPONSE', detail: '200 OK', icon: Check },
]

export default function HeroPipeline() {
  return (
    <div className="hero-pipeline" aria-label="Animated backend request pipeline from client to FastAPI, authentication, LLM, and response">
      <div className="panel-bar">
        <span><i /><i /><i /></span>
        <code>request.trace</code>
        <b><CircleDot size={8} /> API.READY</b>
      </div>
      <div className="request-meta">
        <span><i>METHOD</i><strong>POST</strong></span>
        <code>/api/process</code>
        <small>Interactive system trace</small>
      </div>
      <div className="hero-pipeline-flow">
        <i className="request-particle" aria-hidden="true" />
        {nodes.map((node, i) => (
          <div className="hero-pipeline-step" key={node.label} style={{ '--step': i }}>
            <div className="pipeline-node-icon"><node.icon size={15} /></div>
            <div><strong>{node.label}</strong><small>{node.detail}</small></div>
            <span>{String(i + 1).padStart(2, '0')}</span>
          </div>
        ))}
      </div>
      <div className="pipeline-footer">
        <code><span>AUTH ✓</span> · LLM PROCESSING · <b>200 OK</b></code>
        <small>LOOP / 4.8s</small>
      </div>
    </div>
  )
}
