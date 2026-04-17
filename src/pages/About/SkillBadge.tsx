import { motion } from "framer-motion";

interface SkillBadgeProps {
  skill: string;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 4px 12px rgba(109,40,217,0.3)" }}
      className="px-3 py-1 rounded-full text-white text-xs font-medium bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 cursor-default"
    >
      {skill}
    </motion.div>
  );
};

export default SkillBadge;
