export const personal = {
  name: "Aroosh Ahmad",
  title: "AI/ML Engineer",
  email: "arooshahmad.data@gmail.com",
  phone: "+92-319-4040067",
  location: "Lahore, Pakistan",
  github: "https://github.com/arushahmd",
  linkedin: "https://www.linkedin.com/in/arushahmd/",
  whatsapp: "https://wa.me/923194040067",
  instagram: "https://instagram.com/arus_hahmd",
  resumeUrl: `${import.meta.env.BASE_URL}Aroosh_Ahmad_AI_Engineer.pdf`,
  openToWork: true,
};

export const hero = {
  headline: "Applied AI Engineer",
  subheadline: "LLM Systems · Voice AI · Computer Vision · Backend Infra",
  summary:
    "I build production AI systems that ship. From real-time voice ordering at Cygnus Payments to OCR engines deployed at the Center of Language Engineering, I focus on latency, reliability, and measurable business impact.",
  recruiterNote:
    "Best fit for teams hiring for applied ML, LLM product engineering, AI platform, or backend-heavy AI roles.",
  currentFocus:
    "Currently: AI / Backend Engineer at Cygnus Payments, building sub-second voice AI systems for production ordering flows.",
};

export const metrics = [
  { value: "~98%", label: "OCR Accuracy" },
  { value: "<1s", label: "Voice Latency" },
  { value: "3+", label: "Yrs Shipped" },
  { value: "99%", label: "Effort Saved" },
];

export const proofPoints = [
  {
    eyebrow: "Built",
    title: "Real-time voice AI in production",
    detail:
      "Designed ordering flows with Twilio, Deepgram, FastAPI, Redis, and payment integration under sub-second latency constraints.",
  },
  {
    eyebrow: "Improved",
    title: "OCR accuracy and error rate",
    detail:
      "Delivered ~98% OCR accuracy and reduced CER from 3.4% to 2.3% on deployed document understanding systems.",
  },
  {
    eyebrow: "Shipped",
    title: "Research-to-production execution",
    detail:
      "Delivered 20+ AI/ML solutions and collaborated across US time zones on systems used beyond demos and notebooks.",
  },
];

export const recruiterLinks = [
  { label: "GitHub", href: personal.github, external: true, download: false },
  { label: "LinkedIn", href: personal.linkedin, external: true, download: false },
  { label: "Email", href: `mailto:${personal.email}`, external: false, download: false },
  { label: "WhatsApp", href: personal.whatsapp, external: true, download: false },
];

export const navSections = [
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];
