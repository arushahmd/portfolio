// src/pages/SkillCard.tsx
import { motion } from "framer-motion";
import type { Skill } from "./skillsData";

const MotionDiv = motion.div;

// SkillCard.tsx
const SkillCard: React.FC<Skill> = ({ icon: Icon }) => {
  // name
  return (
    <MotionDiv
      className="flex items-center justify-center rounded-lg
                 bg-white shadow-[0_6px_20px_rgba(109,40,217,0.25)]
                 hover:shadow-[0_10px_28px_rgba(109,40,217,0.35)]
                 transition-all duration-300 cursor-pointer group w-16 h-16"
      whileHover={{ scale: 1.15 }}
    >
      <Icon className="w-8 h-8 text-gray-700 group-hover:text-[#6D28D9] transition-colors" />
      {/* <p className="mt-2 text-sm font-medium text-gray-600 group-hover:text-gray-900">
        {name}
      </p> */}
    </MotionDiv>
  );
};

export default SkillCard;
