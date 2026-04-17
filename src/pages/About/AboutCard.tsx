import { motion } from "framer-motion";

interface AboutCardProps {
  title: string;
  description: string;
}

const AboutCard: React.FC<AboutCardProps> = ({ title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(109,40,217,0.2)" }}
      className="bg-white rounded-xl p-4 md:p-6 shadow-md cursor-pointer w-50 text-left"
    >
      <h3 className="text-purple-600 font-semibold text-sm md:text-base mb-1">
        {title}
      </h3>
      <p className="text-gray-600 text-xs md:text-sm">{description}</p>
    </motion.div>
  );
};

export default AboutCard;
