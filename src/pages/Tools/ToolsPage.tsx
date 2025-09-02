import { motion } from "framer-motion";
import ToolCard from "./ToolCard";
import { toolsData } from "./toolsData";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ToolsPage: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center "
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Gradient animated heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-3 text-center bg-clip-text text-transparent
                   bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
        variants={{
          hidden: { opacity: 0, y: -20, scale: 0.95 },
          show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        Tools I Use
      </motion.h1>

      {/* Optional gradient underline */}
      <motion.div
        className="w-45 h-1 mb-8 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-[560px]"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {toolsData.map((tool, idx) => (
          <motion.div key={idx} variants={item} className="flex justify-center">
            <ToolCard {...tool} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ToolsPage;
