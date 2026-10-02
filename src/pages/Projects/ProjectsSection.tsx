import { motion } from "framer-motion";
import { projects } from "./projectsData";

const ProjectsSection: React.FC = () => (
  <section id="work" aria-labelledby="work-heading" className="py-20 md:py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 1, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-10 md:mb-12"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" aria-hidden="true" />
        Selected Work
      </p>
      <h2
        id="work-heading"
        className="text-slate-900 mb-3"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        Flagship Work
      </h2>
      <p className="text-slate-500 text-base max-w-xl">
        Public projects that show how I combine model behavior, evaluation, and production-minded Python systems.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((project, idx) => (
        <motion.article
          key={project.github}
          initial={{ opacity: 1, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: idx * 0.06 }}
          viewport={{ once: true }}
          className="project-card bg-white border border-slate-200 rounded-2xl p-5 md:p-6 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 transition-all duration-200 group flex flex-col"
        >
          <div className="flex items-center justify-between gap-3 mb-4">
            <span className="font-mono text-xs text-indigo-500 uppercase tracking-wide">{project.badge}</span>
            <span className="font-mono text-xs text-slate-400">0{idx + 1}</span>
          </div>
          <h3
            className="text-slate-900 font-semibold mb-2"
            style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "21px" }}
          >
            {project.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-4 flex-1">{project.description}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-indigo-600 font-medium inline-flex items-center gap-1 hover:gap-2 transition-all w-fit"
          >
            ↗ View repository
          </a>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ProjectsSection;
