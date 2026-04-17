// src/pages/SkillsPage.tsx
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skillsData } from "./skillsData";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// SkillsPage.tsx
const SkillsPage: React.FC = () => {
  return (
    <motion.div
      className="py-20 px-6 md:px-20 md:pt-0 flex flex-col"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Section Heading */}
      {/* Heading */}
      <div className="relative mb-6 flex flex-col items-start">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent
                     bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>

        {/* Optional gradient underline */}
        <motion.div
          className="w-23 h-1 mt-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Categories in responsive grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {skillsData.map((category, idx) => (
          <motion.div key={idx} variants={item}>
            <h2 className="text-xl text-left font-semibold text-gray-800 mb-3">
              {category.category}
            </h2>
            <div className="flex flex-wrap gap-5">
              {category.skills.map((skill, i) => (
                <SkillCard key={i} {...skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillsPage;
