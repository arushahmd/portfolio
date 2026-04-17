import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "./experienceData";
import ExperienceItem from "./ExperienceItem";

const Experience: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="relative bg-gray-50 py-20 px-4 md:px-16 md:py-0">
      {/* Heading */}
      <div className="relative mb-12 flex flex-col items-start">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent
                     bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Optional gradient underline */}
        <motion.div
          className="w-47 h-1 mt-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Timeline */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative border-l-2 border-purple-600 ml-4 md:ml-8 origin-top"
      >
        {experiences.map((exp: any, idx: number) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <ExperienceItem
              experience={exp}
              idx={idx}
              expandedIndex={expandedIndex}
              handleToggle={handleToggle}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
