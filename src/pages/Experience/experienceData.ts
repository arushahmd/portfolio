// src/pages/Experience/experienceData.ts
import logoCygnus  from "../../assets/logo-cygnus.png";
import logoCle     from "../../assets/logo-cle.svg";
import logoNodlays from "../../assets/logo-nodlays.jpg";
import logoFiverr  from "../../assets/logo-fiverr.svg";

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location?: string;
  current?: boolean;
  logo?: string;
  bullets: string[];
  tags: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    company: "Cygnus Payments",
    role: "AI / Backend Engineer",
    duration: "Aug 2025 – Present",
    location: "Virginia, USA (Remote)",
    current: true,
    logo: logoCygnus,
    bullets: [
      "Led Compass Voice — real-time AI voice ordering via Twilio + Deepgram, achieving <1s response latency",
      "Architected deterministic FSM backend for multi-step ordering flows, modifiers, validation & payment transitions",
      "Built DistilBERT + spaCy intent classification & slot extraction pipelines, improving routing accuracy",
      "Deployed on FastAPI, Redis, Docker, AWS with Datacap payment API integration",
    ],
    tags: ["FastAPI", "Twilio", "Deepgram", "DistilBERT", "spaCy", "Redis", "AWS", "Docker"],
  },
  {
    company: "Independent Research",
    role: "LLM Research Engineer (Independent)",
    duration: "June 2025 – Present",
    location: "Lahore, Pakistan",
    logo: logoCle,
    bullets: [
      "Designed and implemented an end-to-end instruction fine-tuning pipeline for Flan-T5 using LoRA adapters with Hugging Face Transformers",
      "Built a semantic batching system with Sentence Transformers and FAISS to construct similarity-based mini-batches for training",
      "Developed and compared random batching, grouped batching, and curriculum batching strategies across reproducible multi-seed experiments",
      "Engineered a modular experimentation framework with YAML configs, automated aggregation scripts, and research-grade evaluation outputs",
      "Found that semantic grouping improves training stability but does not significantly improve generalization performance",
    ],
    tags: ["LLMs", "Instruction Tuning", "Flan-T5", "LoRA", "Hugging Face", "FAISS", "Sentence Transformers"],
  },
  {
    company: "Center of Language Engineering",
    role: "AI Research Officer",
    duration: "Nov 2023 – Feb 2025",
    logo: logoCle,
    bullets: [
      "Led CNN-LSTM OCR engine for Urdu/Arabic/Farsi — ~98% accuracy, CER reduced from 3.4% to 2.3%",
      "Built YOLOv8 live news ticker detection system using Roboflow pipelines (~98% accuracy)",
      "Co-authored OCR research methodology; refactored Django monolith into modular API-first architecture",
    ],
    tags: ["PyTorch", "CNN-LSTM", "YOLOv8", "OpenCV", "Django", "Roboflow"],
    link: "https://tech.cle.org.pk/",
  },
  {
    company: "Nodlays, Lahore",
    role: "AI Engineer",
    duration: "Oct 2022 – Jan 2024",
    logo: logoNodlays,
    bullets: [
      "Worked on ML and computer vision systems spanning YOLO, OCR, and image processing workflows for production use cases",
      "Developed and deployed models using Azure ML and Roboflow, including a YOLOv7 pipeline for semiconductor DataMatrix recovery",
      "Built Django REST APIs for AI-powered applications, including GPT-based assistants and computer vision solutions",
      "Contributed to applied AI systems that improved automation quality and reduced manual review effort",
    ],
    tags: ["YOLO", "OCR", "Azure ML", "Roboflow", "Django REST", "OpenCV", "GPT"],
  },
  /*
  {
    company: "Highbit Games, Lahore",
    role: "Software Engineer",
    duration: "Jul 2022 – Dec 2022",
    logo: logoHighbit,
    bullets: [
      "Built background-removal API with OpenCV + Django REST achieving 92%+ segmentation accuracy",
      "Contributed to GoIndia.care & Sensaware.io with Django backends and React frontends",
    ],
    tags: ["Django", "React", "OpenCV", "Stripe", "PayPal"],
  },
  */
  /*
  {
    company: "ICRL Labs, KICS, UET",
    role: "Machine Learning Intern",
    duration: "Aug 2021 – Jan 2022",
    logo: logoKics,
    bullets: [
      "YOLO-based disease/component detection and OCR preprocessing workflows",
      "Data annotation pipelines using professional annotation tooling",
    ],
    tags: ["YOLO", "OCR", "Python", "Annotation"],
  },
  */
  {
    company: "Freelance Developer — Fiverr",
    role: "AI & Web Developer",
    duration: "2019 – 2021",
    logo: logoFiverr,
    bullets: [
      "Delivered 20+ AI/ML + full-stack solutions for international clients",
      "Built React, Node.js, and Django applications across multiple domains",
    ],
    tags: ["Python", "React", "Node.js", "Django", "AI/ML"],
  },
];
