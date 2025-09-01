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
    <div className="relative bg-gray-50 py-20 px-4 md:px-16">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 text-left"
      >
        Projects
      </motion.h2>

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
