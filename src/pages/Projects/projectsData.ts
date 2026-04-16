// src/pages/Projects/projectsData.ts
import urduocrDesktop from "../../assets/project_images/urdu-ocr/urduocr-desktop-version.png";
import urduocrUi      from "../../assets/project_images/urdu-ocr/urdu-ocr-ui.png";
import urduocrSpeech  from "../../assets/project_images/urdu-ocr/speech-to-text.png";

import flightAssistant from "../../assets/project_images/flight-assistant/flight-assistant.png";

import dmHome    from "../../assets/project_images/digitho-data-matrix/dm-home.png";
import dmMain    from "../../assets/project_images/digitho-data-matrix/dm-main.png";
import dmProcess from "../../assets/project_images/digitho-data-matrix/process-result.jpg";
import dmReading from "../../assets/project_images/digitho-data-matrix/data-reading.jpg";

import poseMain    from "../../assets/project_images/human-pose-estimation/main.png";
import poseMobile  from "../../assets/project_images/human-pose-estimation/mobile.png";
import poseResult1 from "../../assets/project_images/human-pose-estimation/result-1.png";
import poseResult2 from "../../assets/project_images/human-pose-estimation/result-2.png";

import captchaMain    from "../../assets/project_images/captcha-recognition/main-ui.png";
import captchaMulti   from "../../assets/project_images/captcha-recognition/multi-read.png";
import captchaResult1 from "../../assets/project_images/captcha-recognition/result-1.png";

// Generated SVG project images
import compassVoiceImg from "../../assets/project_images/compass-voice.svg";
import dineassistImg   from "../../assets/project_images/dineassist.svg";
import menuparserImg   from "../../assets/project_images/menuparser.svg";

export interface Project {
  title: string;
  badge: string;
  metric?: string;
  description: string;
  images?: string[];
  github?: string;
  website?: string;
  tags: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Compass Voice",
    badge: "Production · Voice AI",
    metric: "<1s latency",
    description:
      "Real-time AI voice ordering platform. Twilio Media Streams + Deepgram STT/TTS with a deterministic FSM dialogue engine, DistilBERT intent classification, and Datacap payment integration. Built for Cygnus Payments.",
    images: [compassVoiceImg],
    github: "https://github.com/arushahmd",
    tags: ["FastAPI", "Twilio", "Deepgram", "DistilBERT", "Redis", "AWS", "spaCy"],
    featured: true,
  },
  {
    title: "Urdu OCR & NLP Pipeline",
    badge: "Production · OCR",
    metric: "~98% accuracy",
    description:
      "CNN-LSTM OCR engine for Urdu, Arabic, and Farsi text recognition. CER reduced from 3.4% to 2.3%. NLP pipelines for document understanding and language translation. Deployed at CLE Lahore.",
    images: [urduocrDesktop, urduocrUi, urduocrSpeech],
    github: "https://github.com/arushahmd/urdu-ocr-media-utils",
    website: "https://tech.cle.org.pk/",
    tags: ["PyTorch", "CNN-LSTM", "OpenCV", "NLP", "Python"],
    featured: true,
  },
  {
    title: "DineAssist AI",
    badge: "Voice AI · LLM",
    metric: "LangGraph",
    description:
      "Real-time restaurant voice assistant using Twilio, Llama 4 Maverick, TTS/STT, LangChain, and LangGraph. Automated order capture, conversational responses, and status tracking through LLM-driven workflows.",
    images: [dineassistImg],
    github: "https://github.com/arushahmd",
    tags: ["LangGraph", "Llama 4", "Twilio", "LangChain", "FastAPI"],
  },
  {
    title: "MenuParser AI",
    badge: "OCR · LLM Pipeline",
    metric: "99% effort ↓",
    description:
      "PaddleOCR + Llama Maverick pipeline converting restaurant menus into structured JSON. Reduced manual menu entry effort by ~99% through automated extraction and normalisation.",
    images: [menuparserImg],
    github: "https://github.com/arushahmd",
    tags: ["PaddleOCR", "Llama Maverick", "Prompt Engineering", "Python"],
  },
  {
    title: "Data Matrix Recovery Pipeline",
    badge: "Computer Vision",
    metric: "60% QA ↓",
    description:
      "YOLOv7 pipeline for semiconductor DataMatrix code recovery on Azure ML. 98%+ detection accuracy, restoring ~65% of distorted codes and significantly reducing manual verification.",
    images: [dmHome, dmMain, dmProcess, dmReading],
    github: "https://github.com/arushahmd",
    website: "https://digitho.com/solutions/digid-software-platform/",
    tags: ["YOLOv7", "Azure ML", "OpenCV", "Roboflow", "Python"],
  },
  {
    title: "Conversational Flight Assistant",
    badge: "RAG · Travel AI",
    metric: "FAISS + RAG",
    description:
      "Retrieval-augmented travel assistant using LangChain + FAISS to answer flight queries, visa requirements, and refund policies in real time with improved response relevance.",
    images: [flightAssistant],
    github: "https://github.com/arushahmd/conversational-flight-agent-assistant",
    tags: ["LangChain", "FAISS", "RAG", "Python", "LLMs"],
  },
  {
    title: "Real-Time Pose Detection",
    badge: "Computer Vision",
    metric: "50% effort ↓",
    description:
      "Low-latency AI pipeline for human pose recognition and correction across images, videos, and live streams. Production-ready performance for fitness, healthcare, and live event applications.",
    images: [poseMain, poseMobile, poseResult1, poseResult2],
    github: "https://github.com/arushahmd/pose-estimation-correction-ui-emgucv",
    tags: ["PyTorch", "OpenCV", "Computer Vision", "Python"],
  },
  {
    title: "Captcha OCR Solver",
    badge: "Deep Learning",
    metric: ">95% accuracy",
    description:
      "CNN + GRU deep learning system to automatically decode captchas. Robust sequence prediction under noisy conditions with production-ready accuracy.",
    images: [captchaMain, captchaMulti, captchaResult1],
    github: "https://github.com/arushahmd/ai-projects/tree/master/captcha-solver",
    tags: ["PyTorch", "TensorFlow", "CNN", "GRU", "Albumentations"],
  },
];
