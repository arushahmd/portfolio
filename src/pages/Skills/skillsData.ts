// src/pages/skillsData.ts
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiReact,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiGooglecloud,
  SiLangchain,
  SiHuggingface,
  SiOpenai,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { FaSearch } from "react-icons/fa"; // FaAws
import { VscAzure } from "react-icons/vsc";

export type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL", icon: TbSql },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Django", icon: SiDjango },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "PyTorch", icon: SiPytorch },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "NumPy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "Hugging Face", icon: SiHuggingface },
      { name: "OpenAI", icon: SiOpenai },
      { name: "LangChain", icon: SiLangchain },
      { name: "RAG", icon: FaSearch },
    ],
  },
  {
    category: "Databases & Cloud",
    skills: [
      { name: "MySQL", icon: SiMysql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Google Cloud", icon: SiGooglecloud },
      { name: "Microsoft Azure", icon: VscAzure },
      //   { name: "AWS", icon: FaAws },
    ],
  },
];
