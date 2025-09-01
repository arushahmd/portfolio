// src/pages/Tools/toolsData.tsx
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPytorch,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTableau,
  SiJupyter,
  SiPycharm,
  SiGooglesheets,
} from "react-icons/si";

export type ToolItem = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  experience: string;
  proficiency: number; // 0-100, used for bar + level
};

export type ToolsCategory = {
  category: string;
  tools: ToolItem[];
};

// 0–59 → beginner
// 60–79 → intermediate
// 80–89 → expert
// 90–100 → specialist

export const toolsData: ToolsCategory[] = [
  {
    category: "Languages",
    tools: [
      { name: "Python", icon: SiPython, experience: "3+ yrs", proficiency: 92 },
      {
        name: "JavaScript",
        icon: SiJavascript,
        experience: "2 yrs",
        proficiency: 82,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        experience: "1.5 yrs",
        proficiency: 76,
      },
    ],
  },
  {
    category: "AI & ML",
    tools: [
      {
        name: "PyTorch",
        icon: SiPytorch,
        experience: "2 yrs",
        proficiency: 86,
      },
      { name: "NumPy", icon: SiNumpy, experience: "3+ yrs", proficiency: 95 },
      { name: "Pandas", icon: SiPandas, experience: "3+ yrs", proficiency: 90 },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
        experience: "2 yrs",
        proficiency: 84,
      },
      {
        name: "NLTK",
        image: "/tools/nltk.png",
        experience: "1 yr",
        proficiency: 72,
      },
      {
        name: "Transformers",
        image: "/tools/huggingface.png",
        experience: "1 yr",
        proficiency: 78,
      },
      {
        name: "Deep Learning",
        image: "/tools/deeplearning.png",
        experience: "2 yrs",
        proficiency: 85,
      },
      {
        name: "Machine Learning",
        image: "/tools/ml.png",
        experience: "3+ yrs",
        proficiency: 90,
      },
      {
        name: "RAG",
        image: "/tools/rag.png",
        experience: "0.5 yr",
        proficiency: 66,
      },
      {
        name: "LLMs",
        image: "/tools/llm.png",
        experience: "1 yr",
        proficiency: 80,
      },
    ],
  },
  {
    category: "Data Tools",
    tools: [
      { name: "Tableau", icon: SiTableau, experience: "1 yr", proficiency: 70 },
      {
        name: "Excel",
        image: "/tools/excel.png",
        experience: "3+ yrs",
        proficiency: 94,
      },
      {
        name: "Google Sheets",
        icon: SiGooglesheets,
        experience: "3+ yrs",
        proficiency: 90,
      },
    ],
  },
  {
    category: "IDEs / Dev Tools",
    tools: [
      {
        name: "VSCode",
        image: "/tools/vscode.png",
        experience: "3+ yrs",
        proficiency: 95,
      },
      {
        name: "PyCharm",
        icon: SiPycharm,
        experience: "2 yrs",
        proficiency: 80,
      },
      {
        name: "Jupyter Notebook",
        icon: SiJupyter,
        experience: "3+ yrs",
        proficiency: 90,
      },
      {
        name: "Azure",
        image: "/tools/azure.png",
        experience: "1 yr",
        proficiency: 72,
      },
    ],
  },
];
