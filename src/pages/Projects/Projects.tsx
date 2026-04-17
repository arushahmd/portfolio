import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "./projectsData";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Projects: React.FC = () => {
  return (
    <div className="relative bg-gray-50 px-4 md:px-16">
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
          Projects
        </motion.h2>

        {/* Optional gradient underline */}
        <motion.div
          className="w-35 h-1 mt-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>

      {/* Grid with staggered animation */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-y-10 text-left"
      >
        {projects.map((proj, idx) => (
          <motion.div key={idx} variants={item}>
            <ProjectCard project={proj} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
