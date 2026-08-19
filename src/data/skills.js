import { Braces, Bot, Database, Library, ShieldCheck, Terminal, Wrench } from 'lucide-react'

export const skillGroups = [
  { title: 'Languages', icon: Braces, skills: ['Python', 'SQL'] },
  { title: 'Frameworks', icon: Terminal, skills: ['Django', 'Django REST Framework', 'FastAPI'] },
  { title: 'AI & LLM', icon: Bot, skills: ['Groq API', 'LLM Integration', 'Prompt Engineering', 'Whisper', 'Text-to-Speech', 'Voice AI'] },
  { title: 'Databases', icon: Database, skills: ['PostgreSQL', 'SQLite'] },
  { title: 'Libraries', icon: Library, skills: ['Pandas', 'NumPy'] },
  { title: 'DevOps', icon: Wrench, skills: ['Docker', 'Git', 'Linux'] },
  { title: 'API & Security', icon: ShieldCheck, skills: ['REST APIs', 'JWT Authentication', 'RBAC', 'OpenAPI / Swagger', 'Postman'] },
  { title: 'Tools', icon: Wrench, skills: ['VS Code', 'Cursor', 'Windsurf'] },
]

export const skillRelationships = {
  Python: 'Backend systems', SQL: 'Backend systems', FastAPI: 'AI Voice Assistant',
  Django: 'Forex Data Platform', 'Django REST Framework': 'Forex Data Platform',
  'Groq API': 'AI Voice Assistant', 'LLM Integration': 'AI Voice Assistant',
  'Prompt Engineering': 'AI Voice Assistant', Whisper: 'AI Voice Assistant',
  'Text-to-Speech': 'AI Voice Assistant', 'Voice AI': 'AI Voice Assistant',
  PostgreSQL: 'Backend systems', SQLite: 'Forex Data Platform',
  'REST APIs': 'Backend systems', 'JWT Authentication': 'AI Voice Assistant',
  RBAC: 'AI Voice Assistant', 'OpenAPI / Swagger': 'AI Voice Assistant',
}
