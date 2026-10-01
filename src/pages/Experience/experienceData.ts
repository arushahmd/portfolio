export interface Experience {
  company: string;
  role: string;
  duration: string;
  bullets: string[];
  tags: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    company: "Cygnus Payments",
    role: "Senior AI Engineer",
    duration: "Aug 2025 – Jun 2026",
    bullets: [
      "Developed real-time voice-ordering workflows with Twilio Media Streams, Deepgram STT/TTS, and FastAPI/WebSockets.",
      "Built Redis-backed state and session handling for multi-turn ordering, cart, and checkout flows.",
      "Separated custom NLU from deterministic conversation orchestration and application logic.",
    ],
    tags: ["FastAPI", "Twilio", "Deepgram", "Redis", "WebSockets", "State Machines"],
  },
  {
    company: "Independent Research",
    role: "LLM Research Engineer (Independent)",
    duration: "June 2025 – Present",
    bullets: [
      "Designed an instruction fine-tuning pipeline for Flan-T5 using LoRA adapters and Hugging Face Transformers.",
      "Built semantic and length-aware batching experiments with matched multi-seed evaluation and reproducible outputs.",
      "Reviewed 54 controlled runs to compare batching strategies without overstating generalization effects.",
    ],
    tags: ["LLMs", "Instruction Tuning", "Flan-T5", "LoRA", "Hugging Face", "FAISS", "Evaluation"],
    link: "https://github.com/arushahmd/llm-batching-research",
  },
  {
    company: "Center of Language Engineering",
    role: "AI Research Officer",
    duration: "Nov 2023 – Feb 2025",
    bullets: [
      "Worked on OCR and language-technology research spanning Urdu, Arabic, and Farsi document workflows.",
      "Built computer-vision pipelines for document and news-ticker analysis using PyTorch, OpenCV, and detection tooling.",
      "Contributed to research methodology and API-oriented architecture for applied language systems.",
    ],
    tags: ["PyTorch", "OCR", "Computer Vision", "OpenCV", "Django", "Research"],
    link: "https://tech.cle.org.pk/",
  },
  {
    company: "Nodlays",
    role: "AI Engineer",
    duration: "Oct 2022 – Jan 2024",
    bullets: [
      "Worked on applied machine-learning and computer-vision systems spanning OCR, detection, and image processing.",
      "Developed and deployed model-backed services with Azure ML, Roboflow, Django REST, and OpenCV.",
      "Built AI-powered assistants and backend integrations with an emphasis on maintainable service boundaries.",
    ],
    tags: ["YOLO", "OCR", "Azure ML", "Roboflow", "Django REST", "OpenCV"],
  },
  {
    company: "Freelance Developer — Fiverr",
    role: "AI & Web Developer",
    duration: "2019 – 2021",
    bullets: [
      "Built client-facing AI and web applications across Python, React, Node.js, and Django stacks.",
      "Translated ambiguous product requirements into working prototypes and maintainable application features.",
    ],
    tags: ["Python", "React", "Node.js", "Django", "AI/ML"],
  },
];
