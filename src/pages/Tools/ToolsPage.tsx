import { motion } from "framer-motion";
import ToolCard from "./ToolCard";
import { toolsData } from "./toolsData";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const ToolsPage: React.FC = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-20 px-4 md:px-16"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-left"
        variants={item}
      >
        Tools I Use
      </motion.h1>

      {toolsData.map((category, idx) => (
        <motion.section key={idx} className="mb-12" variants={item}>
          <motion.h2
            className="text-xl md:text-2xl font-semibold text-gray-700 mb-6 relative"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            {category.category}
            <span className="absolute left-0 -bottom-2 w-16 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full"></span>
          </motion.h2>

          {/* Grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {category.tools.map((tool, i) => (
              <motion.div key={i} variants={item}>
                <ToolCard {...tool} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </motion.div>
  );
};

export default ToolsPage;
