import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "./projectsData";
import { FiGithub, FiExternalLink, FiX } from "react-icons/fi";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [current, setCurrent] = useState(0);
  const [zoomedImg, setZoomedImg] = useState<string | null>(null);

  const nextSlide = () => {
    const len = project.images?.length ?? 0;
    if (len === 0) return;
    setCurrent((prev) => (prev + 1) % len);
  };

  const prevSlide = () => {
    const len = project.images?.length ?? 0;
    if (len === 0) return;
    setCurrent((prev) => (prev === 0 ? len - 1 : prev - 1));
  };
  return (
    <>
      {/* Card */}
      <motion.div
        className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-2xl transition flex flex-col md:flex-row gap-6"
        whileHover={{ y: -5, scale: 1.02 }}
      >
        {/* Left: Info */}
        <div className="flex-1">
          <h3 className="text-xl md:text-2xl font-semibold text-purple-600 mb-2">
            {project.title}
          </h3>

          <p className="text-gray-600 text-sm md:text-base mb-4">
            {project.description}
          </p>

          {/* Tech stack */}
          {project.techStack && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white px-3 py-1 rounded-full text-xs font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4 mt-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline text-sm"
              >
                <FiGithub /> GitHub
              </a>
            ) : (
              <span className="flex items-center gap-1 text-gray-400 text-sm cursor-not-allowed">
                <FiGithub /> GitHub
              </span>
            )}

            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline text-sm"
              >
                <FiExternalLink /> Live
              </a>
            ) : (
              <span className="flex items-center gap-1 text-gray-400 text-sm cursor-not-allowed">
                <FiExternalLink /> Live
              </span>
            )}
          </div>
        </div>

        {/* Right: Slideshow */}
        {project.images && project.images.length > 0 && (
          <div className="flex-1 relative">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-56 md:h-64 rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setZoomedImg(project.images![current])}
            >
              <img
                src={project.images[current]}
                alt={`${project.title} screenshot`}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white px-2 py-1 rounded-full"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white px-2 py-1 rounded-full"
            >
              ›
            </button>

            {/* Dots */}
            <div className="absolute bottom-2 w-full flex justify-center gap-2">
              {project.images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === current ? "bg-cyan-400" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>

      {/* Zoom Modal */}
      <AnimatePresence>
        {zoomedImg && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setZoomedImg(null)}
          >
            <motion.img
              src={zoomedImg}
              alt="Zoomed"
              className="max-w-4xl max-h-[90vh] rounded-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
            <button
              onClick={() => setZoomedImg(null)}
              className="absolute top-6 right-6 text-white text-2xl"
            >
              <FiX />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
