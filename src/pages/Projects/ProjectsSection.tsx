import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./projectsData";
import type { Project } from "./projectsData";

const ProjectCard: React.FC<{ project: Project; idx: number }> = ({ project, idx }) => {
  const [imgIdx, setImgIdx] = useState(0);
  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: idx * 0.06 }}
      viewport={{ once: true }}
      className={`project-card bg-white border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-200 group flex flex-col
        ${project.featured ? "border-indigo-200" : "border-slate-200 hover:border-slate-300"}`}
    >
      {/* top accent for featured */}
      {project.featured && (
        <div className="h-0.5 bg-gradient-to-r from-indigo-500 to-indigo-300 shrink-0" />
      )}

      {/* Image carousel */}
      {hasImages && (
        <div className="relative h-44 bg-slate-100 overflow-hidden shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={imgIdx}
              src={project.images![imgIdx]}
              alt={project.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          {project.images!.length > 1 && (
            <>
              <button
                onClick={() => setImgIdx((i) => (i - 1 + project.images!.length) % project.images!.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white text-sm flex items-center justify-center hover:bg-black/60 transition-colors"
              >‹</button>
              <button
                onClick={() => setImgIdx((i) => (i + 1) % project.images!.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 text-white text-sm flex items-center justify-center hover:bg-black/60 transition-colors"
              >›</button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                {project.images!.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === imgIdx ? "bg-white" : "bg-white/40"}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* badge + metric */}
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] text-indigo-500 uppercase tracking-wide">{project.badge}</span>
          {project.metric && (
            <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200">
              {project.metric}
            </span>
          )}
        </div>

        <h3
          className="text-slate-900 font-semibold mb-2"
          style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "17px" }}
        >
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200">
              {t}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="text-xs text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              ↗ GitHub
            </a>
          )}
          {project.website && (
            <a href={project.website} target="_blank" rel="noopener noreferrer"
              className="text-xs text-indigo-600 font-medium flex items-center gap-1 hover:gap-2 transition-all">
              ↗ Live
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" />
        Selected Work
      </p>
      <h2
        className="text-slate-900 mb-3"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        Projects
      </h2>
      <p className="text-slate-500 text-base max-w-lg">End-to-end production systems. Every metric is real.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {projects.map((proj, idx) => (
        <ProjectCard key={idx} project={proj} idx={idx} />
      ))}
    </div>
  </section>
);

export default ProjectsSection;
