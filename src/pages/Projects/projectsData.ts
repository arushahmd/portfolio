// src/data/projects.ts (for example)

import urduocrDesktop from "../..//assets/project_images/urdu-ocr/urduocr-desktop-version.png";
import urduocrUi from "../..//assets/project_images/urdu-ocr/urdu-ocr-ui.png";
import urduocrSpeech from "../..//assets/project_images/urdu-ocr/speech-to-text.png";

import flightAssistant from "../..//assets/project_images/flight-assistant/flight-assistant.png";

import dmHome from "../..//assets/project_images/digitho-data-matrix/dm-home.png";
import dmMain from "../..//assets/project_images/digitho-data-matrix/dm-main.png";
import dmProcess from "../..//assets/project_images/digitho-data-matrix/process-result.jpg";
import dmReading from "../..//assets/project_images/digitho-data-matrix/data-reading.jpg";

import poseMain from "../..//assets/project_images/human-pose-estimation/main.png";
import poseMobile from "../..//assets/project_images/human-pose-estimation/mobile.png";
import poseResult1 from "../..//assets/project_images/human-pose-estimation/result-1.png";
import poseResult2 from "../..//assets/project_images/human-pose-estimation/result-2.png";

import captchaMain from "../..//assets/project_images/captcha-recognition/main-ui.png";
import captchaMulti from "../..//assets/project_images/captcha-recognition/multi-read.png";
import captchaResult1 from "../..//assets/project_images/captcha-recognition/result-1.png";

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
    images: [urduocrDesktop, urduocrUi, urduocrSpeech],
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
    images: [flightAssistant],
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
    images: [dmHome, dmMain, dmProcess, dmReading],
    website: "https://digitho.com/solutions/digid-software-platform/",
    techStack: ["Python", "YOLOv5", "Azure ML", "OpenCV", "Roboflow"],
    impact:
      "Achieved 98%+ detection accuracy and restored ~65% of distorted codes, significantly reducing manual verification and enabling reliable extraction where traditional OCR failed.",
  },
  {
    title: "Real-Time Human Pose Detection",
    description:
      "Engineered a low-latency AI pipeline for human pose recognition and correction across images, videos, and live streams, enabling interactive applications in fitness, healthcare, and live events.",
    images: [poseMain, poseMobile, poseResult1, poseResult2],
    github: "https://github.com/arushahmd/pose-estimation-correction-ui-emgucv",
    techStack: ["Python", "PyTorch", "OpenCV", "Computer Vision"],
    impact:
      "Reduced manual correction effort by 50% with accurate, real-time pose detection across diverse inputs, delivering production-ready performance for interactive applications.",
  },
  {
    title: "Captcha OCR Solver",
    description:
      "Built a deep learning OCR system using CNN + GRU to automatically decode captchas containing lowercase letters and digits, achieving robust sequence prediction under noisy conditions.",
    images: [captchaMain, captchaMulti, captchaResult1],
    github:
      "https://github.com/arushahmd/ai-projects/tree/master/captcha-solver",
    techStack: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "CNN",
      "GRU",
      "Albumentations",
    ],
    impact:
      "Achieved >95% accuracy on unseen captcha formats, reducing manual solving effort and providing a scalable, production-ready OCR solution robust to noise and distortions.",
  },
];
