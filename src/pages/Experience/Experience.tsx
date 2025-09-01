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
    <div className="relative bg-gray-50 py-20 px-4 md:px-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-left"
      >
        Experience
      </motion.h2>

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
