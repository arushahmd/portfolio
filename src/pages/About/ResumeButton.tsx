import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

const ResumeButton: React.FC = () => {
  return (
    <motion.a
      href={`${import.meta.env.BASE_URL}Aroosh_Ahmad_AI_Engineer.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, boxShadow: "0 4px 14px rgba(109,40,217,0.4)" }}
      className="flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 cursor-pointer transition"
    >
      <FiDownload className="w-4 h-4" />
      View Resume
    </motion.a>
  );
};

export default ResumeButton;
