import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";
import { personal } from "../Home/personal";

const ResumeButton: React.FC = () => {
  return (
    <motion.a
      href={personal.resumeUrl}
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
