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
      "FastAPI/WebSocket voice ordering with Twilio Media Streams, Deepgram STT/TTS, custom NLU, Redis sessions, and deterministic cart/checkout routing.",
    github: "https://github.com/arushahmd/restaurant-voice-ai",
    tags: ["Python", "FastAPI", "WebSockets", "Twilio", "Deepgram", "Redis"],
  },
  {
    title: "LLM Batching Research",
    badge: "Reproducible LLM Research",
    description:
      "Controlled Flan-T5 instruction-tuning research comparing semantic/random mini-batching with length-based curriculum ordering across matched multi-seed experiments.",
    github: "https://github.com/arushahmd/llm-batching-research",
    tags: ["Flan-T5", "LoRA", "FAISS", "Transformers", "Semantic Batching", "Multi-seed Evaluation"],
  },
  {
    title: "Urdu Document OCR",
    badge: "Computer Vision · OCR",
    description:
      "End-to-end Urdu OCR with RTL layout analysis, CNN-BiLSTM-CTC recognition, synthetic evaluation, CLI tooling, and a FastAPI boundary.",
    github: "https://github.com/arushahmd/urdu-document-ocr",
    tags: ["PyTorch", "CNN-BiLSTM-CTC", "OCR", "RTL Layout", "FastAPI", "Reproducible Evaluation"],
  },
  {
    title: "Multi-Head Intent Classification",
    badge: "NLP · Evaluation",
    description:
      "Transformer classification for restaurant-ordering intents with independent main/sub-intent heads, leakage-resistant splits, reproducible evaluation, and local inference.",
    github: "https://github.com/arushahmd/multihead-intent-classification",
    tags: ["Transformers", "Intent Classification", "Multi-head Modeling", "Evaluation", "Reproducibility", "CI"],
  },
  {
    title: "DataMatrix Reconstruction",
    badge: "Classical Computer Vision",
    description:
      "Classical computer vision for rectifying degraded DataMatrix symbols, inferring module grids, rejecting ambiguous candidates, and reconstructing under controlled synthetic conditions.",
    github: "https://github.com/arushahmd/datamatrix-reconstruction",
    tags: ["Computer Vision", "Geometric Rectification", "DataMatrix", "ZXing-C++", "Synthetic Benchmarking", "Python"],
  },
];
