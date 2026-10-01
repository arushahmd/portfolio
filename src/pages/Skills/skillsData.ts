export interface SkillGroup {
  category: string;
  icon: string;
  chips: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML & Vision",
    icon: "◈",
    chips: ["PyTorch", "Transformers", "Hugging Face", "LoRA / PEFT", "OCR", "CNN-BiLSTM-CTC", "Computer Vision"],
  },
  {
    category: "LLM / NLP",
    icon: "✦",
    chips: ["Instruction Fine-Tuning", "RAG / Retrieval", "FAISS", "Intent Classification", "NER", "Evaluation / Error Analysis"],
  },
  {
    category: "Backend / Systems",
    icon: "⌘",
    chips: ["Python", "FastAPI", "REST APIs", "WebSockets", "Redis", "SQL", "Docker"],
  },
  {
    category: "Voice / Engineering",
    icon: "⌁",
    chips: ["Twilio Media Streams", "Deepgram STT/TTS", "State / Session Orchestration", "Testing", "CI / GitHub Actions"],
  },
];
