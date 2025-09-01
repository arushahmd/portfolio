import { motion, AnimatePresence } from "framer-motion";
import type { ExperienceItemType } from "./experienceData";

interface Props {
  experience: ExperienceItemType;
  idx: number;
  expandedIndex: number | null;
  handleToggle: (idx: number) => void;
}

const ExperienceItem: React.FC<Props> = ({
  experience,
  idx,
  expandedIndex,
  handleToggle,
}) => {
  const isExpanded = expandedIndex === idx;

  return (
    <div className="mb-12 ml-6 relative">
      {/* Dot cutting the line */}
      <div className="absolute -left-5 md:-left-6 top-2 w-5 h-5 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full border-2 border-gray-50 z-10"></div>

      {/* Content container */}
      <div className="text-left">
        <button
          onClick={() => handleToggle(idx)}
          className="w-full text-left focus:outline-none cursor-pointer"
        >
          <h3 className="text-lg md:text-xl font-semibold text-purple-600 flex items-center justify-between group">
            {experience.company}
            <span className="text-sm text-gray-500 ml-2">
              {experience.duration}
            </span>
          </h3>
          <p className="text-gray-700 italic text-sm md:text-md mb-2">
            {experience.role}
          </p>
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="text-sm text-cyan-400 font-medium mt-1 cursor-pointer group-hover:underline"
          >
            {isExpanded ? "Show Less ▲" : "Explore More ▼"}
          </motion.div>
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="list-disc list-inside text-gray-600 space-y-1 mt-2"
            >
              {experience.achievements.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ExperienceItem;
