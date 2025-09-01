export interface Project {
  title: string;
  description: string;
  images?: string[]; // Array of image URLs
  github?: string;
  website?: string;
  techStack?: string[];
  impact?: string;
}

export const projects: Project[] = [
  {
    title: "Urdu OCR & NLP Pipeline",
    description:
      "Built a CNN-LSTM OCR engine for Urdu, Arabic, and Farsi text recognition achieving ~98% accuracy. Integrated with NLP pipelines for document understanding and language translation.",
    images: ["/projects/urdu-ocr-1.png", "/projects/urdu-ocr-2.png"],
    github: "https://github.com/arushahmd/urdu-ocr-media-utils",
    website: "https://tech.cle.org.pk/",
    techStack: ["Python", "PyTorch", "OpenCV", "NLP"],
    impact:
      "Automated ingestion and OCR reduced manual effort by 80%, improved inference speed 2.3×, and unlocked new revenue streams by enabling searchable digital archives.",
  },
  {
    title: "Conversational Flight Assistant",
    description:
      "Developed a Conversational AI Travel Assistant using RAG (LangChain + FAISS) to answer natural flight queries, visa requirements, and refund policies in real time.",
    images: ["/projects/flight-1.png", "/projects/flight-2.png"],
    techStack: ["Python", "LangChain", "FAISS", "LLMs", "RAG"],
    github:
      "https://github.com/arushahmd/conversational-flight-agent-assistant",
    impact:
      "Automated query resolution reduced support time by 60% and improved user satisfaction with scalable multilingual conversational capabilities.",
  },
  {
    title: "Data Matrix Code Restoration Pipeline",
    description:
      "Built an AI-powered pipeline for detecting, restoring, and decoding microscopic Data Matrix codes on silicon components, enabling reliable extraction under distortion and low resolution.",
    images: ["/projects/digitho-1.png", "/projects/digitho-2.png"],
    website: "https://digitho.com/solutions/digid-software-platform/",
    techStack: ["Python", "YOLOv5", "Azure ML", "OpenCV", "Roboflow"],
    impact:
      "Achieved 98%+ detection accuracy and restored ~65% of distorted codes, significantly reducing manual verification and enabling reliable extraction where traditional OCR failed.",
  },
  {
    title: "Real-Time Human Pose Detection",
    description:
      "Engineered a low-latency AI pipeline for human pose recognition and correction across images, videos, and live streams, enabling interactive applications in fitness, healthcare, and live events.",
    images: ["/projects/pose-1.png", "/projects/pose-2.png"],
    github: "https://github.com/arushahmd/pose-estimation-correction-ui-emgucv",
    techStack: ["Python", "PyTorch", "OpenCV", "Computer Vision"],
    impact:
      "Reduced manual correction effort by 50% with accurate, real-time pose detection across diverse inputs, delivering production-ready performance for interactive applications.",
  },

  // Add more projects here
];
