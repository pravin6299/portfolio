import { useEffect, useMemo, useRef, useState } from 'react'
import * as THREE from 'three'
import confetti from 'canvas-confetti'
import {
  Bot, BrainCircuit, BriefcaseBusiness, Check, ChevronRight, Code2, Copy, Database,
  Download, ExternalLink, FileText, Github, Linkedin, Mail, Menu, Mic, Network,
  Phone, Play, Printer, Search, Send, Server, ShieldCheck, Sparkles, Volume2,
  VolumeX, X, Zap
} from 'lucide-react'

const profile = {
  name: 'PRAVIN MALI',
  role: 'Backend Developer | AI & LLM Engineer',
  email: 'malipravin749@gmail.com',
  phone: '+91 6353438333',
  location: 'Gujarat, India',
  linkedin: 'https://linkedin.com/in/pravin-mali-34828a200',
  github: 'https://github.com/pravin6299',
}

const summary = 'Backend Developer with 4+ years of experience building and scaling REST APIs using Python, Django, and FastAPI, with hands-on experience integrating LLM-powered and voice-enabled AI features into production backend systems. Skilled in designing secure, well-documented APIs backed by PostgreSQL, JWT authentication, RBAC, OpenAPI/Swagger, Groq, Whisper STT, and TTS. Growing into Generative AI Engineering with practical exposure to LLM integration, prompt engineering, AI agents, RAG, and production-grade AI systems.'

const techBadges = ['FastAPI', 'Django', 'Python', 'Groq LLM', 'Whisper STT', 'Voice AI', 'PostgreSQL', 'Docker', 'JWT & RBAC', 'OpenAPI/Swagger']

const experiences = [
  {
    role: 'Python Backend Developer', company: 'Titodi Infotech Pvt. Ltd.', dates: 'Feb 2025 - Present', location: 'Gujarat, India',
    summary: 'Building secure FastAPI services and production AI voice features.',
    bullets: ['Developed secure, scalable backend APIs using FastAPI, JWT authentication, and RBAC.', 'Designed and documented RESTful APIs using OpenAPI/Swagger.', 'Managed PostgreSQL storage and retrieval workflows.', 'Integrated Groq LLM APIs with Whisper STT and TTS for voice-enabled AI features.', 'Applied prompt engineering to improve production LLM reliability.'],
    tech: ['FastAPI', 'Groq LLM', 'Whisper STT', 'TTS', 'PostgreSQL', 'JWT', 'RBAC', 'OpenAPI/Swagger', 'Prompt Engineering'],
    code: `@router.websocket("/voice/stream")\nasync def voice_stream(ws: WebSocket, user=Depends(jwt_user)):\n    transcript = await whisper.transcribe(await ws.receive_bytes())\n    reply = await groq.chat(prompt_guard(transcript, user.role))\n    await ws.send_json({"status": 200, "reply": reply})`,
  },
  {
    role: 'Python Backend Developer', company: 'Terreza Solutions', dates: 'Oct 2023 - Jan 2025', location: 'India',
    summary: 'Delivered high-performance Django forex applications with real-time data accuracy.',
    bullets: ['Built Django-based forex application modules.', 'Integrated forex-specific APIs.', 'Optimized system load handling for real-time market workflows.'],
    tech: ['Django', 'Django REST Framework', 'PostgreSQL', 'REST APIs', 'Forex APIs'],
    code: `class LiveRateViewSet(ModelViewSet):\n    serializer_class = RateSerializer\n    def get_queryset(self):\n        return Rate.objects.select_related("pair").order_by("-tick_at")[:100]`,
  },
  {
    role: 'Python Backend Developer', company: 'Inventam Tech Solutions Pvt. Ltd.', dates: 'Apr 2023 - Sept 2023', location: 'India',
    summary: 'Implemented Django features, reviewed code, and improved ORM performance.',
    bullets: ['Designed and implemented features for Django projects.', 'Performed code reviews.', 'Improved Django ORM query performance.'],
    tech: ['Django', 'Django ORM', 'Python', 'SQL', 'Git', 'Postman'],
    code: `orders = (Order.objects\n    .select_related("customer")\n    .prefetch_related("items__product")\n    .filter(status="active"))`,
  },
  {
    role: 'Python Backend Developer', company: 'Globalias Soft LLP', dates: 'May 2022 - Mar 2023', location: 'India',
    summary: 'Developed REST APIs, database models, Django views, and backend optimizations.',
    bullets: ['Developed and maintained RESTful APIs.', 'Designed database models and Django views.', 'Optimized APIs and backend architecture.'],
    tech: ['Python', 'Django', 'SQLite', 'PostgreSQL', 'REST APIs'],
    code: `class CustomerView(APIView):\n    def get(self, request):\n        data = Customer.objects.only("id", "name", "email")\n        return Response(CustomerSerializer(data, many=True).data)`,
  },
]

const skills = [
  ['FastAPI', 'Backend', 'Production async APIs with OpenAPI contracts.', 'AI Voice Assistant Pipeline'],
  ['Django', 'Backend', 'Reliable business applications and REST APIs.', 'Forex Real-time Data Platform'],
  ['PostgreSQL', 'Databases', 'Relational schema design and query workflows.', 'Every production backend'],
  ['Redis', 'Databases', 'Caching, rate limits, queues, and fast tokens.', 'API Gateway'],
  ['Docker', 'Backend', 'Portable deployments and service packaging.', 'Deployment workflows'],
  ['Groq LLM', 'AI/ML', 'Low-latency LLM integration.', 'Voice AI'],
  ['Whisper', 'AI/ML', 'Speech-to-text for conversational systems.', 'Voice AI'],
  ['Python', 'Backend', 'Core backend and automation language.', 'All projects'],
  ['JWT', 'Protocols', 'Auth verification and claim-based access.', 'Auth Gateway'],
  ['WebSockets', 'Protocols', 'Streaming request/response channels.', 'Voice stream endpoint'],
  ['Celery', 'Backend', 'Background processing for heavy workloads.', 'Forex worker'],
  ['Pinecone', 'AI/ML', 'Vector search for RAG systems.', 'RAG Knowledge Search Agent'],
  ['LangChain', 'AI/ML', 'RAG orchestration and prompt pipelines.', 'RAG Knowledge Search Agent'],
  ['OpenAI API', 'AI/ML', 'Embeddings and LLM workflows.', 'RAG Knowledge Search Agent'],
  ['vLLM/Ollama', 'AI/ML', 'Exploring self-hosted model serving.', 'Currently exploring'],
]

const projects = [
  { icon: '🎙️', category: 'Voice AI', title: 'AI Voice Assistant Pipeline', desc: 'A secure voice-to-voice backend pipeline that accepts streamed audio, transcribes speech, calls Groq, and returns TTS output.', tech: ['FastAPI', 'Groq LLM', 'Whisper', 'TTS', 'JWT', 'PostgreSQL', 'OpenAPI'], nodes: ['CLIENT', 'FASTAPI', 'WHISPER STT', 'GROQ LLM', 'TTS ENGINE', 'RESPONSE'], code: `const ws = new WebSocket("wss://api.pravin.dev/api/v1/voice/stream")\nws.send(audioChunk)\nws.onmessage = ({ data }) => renderAssistantVoice(JSON.parse(data))` },
  { icon: '📊', category: 'Fintech Backend', title: 'Forex Real-time Data Platform', desc: 'Django REST services for live forex data, cached reads, worker processing, and PostgreSQL persistence.', tech: ['Django', 'PostgreSQL', 'REST API', 'Forex APIs', 'Redis', 'Celery'], nodes: ['MARKET FEEDS', 'DJANGO API', 'REDIS CACHE', 'CELERY WORKER', 'POSTGRES DB', 'CLIENT'], code: `class RateViewSet(ReadOnlyModelViewSet):\n    serializer_class = RateSerializer\n    queryset = Rate.objects.select_related("pair").order_by("-created_at")` },
  { icon: '🧠', category: 'Generative AI', title: 'RAG Knowledge Search Agent', desc: 'Search agent architecture for chunked documents, embeddings, Pinecone retrieval, prompt assembly, and streamed LLM answers.', tech: ['FastAPI', 'OpenAI Embeddings', 'Pinecone', 'LangChain'], nodes: ['USER QUERY', 'FASTAPI', 'PINECONE VEC DB', 'PROMPT ENGINE', 'LLM STREAM'], code: `docs = retriever.similarity_search(query, k=5)\nanswer = chain.stream({"context": docs, "question": query})` },
  { icon: '⚡', category: 'API Security', title: 'High-Throughput Auth & API Gateway', desc: 'FastAPI gateway concept with token bucket protection, JWT verification, RBAC checks, and service proxying.', tech: ['FastAPI', 'Redis Token Bucket', 'JWT', 'RBAC'], nodes: ['INCOMING REQ', 'SLIDING LIMITER', 'JWT VERIFIER', 'RBAC POLICY', 'PROXIED SERVICE'], code: `if not limiter.allow(user.id):\n    raise HTTPException(429, "rate limit")\nclaims = jwt.verify(token)\nassert_policy(claims.role, route.scope)` },
]

const endpoints = [
  ['POST', '/api/v1/voice/stream', '{\n  "audio": "<binary>",\n  "mode": "voice_ai"\n}'],
  ['POST', '/api/v1/auth/verify', '{\n  "token": "eyJhbGciOiJIUzI1NiIs..."\n}'],
  ['POST', '/api/v1/llm/completion', '{\n  "prompt": "Summarize account activity",\n  "model": "groq-llama"\n}'],
  ['GET', '/api/v1/forex/rates/live', '{\n  "pair": "USD/INR"\n}'],
  ['GET', '/api/v1/health', '{}'],
]

function useSynth(enabled) {
  return (type = 'click') => {
    if (!enabled) return
    const ctx = new AudioContext()
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.frequency.value = type === 'success' ? 720 : type === 'pulse' ? 420 : 260
    gain.gain.setValueAtTime(0.035, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12)
    osc.connect(gain).connect(ctx.destination)
    osc.start()
    osc.stop(ctx.currentTime + 0.13)
  }
}

function ThreeField({ variant = 'hero' }) {
  const mount = useRef(null)
  useEffect(() => {
    const el = mount.current
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(65, el.clientWidth / el.clientHeight, 0.1, 100)
    camera.position.z = 8
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(el.clientWidth, el.clientHeight)
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    el.appendChild(renderer.domElement)
    const group = new THREE.Group()
    scene.add(group)
    const cyan = new THREE.Color('#06b6d4')
    const blue = new THREE.Color('#3b82f6')
    if (variant === 'globe') {
      skills.forEach(([name, cat], i) => {
        const phi = Math.acos(-1 + (2 * i) / skills.length)
        const theta = Math.sqrt(skills.length * Math.PI) * phi
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.08), new THREE.MeshBasicMaterial({ color: cat === 'AI/ML' ? blue : cyan }))
        mesh.position.set(2.4 * Math.cos(theta) * Math.sin(phi), 2.4 * Math.sin(theta) * Math.sin(phi), 2.4 * Math.cos(phi))
        group.add(mesh)
      })
      group.add(new THREE.Mesh(new THREE.SphereGeometry(2.5, 24, 16), new THREE.MeshBasicMaterial({ color: '#06b6d4', wireframe: true, transparent: true, opacity: 0.12 })))
    } else if (variant === 'neural') {
      camera.position.z = 6
      const nodePositions = [
        new THREE.Vector3(-1.6, 1.25, 0),
        new THREE.Vector3(0, 1.35, .18),
        new THREE.Vector3(1.55, 1.12, 0),
        new THREE.Vector3(-1.25, -.05, .15),
        new THREE.Vector3(1.05, -.02, .15),
        new THREE.Vector3(0, -1.45, 0),
      ]
      const links = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5], [0, 4], [2, 3]]
      links.forEach(([a, b]) => {
        const line = new THREE.Line(
          new THREE.BufferGeometry().setFromPoints([nodePositions[a], nodePositions[b]]),
          new THREE.LineBasicMaterial({ color: '#06b6d4', transparent: true, opacity: .44 })
        )
        group.add(line)
      })
      nodePositions.forEach((position, i) => {
        const node = new THREE.Mesh(
          new THREE.SphereGeometry(i === 5 ? .19 : .17, 32, 18),
          new THREE.MeshBasicMaterial({ color: i === 5 ? '#8b5cf6' : i % 2 ? blue : cyan })
        )
        node.position.copy(position)
        group.add(node)
        const glow = new THREE.Mesh(
          new THREE.SphereGeometry(i === 5 ? .32 : .28, 32, 18),
          new THREE.MeshBasicMaterial({ color: i === 5 ? '#8b5cf6' : cyan, transparent: true, opacity: .12 })
        )
        glow.position.copy(position)
        group.add(glow)
      })
    } else {
      for (let i = 0; i < 9; i++) {
        const cube = new THREE.Mesh(new THREE.BoxGeometry(.8, .8, .8), new THREE.MeshBasicMaterial({ color: i % 2 ? cyan : blue, wireframe: true, transparent: true, opacity: .45 }))
        cube.position.set((Math.random() - .5) * 8, (Math.random() - .5) * 5, (Math.random() - .5) * 5)
        group.add(cube)
      }
      const stars = new THREE.Points(new THREE.BufferGeometry().setFromPoints(Array.from({ length: 180 }, () => new THREE.Vector3((Math.random() - .5) * 12, (Math.random() - .5) * 8, (Math.random() - .5) * 9))), new THREE.PointsMaterial({ color: cyan, size: .025, transparent: true, opacity: .65 }))
      scene.add(stars)
    }
    let frame
    let tick = 0
    const animate = () => {
      tick += .025
      group.rotation.y += variant === 'globe' ? 0.004 : variant === 'neural' ? 0.0018 : 0.0025
      group.rotation.x += variant === 'hero' ? 0.0015 : variant === 'neural' ? 0.0004 : 0.0008
      group.children.forEach((m, i) => {
        m.rotation && (m.rotation.x += .006 + i * .0003)
        if (variant === 'neural' && m.type === 'Mesh') {
          const scale = 1 + Math.sin(tick + i) * .08
          m.scale.setScalar(scale)
        }
      })
      renderer.render(scene, camera)
      frame = requestAnimationFrame(animate)
    }
    animate()
    const resize = () => { camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix(); renderer.setSize(el.clientWidth, el.clientHeight) }
    addEventListener('resize', resize)
    return () => { cancelAnimationFrame(frame); removeEventListener('resize', resize); renderer.dispose(); el.innerHTML = '' }
  }, [variant])
  return <div className={`three-field three-field--${variant}`} ref={mount} aria-hidden="true" />
}

function Nav({ openResume, openPalette, sound, setSound }) {
  const [menu, setMenu] = useState(false)
  const nav = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Playground', 'AI Focus', 'Contact']
  return <header className="nav">
    <a href="#home" className="logo"><span>PRAVIN.SYS</span><i /></a>
    <nav className="navlinks">{nav.map(n => <a key={n} href={`#${n.toLowerCase().replace(' ', '-')}`}>{n}</a>)}</nav>
    <button className="iconbtn" onClick={() => setSound(v => !v)} aria-label="Toggle sound effects">{sound ? <Volume2 /> : <VolumeX />}</button>
    <button className="cmd-btn" onClick={openPalette}><Search size={15} />⌘ K</button>
    <button className="resume-btn" onClick={openResume}><FileText size={16} />Resume</button>
    <button className="hamb" onClick={() => setMenu(v => !v)} aria-label="Open menu"><Menu /></button>
    {menu && <div className="mobile-nav">{nav.map(n => <a onClick={() => setMenu(false)} key={n} href={`#${n.toLowerCase().replace(' ', '-')}`}>{n}</a>)}<button onClick={openResume}>Resume</button></div>}
  </header>
}

function Hero({ openResume, play }) {
  const [step, setStep] = useState(0)
  const [count, setCount] = useState(1042)
  const steps = ['CLIENT', 'FASTAPI GATEWAY', 'AUTH SERVICE', 'LLM/VOICE ENGINE', 'RESPONSE']
  useEffect(() => {
    const id = setInterval(() => setStep(s => (s + 1) % steps.length), 1200)
    return () => clearInterval(id)
  }, [])
  const fire = () => { setStep(0); setCount(c => c + 1); play('pulse') }
  return <section id="home" className="hero2">
    <ThreeField />
    <div className="gridfloor" />
    <div className="hero-copy2">
      <div className="badge"><i />PRAVIN MALI • 4+ YEARS EXP</div>
      <h1>Backend Developer & <span>AI & LLM Systems Engineer</span></h1>
      <p>Pravin Mali is a Gujarat, India based backend developer building Python, Django, FastAPI, Groq, Whisper STT, Voice AI, PostgreSQL, Docker, JWT/RBAC, and OpenAPI systems.</p>
      <div className="chips">{techBadges.map(t => <span key={t}>{t}</span>)}</div>
      <div className="actions"><button onClick={openResume}>View Full Resume</button><a href="#projects">View Projects</a><a href="#playground">Launch Demo</a></div>
      <div className="metrics"><b>Current Role<span>Titodi Infotech</span></b><b>Total Exp<span>4+ Years</span></b><b>Location<span>Gujarat, India</span></b></div>
    </div>
    <div className="pipeline-card">
      <div className="panel-title"><span>LIVE REQUEST PIPELINE</span><code>REQ #{count} • {88 + step * 11}ms</code></div>
      {steps.map((s, i) => <button className={`pipe-step ${i < step ? 'done' : ''} ${i === step ? 'active' : ''}`} onClick={() => setStep(i)} key={s}><Server size={18} /><b>{s}</b><small>{['Browser client payload', 'FastAPI route + OpenAPI', 'JWT/RBAC verification', 'Whisper + Groq + TTS', '200 OK JSON/audio'][i]}</small><em>{i < step ? 'DONE' : i === step ? 'ACTIVE' : 'QUEUE'}</em></button>)}
      <button className="fire" onClick={fire}><Zap size={16} />Fire Request</button>
      <code className="terminal-bar">$ pipeline.status --active="{steps[step]}" --latency="{88 + step * 11}ms"</code>
    </div>
  </section>
}

function Section({ id, eyebrow, title, children }) {
  return <section id={id} className="section2"><div className="section-head"><p>{eyebrow}</p><h2>{title}</h2></div>{children}</section>
}

function About({ openResume }) {
  const pillars = [['Backend Engineering', 'FastAPI, Django REST, PostgreSQL, JWT Auth, OpenAPI, Docker'], ['AI & LLM Integration', 'Groq API, Prompt Engineering, Whisper STT, TTS, Voice AI'], ['Generative AI Growth Focus', 'RAG, AI Agents, Vector DBs, Pandas/NumPy']]
  return <Section id="about" eyebrow="01 / ABOUT PRAVIN MALI" title="Secure APIs, practical AI, production discipline.">
    <div className="about-layout"><div><div className="badge">4+ Years Professional Experience • Gujarat, India</div><p className="bigcopy">{summary}</p><button className="textbtn" onClick={openResume}><FileText />Read Full Resume PDF / Plaintext</button></div><div className="pillars">{pillars.map(p => <article key={p[0]}><h3>{p[0]}</h3><p>{p[1]}</p></article>)}<article><h3>Education</h3><p>BCA 70% | Bhagwan Mahavir College 2022</p></article><article><h3>Languages</h3><p>English • Hindi • Gujarati • Marathi</p></article><article><h3>Stats</h3><p>4+ Years Experience • 4 Companies</p></article></div></div>
  </Section>
}

function Skills() {
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState(skills[0])
  const filtered = filter === 'All' ? skills : skills.filter(s => s[1] === filter)
  return <Section id="skills" eyebrow="02 / SKILLS GLOBE" title="Interactive technology map.">
    <div className="skills-layout"><div className="globe-panel"><ThreeField variant="globe" /><div className="ticker">Currently Exploring: RAG • AI Agents • Vector DBs • vLLM/Ollama • Production AI</div></div><div><div className="filters">{['All', 'Backend', 'AI/ML', 'Databases', 'Protocols'].map(f => <button className={filter === f ? 'active' : ''} onClick={() => setFilter(f)} key={f}>{f}</button>)}</div><div className="tagcloud">{filtered.map(s => <button onClick={() => setActive(s)} className={active[0] === s[0] ? 'active' : ''} key={s[0]}>{s[0]}</button>)}</div><article className="inspect"><b>{active[1]}</b><h3>{active[0]}</h3><p>{active[2]}</p><small>Used in: {active[3]}</small></article></div></div>
  </Section>
}

function Experience() {
  const [active, setActive] = useState(0)
  const exp = experiences[active]
  return <Section id="experience" eyebrow="03 / EXPERIENCE" title="Four-company backend timeline.">
    <div className="exp-layout"><aside>{experiences.map((e, i) => <button className={active === i ? 'active' : ''} onClick={() => setActive(i)} key={e.company}><span>{e.dates}</span><b>{e.company}</b><small>{e.role}</small></button>)}</aside><article className="exp-detail"><code>~/career/{active + 1}</code><h3>{exp.role}</h3><h4>{exp.company} • {exp.dates} • {exp.location}</h4><p>{exp.summary}</p><ul>{exp.bullets.map(b => <li key={b}><Check />{b}</li>)}</ul><div className="chips">{exp.tech.map(t => <span key={t}>{t}</span>)}</div><pre><code>{exp.code}</code></pre></article></div>
  </Section>
}

function Projects({ setProject, setEndpoint }) {
  return <Section id="projects" eyebrow="04 / PROJECTS" title="Production-minded backend and AI architectures.">
    <div className="project-grid">{projects.map((p, i) => <article className="project-card2" key={p.title}><span className="emoji">{p.icon}</span><b>{p.category}</b><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tech.map(t => <span key={t}>{t}</span>)}</div><button onClick={() => setProject(p)}>View Architecture <ChevronRight /></button><button onClick={() => { setEndpoint(i === 1 ? 3 : i === 3 ? 1 : 0); location.hash = 'playground' }}>Test in Playground</button></article>)}</div>
  </Section>
}

function Playground({ endpoint, setEndpoint, play }) {
  const [running, setRunning] = useState(false)
  const [visible, setVisible] = useState(0)
  const steps = ['Validate payload', 'Verify auth / RBAC', 'Route service handler', 'Execute backend workflow', 'Serialize 200 OK response']
  const run = () => { setRunning(true); setVisible(0); play('pulse'); steps.forEach((_, i) => setTimeout(() => { setVisible(i + 1); if (i === steps.length - 1) { setRunning(false); play('success') } }, 520 * (i + 1))) }
  return <Section id="playground" eyebrow="05 / SYSTEM PLAYGROUND" title="Mock API terminal with step-by-step execution.">
    <div className="play-layout"><aside>{endpoints.map((e, i) => <button className={endpoint === i ? 'active' : ''} onClick={() => setEndpoint(i)} key={e[1]}><span>{e[0]}</span>{e[1]}</button>)}</aside><div className="terminal"><div className="chrome"><i /><i /><i /><code>CRT REQUEST CONSOLE</code></div><pre className="payload">{endpoints[endpoint][2]}</pre><button className="send" onClick={run}><Send size={16} />SEND REQUEST</button><div className="logs">{steps.map((s, i) => <p className={visible > i ? 'done' : running && visible === i ? 'active' : ''} key={s}>{visible > i ? <Check /> : <Sparkles />} {s}</p>)}</div><div className={`response ${visible === steps.length ? 'show' : ''}`}><b>200 OK</b><button onClick={() => navigator.clipboard?.writeText('{"status":200,"engine":"pravin.backend.ai"}')}><Copy size={14} /></button><code>{`{"status":200,"engine":"FastAPI","latency_ms":124,"message":"Request completed successfully"}`}</code></div></div></div>
  </Section>
}

function NeuralDiagram() {
  const nodes = [
    [150, 82, 'Backend'],
    [260, 72, 'LLM'],
    [382, 88, 'Prompt'],
    [188, 210, 'RAG'],
    [338, 205, 'Agents'],
    [260, 338, 'Production'],
  ]
  const links = [[0, 1], [1, 2], [0, 3], [1, 3], [1, 4], [2, 4], [3, 4], [3, 5], [4, 5], [0, 4], [2, 3]]
  return <div className="neural-diagram" aria-label="Connected neural network visualization">
    <svg viewBox="0 0 520 420" role="img">
      <defs>
        <filter id="nodeGlow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>
      {links.map(([from, to], i) => <line key={`${from}-${to}`} x1={nodes[from][0]} y1={nodes[from][1]} x2={nodes[to][0]} y2={nodes[to][1]} className="neural-link" style={{ animationDelay: `${i * .08}s` }} />)}
      {nodes.map(([x, y, label], i) => <g className="neural-node" key={label} style={{ animationDelay: `${i * .12}s` }}>
        <circle cx={x} cy={y} r="28" className="node-halo" />
        <circle cx={x} cy={y} r="15" className={i === 5 ? 'node-core node-core--violet' : i % 2 ? 'node-core node-core--blue' : 'node-core'} />
        <text x={x} y={y + 48}>{label}</text>
      </g>)}
    </svg>
    <span>NEURAL TOPOLOGY VISUALIZER</span>
  </div>
}

function AIFocus() {
  const [active, setActive] = useState('LLM Integration')
  const nodes = ['Backend Engineering', 'LLM Integration', 'Prompt Engineering', 'RAG', 'AI Agents', 'Production AI']
  return <Section id="ai-focus" eyebrow="06 / AI FOCUS" title="From backend foundations to production AI systems.">
    <div className="ai-grid"><div className="neural"><NeuralDiagram /></div><div className="focus-list">{nodes.map((n, i) => <button className={active === n ? 'active' : ''} onClick={() => setActive(n)} key={n}><b>{n}</b><span>{i < 3 ? 'Hands-on' : i < 5 ? 'Active Focus' : 'Growth'}</span><small>{n === 'RAG' ? 'retrieval, embeddings, vector search' : n === 'AI Agents' ? 'tool use, memory, orchestration' : 'secure services, prompts, evaluation'}</small></button>)}</div></div>
  </Section>
}

function Contact({ openResume, play }) {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const submit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setSent(true)
    play('success')
    confetti({ particleCount: 90, spread: 70, origin: { y: .8 } })
  }
  return <Section id="contact" eyebrow="08 / CONTACT TERMINAL" title="Connect with Pravin Mali.">
    <div className="contact-card"><div className="chrome"><i /><i /><i /><code>contact.pravin.sys</code></div><div className="contact-cols"><div><p><Mail />{profile.email}<button onClick={() => navigator.clipboard?.writeText(profile.email)}><Copy size={14} /></button></p><p><Phone />{profile.phone}</p><p><Network />{profile.location}</p><a href={profile.linkedin}><Linkedin />linkedin.com/in/pravin-mali-34828a200</a><a href={profile.github}><Github />github.com/pravin6299</a><button onClick={openResume}>Open Interactive Resume</button></div><form onSubmit={submit}><input required placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} /><input required type="email" placeholder="Email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} /><textarea required placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} /><button><Send />SEND MESSAGE TO PRAVIN</button>{sent && <strong>Email app opened. Please press Send there.</strong>}</form></div></div>
  </Section>
}

function Modal({ project, setProject }) {
  if (!project) return null
  return <div className="overlay" role="dialog" aria-modal="true"><div className="arch-modal"><button className="close" onClick={() => setProject(null)}><X /></button><h2>{project.icon} {project.title}</h2><p>{project.desc}</p><div className="modal-flow">{project.nodes.map((n, i) => <span key={n}>{n}{i < project.nodes.length - 1 && <ChevronRight />}</span>)}</div><div className="chips">{project.tech.map(t => <span key={t}>{t}</span>)}</div><pre><code>{project.code}</code></pre><a href="#playground" onClick={() => setProject(null)}>Test in Playground</a></div></div>
}

function resumeMarkdown() {
  return `${profile.name}\n${profile.role}\n${profile.email} | ${profile.phone} | ${profile.location}\n${profile.linkedin} | ${profile.github}\n\nSUMMARY\n${summary}\n\nTECHNICAL SKILLS\n${techBadges.join(', ')}\n\nEXPERIENCE\n${experiences.map(e => `${e.role} - ${e.company} (${e.dates})\n${e.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n')}\n\nEDUCATION\nBachelor of Computer Applications (BCA) - 70% | Bhagwan Mahavir College (2022)\n\nLANGUAGES\nEnglish, Hindi, Gujarati, Marathi`
}

function ResumeModal({ open, onClose }) {
  if (!open) return null
  const text = resumeMarkdown()
  const download = () => {
    const url = URL.createObjectURL(new Blob([text], { type: 'text/markdown' }))
    const a = document.createElement('a'); a.href = url; a.download = 'pravin-mali-resume.md'; a.click(); URL.revokeObjectURL(url)
  }
  return <div className="overlay resume-overlay" role="dialog" aria-modal="true"><div className="resume-modal"><button className="close" onClick={onClose}><X /></button><h2>{profile.name}</h2><h3>{profile.role}</h3><p>{profile.email} • {profile.phone} • {profile.location}</p><div className="resume-actions"><button onClick={() => navigator.clipboard?.writeText(text)}><Copy />Copy Text</button><button onClick={() => print()}><Printer />Print</button><button onClick={download}><Download />Download .MD</button></div><article><h4>Professional Summary</h4><p>{summary}</p></article><article><h4>Technical Skills</h4><div className="resume-grid">{['Languages/Frameworks: Python, SQL, Django, DRF, FastAPI', 'AI/LLM: Groq API, Prompt Engineering, Whisper, TTS, Voice AI', 'Databases: PostgreSQL, SQLite', 'DevOps/API/Security: Docker, Git, Linux, JWT, RBAC, OpenAPI, Postman'].map(x => <span key={x}>{x}</span>)}</div></article>{experiences.map(e => <article key={e.company}><h4>{e.role} - {e.company}</h4><small>{e.dates}</small><ul>{e.bullets.map(b => <li key={b}>{b}</li>)}</ul><pre><code>{e.code}</code></pre></article>)}<article><h4>Education & Languages</h4><p>BCA 70% | Bhagwan Mahavir College 2022. English, Hindi, Gujarati, Marathi.</p></article></div></div>
}

function CommandPalette({ open, onClose, openResume, setSound }) {
  const commands = useMemo(() => [
    ['Open Pravin Mali\'s Full Resume', openResume], ['Navigate to About', () => location.hash = 'about'], ['Navigate to Skills', () => location.hash = 'skills'], ['Navigate to Experience', () => location.hash = 'experience'], ['Navigate to Projects', () => location.hash = 'projects'], ['Navigate to Playground', () => location.hash = 'playground'], ['Navigate to AI Focus', () => location.hash = 'ai-focus'], ['Navigate to Contact', () => location.hash = 'contact'], ['Toggle Sound Effects', () => setSound(v => !v)], ['Open GitHub', () => window.open(profile.github, '_blank', 'noopener,noreferrer')], ['Open LinkedIn', () => window.open(profile.linkedin, '_blank', 'noopener,noreferrer')]
  ], [openResume, setSound])
  const [q, setQ] = useState('')
  const [idx, setIdx] = useState(0)
  const list = commands.filter(c => c[0].toLowerCase().includes(q.toLowerCase()))
  useEffect(() => {
    if (!open) return
    const onKey = e => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowDown') { e.preventDefault(); setIdx(i => Math.min(i + 1, list.length - 1)) }
      if (e.key === 'ArrowUp') { e.preventDefault(); setIdx(i => Math.max(i - 1, 0)) }
      if (e.key === 'Enter' && list[idx]) { list[idx][1](); onClose() }
    }
    addEventListener('keydown', onKey); return () => removeEventListener('keydown', onKey)
  }, [open, idx, list, onClose])
  if (!open) return null
  return <div className="overlay"><div className="palette"><Search /><input autoFocus value={q} onChange={e => { setQ(e.target.value); setIdx(0) }} placeholder="Type a command..." />{list.map((c, i) => <button className={i === idx ? 'active' : ''} onClick={() => { c[1](); onClose() }} key={c[0]}>{c[0]}</button>)}</div></div>
}

export default function App() {
  const [resume, setResume] = useState(false)
  const [palette, setPalette] = useState(false)
  const [sound, setSound] = useState(false)
  const [project, setProject] = useState(null)
  const [endpoint, setEndpoint] = useState(0)
  const play = useSynth(sound)
  useEffect(() => {
    const key = e => { if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); setPalette(true) } }
    addEventListener('keydown', key); return () => removeEventListener('keydown', key)
  }, [])
  return <>
    <Nav openResume={() => setResume(true)} openPalette={() => setPalette(true)} sound={sound} setSound={setSound} />
    <main><Hero openResume={() => setResume(true)} play={play} /><About openResume={() => setResume(true)} /><Skills /><Experience /><Projects setProject={setProject} setEndpoint={setEndpoint} /><Playground endpoint={endpoint} setEndpoint={setEndpoint} play={play} /><AIFocus /><Contact openResume={() => setResume(true)} play={play} /></main>
    <footer>Pravin Mali • Backend Developer | AI & LLM Engineer • Gujarat, India</footer>
    <Modal project={project} setProject={setProject} />
    <ResumeModal open={resume} onClose={() => setResume(false)} />
    <CommandPalette open={palette} onClose={() => setPalette(false)} openResume={() => setResume(true)} setSound={setSound} />
  </>
}
