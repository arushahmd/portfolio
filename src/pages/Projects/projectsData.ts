export interface Project {
  title: string;
  badge: string;
  description: string;
  github: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Restaurant Voice AI",
    badge: "Real-time Voice AI",
    description:
      "A FastAPI/WebSocket voice-ordering system combining Twilio Media Streams, Deepgram STT/TTS, custom NLU, Redis-backed sessions, and deterministic state-machine routing for cart and checkout flows.",
    github: "https://github.com/arushahmd/restaurant-voice-ai",
    tags: ["Python", "FastAPI", "WebSockets", "Twilio", "Deepgram", "Redis"],
  },
  {
    title: "LLM Batching Research",
    badge: "Reproducible LLM Research",
    description:
      "A controlled study of semantic/random mini-batching and length-based curriculum ordering for Flan-T5 instruction fine-tuning. Safe scope: 54 reviewed runs across matched multi-seed experiments.",
    github: "https://github.com/arushahmd/llm-batching-research",
    tags: ["Flan-T5", "LoRA", "FAISS", "Transformers", "Semantic Batching", "Multi-seed Evaluation"],
  },
  {
    title: "Urdu Document OCR",
    badge: "Computer Vision · OCR",
    description:
      "An end-to-end Urdu OCR system with RTL layout analysis, CNN-BiLSTM-CTC recognition, reproducible synthetic evaluation, CLI tooling, and a FastAPI boundary.",
    github: "https://github.com/arushahmd/urdu-document-ocr",
    tags: ["PyTorch", "CNN-BiLSTM-CTC", "OCR", "RTL Layout", "FastAPI", "Reproducible Evaluation"],
  },
  {
    title: "Multi-Head Intent Classification",
    badge: "NLP · Evaluation",
    description:
      "A transformer classifier for restaurant-ordering intent detection with independent main/sub-intent heads, leakage-resistant splitting, reproducible manifests, evaluation, and local inference.",
    github: "https://github.com/arushahmd/multihead-intent-classification",
    tags: ["Transformers", "Intent Classification", "Multi-head Modeling", "Evaluation", "Reproducibility", "CI"],
  },
  {
    title: "DataMatrix Reconstruction",
    badge: "Classical Computer Vision",
    description:
      "A reproducible classical computer-vision pipeline that rectifies, infers module grids, rejects ambiguous candidates, and reconstructs degraded DataMatrix symbols under controlled synthetic conditions.",
    github: "https://github.com/arushahmd/datamatrix-reconstruction",
    tags: ["Computer Vision", "Geometric Rectification", "DataMatrix", "ZXing-C++", "Synthetic Benchmarking", "Python"],
  },
];
