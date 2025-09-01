export interface ExperienceItemType {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
  link?: string;
}

export const experiences: ExperienceItemType[] = [
  {
    company: "Center of Language Engineering, Lahore",
    role: "AI Research Officer",
    duration: "Nov 2023 – Feb 2025",
    achievements: [
      "Led CNN-LSTM OCR engine for Urdu/Arabic/Farsi achieving ~98% accuracy, reducing CER from 3.4% to 2.3%.",
      "Developed YOLOv8-based live news ticker detection (~98% accuracy) for media pipelines.",
      "Refactored monolithic Django backend into modular API-first system; co-authored OCR research methodology.",
    ],
  },
  {
    company: "Nodlays, Lahore",
    role: "AI Engineer",
    duration: "Feb 2023 - Jan 2024",
    achievements: [
      "Engineered YOLOv7 pipeline for semiconductor DataMatrix recovery with Azure ML, reducing manual review by 60%.",
      "Built GPT-3 powered fitness assistant with Django REST, enabling personalized real-time insights.",
      "Developed CNN/RCNN-based CAPTCHA solver and prototyped .NET Core pose estimation system.",
    ],
  },
  {
    company: "Highbit Games, Lahore",
    role: "Software Engineer",
    duration: "Jul 2022 – Dec 2022",
    achievements: [
      "Built background-removal API with OpenCV + Django REST achieving 92%+ segmentation accuracy.",
      "Contributed to GoIndia.care & Sensaware.io platforms with Django backends and React frontends, including Stripe/PayPal integrations.",
    ],
  },
  {
    company: "ICRL Labs, KICS, UET",
    role: "Machine Learning Intern",
    duration: "Aug 2021 – Jan 2022",
    achievements: [
      "Implemented ML pipelines for breast cancer detection using open-source datasets.",
      "Contributed to YOLO-based disease/tower component detection and OCR preprocessing workflows.",
    ],
  },
  {
    company: "Freelance Developer — Fiverr",
    role: "AI & Web Developer",
    duration: "2019 – 2021",
    achievements: [
      "Delivered 20+ AI projects (classification, sentiment analysis, regression, OCR APIs).",
      "Built and deployed React, Node.js, and .NET MVC applications for international clients.",
    ],
  },
];
