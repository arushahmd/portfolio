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
      "Built real-time voice ordering with Twilio Media Streams, Deepgram STT/TTS, and FastAPI/WebSockets.",
      "Implemented Redis-backed sessions for multi-turn cart and checkout flows.",
      "Separated custom NLU from deterministic orchestration and application logic.",
    ],
    tags: ["FastAPI", "Twilio", "Deepgram", "Redis", "WebSockets", "State Machines"],
  },
  {
    company: "Independent Research",
    role: "LLM Research Engineer (Independent)",
    duration: "June 2025 – Present",
    bullets: [
      "Designed Flan-T5 instruction fine-tuning with LoRA and Hugging Face Transformers.",
      "Built semantic and length-aware batching experiments with matched multi-seed evaluation.",
      "Compared batching strategies without overstating generalization effects.",
    ],
    tags: ["LLMs", "Instruction Tuning", "Flan-T5", "LoRA", "Hugging Face", "FAISS", "Evaluation"],
    link: "https://github.com/arushahmd/llm-batching-research",
  },
  {
    company: "Center of Language Engineering",
    role: "AI Research Officer",
    duration: "Nov 2023 – Feb 2025",
    bullets: [
      "Researched Urdu, Arabic, and Farsi document workflows for OCR and language technology.",
      "Built document and news-ticker vision pipelines with PyTorch, OpenCV, and detection tooling.",
      "Contributed reproducible methodology and API-oriented architecture for applied language systems.",
    ],
    tags: ["PyTorch", "OCR", "Computer Vision", "OpenCV", "Django", "Research"],
    link: "https://tech.cle.org.pk/",
  },
  {
    company: "Nodlays",
    role: "AI Engineer",
    duration: "Oct 2022 – Jan 2024",
    bullets: [
      "Built applied ML and computer-vision systems for OCR, detection, and image processing.",
      "Deployed model-backed services with Azure ML, Roboflow, Django REST, and OpenCV.",
      "Built AI assistants and backend integrations with maintainable service boundaries.",
    ],
    tags: ["YOLO", "OCR", "Azure ML", "Roboflow", "Django REST", "OpenCV"],
  },
  {
    company: "Freelance Developer — Fiverr",
    role: "AI & Web Developer",
    duration: "2019 – 2021",
    bullets: [
      "Built client-facing AI and web applications with Python, React, Node.js, and Django.",
      "Translated product requirements into working prototypes and maintainable features.",
    ],
    tags: ["Python", "React", "Node.js", "Django", "AI/ML"],
  },
];
