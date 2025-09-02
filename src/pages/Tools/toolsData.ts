// src/pages/toolsData.tsx
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
  SiDocker,
  SiKubernetes,
  SiGit,
  SiReact,
  SiDjango,
  SiTensorflow,
  SiGooglecloud,
  SiLangchain,
  SiOllama,
  SiGooglebigquery,
  SiHuggingface,
  SiOpenai,
  SiMysql,
  SiMongodb,
} from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { VscVscode, VscAzure } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import { BiLogoPostgresql } from "react-icons/bi";

export type ToolItem = {
  name: string;
  icon?: React.ComponentType<{ className?: string }>;
  image?: string;
  experience: string;
  proficiency: number; // 0-100
};

export type ToolsCategory = {
  category: string;
  tools: ToolItem[];
};

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
        experience: "6 mo",
        proficiency: 70,
      },
    ],
  },
  {
    category: "AI & ML / Deep Learning",
    tools: [
      {
        name: "PyTorch",
        icon: SiPytorch,
        experience: "2 yrs",
        proficiency: 90,
      },
      {
        name: "TensorFlow",
        icon: SiTensorflow,
        experience: "1.5 yrs",
        proficiency: 75,
      },
      {
        name: "Scikit-learn",
        icon: SiScikitlearn,
        experience: "2 yrs",
        proficiency: 85,
      },
      { name: "NumPy", icon: SiNumpy, experience: "2 yrs", proficiency: 90 },
      { name: "Pandas", icon: SiPandas, experience: "2 yrs", proficiency: 88 },
      {
        name: "Matplotlib",
        icon: SiTableau,
        experience: "2 yrs",
        proficiency: 80,
      },
      {
        name: "Seaborn",
        icon: SiTableau,
        experience: "1.5 yrs",
        proficiency: 65,
      },
      {
        name: "Transformers",
        icon: SiHuggingface,
        experience: "1 yr",
        proficiency: 78,
      },
      { name: "LLMs", icon: SiOpenai, experience: "1 yr", proficiency: 85 },
      {
        name: "LangChain",
        icon: SiLangchain,
        experience: "6 mo",
        proficiency: 75,
      },
      { name: "Ollama", icon: SiOllama, experience: "6 mo", proficiency: 70 },
      { name: "RAG", icon: FaSearch, experience: "6 mo", proficiency: 70 },
      {
        name: "AI Agents",
        icon: FaSearch,
        experience: "6 mo",
        proficiency: 72,
      },
    ],
  },
  {
    category: "Data Tools / Databases / Cloud",
    tools: [
      {
        name: "BigQuery",
        icon: SiGooglebigquery,
        experience: "6 mo",
        proficiency: 70,
      },
      {
        name: "Vertex AI",
        icon: SiGooglecloud,
        experience: "6 mo",
        proficiency: 70,
      },
      {
        name: "Google Sheets",
        icon: SiGooglesheets,
        experience: "2 yrs",
        proficiency: 90,
      },
      { name: "Tableau", icon: SiTableau, experience: "6 mo", proficiency: 60 },
      {
        name: "SQL (PostgreSQL/MySQL/SQLite)",
        icon: TbSql,
        experience: "1 yr",
        proficiency: 78,
      },
      { name: "MySQL", icon: SiMysql, experience: "1 yr", proficiency: 80 },
      { name: "SQLite", icon: TbSql, experience: "1 yr", proficiency: 80 },
      {
        name: "Postgre SQL",
        icon: BiLogoPostgresql,
        experience: "6 mo",
        proficiency: 70,
      },
      { name: "MongoDB", icon: SiMongodb, experience: "6 mo", proficiency: 65 },
    ],
  },
  {
    category: "IDEs / Dev Tools",
    tools: [
      {
        name: "VSCode",
        icon: VscVscode,
        experience: "3+ yrs",
        proficiency: 95,
      },
      {
        name: "PyCharm",
        icon: SiPycharm,
        experience: "2 yrs",
        proficiency: 85,
      },
      {
        name: "Jupyter Notebook",
        icon: SiJupyter,
        experience: "3+ yrs",
        proficiency: 90,
      },
      { name: "Git", icon: SiGit, experience: "3+ yrs", proficiency: 92 },
      { name: "Docker", icon: SiDocker, experience: "1 yr", proficiency: 75 },
      {
        name: "Kubernetes",
        icon: SiKubernetes,
        experience: "1 yr",
        proficiency: 65,
      },
      {
        name: "Azure ML / Azure",
        icon: VscAzure,
        experience: "1 yr",
        proficiency: 72,
      },
      { name: "AWS", icon: SiGooglecloud, experience: "6 mo", proficiency: 60 },
    ],
  },
  {
    category: "Web / Frameworks",
    tools: [
      { name: "React", icon: SiReact, experience: "1.5 yrs", proficiency: 80 },
      {
        name: "Django",
        icon: SiDjango,
        experience: "1.5 yrs",
        proficiency: 78,
      },
    ],
  },
];
