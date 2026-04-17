export interface SkillGroup {
  category: string;
  icon: string;
  chips: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / ML / LLMs",
    icon: "🤖",
    chips: [
      "PyTorch", "TensorFlow", "Hugging Face", "LangChain",
      "LangGraph", "FAISS", "Pinecone", "DistilBERT",
      "YOLOv5/7/8", "Transformers", "Llama", "GPT-4",
    ],
  },
  {
    category: "Voice AI & NLP",
    icon: "🎙️",
    chips: [
      "Twilio Media Streams", "Deepgram STT/TTS", "spaCy",
      "PaddleOCR", "RAG", "Prompt Engineering",
      "NER", "Text-to-SQL", "Intent Detection",
    ],
  },
  {
    category: "Languages",
    icon: "⚡",
    chips: ["Python", "JavaScript", "TypeScript", "SQL", "React.js", "Next.js"],
  },
  {
    category: "Backend & Infrastructure",
    icon: "🏗️",
    chips: [
      "FastAPI", "Django REST", "Redis", "PostgreSQL",
      "Docker", "AWS", "GCP Vertex AI", "Azure ML", "CI/CD",
    ],
  },
];
