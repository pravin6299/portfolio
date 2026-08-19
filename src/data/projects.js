export const projects = [
  {
    number: '01', title: 'AI Voice Assistant', label: 'Backend · Voice AI', featured: true,
    objective: 'Build a backend service enabling real-time, voice-based conversational interaction with an LLM.',
    tech: ['FastAPI', 'Groq LLM', 'Whisper', 'TTS', 'JWT', 'PostgreSQL', 'OpenAPI'],
    features: ['Speech-to-text transcription using Whisper', 'LLM response generation using Groq', 'Text-to-speech output', 'Secured FastAPI service', 'JWT authentication', 'RBAC', 'OpenAPI/Swagger documentation', 'STT → LLM → TTS pipeline'],
  },
  {
    number: '02', title: 'Forex Data Platform', label: 'Backend · Data', featured: false,
    objective: 'Deliver a Django-based backend for real-time forex data with high accuracy and reliability.',
    tech: ['Django', 'Django REST Framework', 'PostgreSQL / SQLite'],
    features: ['Forex-specific API integration', 'Optimized data models', 'Load handling for concurrent access', 'Data integrity', 'Backend API architecture'],
  },
]
