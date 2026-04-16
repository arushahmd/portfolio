// src/pages/Home/personal.ts
// ─── Edit this file to update all personal info across the portfolio ───────

export const personal = {
  name:      "Aroosh Ahmad",
  title:     "AI/ML Engineer",
  email:     "arooshahmda.data@gmail.com",
  phone:     "+92-319-4040067",
  location:  "Lahore, Pakistan",
  github:    "https://github.com/arushahmd",
  linkedin:  "https://www.linkedin.com/in/arushahmd/",
  whatsapp:  "https://wa.me/923194040067",
  instagram: "https://instagram.com/arus_hahmd",
  // resolves correctly on both localhost and /portfolio/ GitHub Pages base
  resumeUrl: `${import.meta.env.BASE_URL}Aroosh_Ahmad_AI_Engineer.pdf`,
  openToWork: true,
};

export const metrics = [
  { value: "~98%", label: "OCR Accuracy"  },
  { value: "<1s",  label: "Voice Latency" },
  { value: "3+",   label: "Yrs Shipped"   },
  { value: "99%",  label: "Effort Saved"  },
];

export const navSections = [
  { label: "Experience", id: "experience" },
  { label: "Projects",   id: "projects"   },
  { label: "Skills",     id: "skills"     },
  { label: "About",      id: "about"      },
  { label: "Contact",    id: "contact"    },
];
