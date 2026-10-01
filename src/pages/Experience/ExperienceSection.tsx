import { motion } from "framer-motion";
import { experiences } from "./experienceData";

const ExperienceSection: React.FC = () => (
  <section id="experience" aria-labelledby="experience-heading" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" aria-hidden="true" />
        Work History
      </p>
      <h2
        id="experience-heading"
        className="text-slate-900 mb-3"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        Experience
      </h2>
      <p className="text-slate-500 text-base max-w-xl">
        Selected roles across real-time voice, language technology, computer vision, and applied AI systems.
      </p>
    </motion.div>

    <div className="max-w-5xl space-y-4">
      {experiences.map((experience, idx) => (
        <motion.article
          key={`${experience.company}-${experience.role}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: idx * 0.06 }}
          viewport={{ once: true }}
          className="relative w-full bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-md hover:border-indigo-200 transition-all duration-200 group overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl bg-slate-200 group-hover:bg-indigo-400 transition-colors duration-200" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-[15px] font-semibold text-slate-900 leading-tight">{experience.company}</h3>
              <p className="font-mono text-xs text-indigo-500 mt-1">{experience.role}</p>
            </div>
            <span className="font-mono text-xs text-slate-400 whitespace-nowrap">{experience.duration}</span>
          </div>

          <ul className="space-y-2 mb-5">
            {experience.bullets.map((bullet) => (
              <li key={bullet} className="text-sm text-slate-500 pl-4 relative leading-relaxed">
                <span className="absolute left-0 top-[5px] text-indigo-400 text-xs" aria-hidden="true">→</span>
                {bullet}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-1.5">
            {experience.tags.map((tag) => (
              <span key={tag} className="font-mono text-xs px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200">
                {tag}
              </span>
            ))}
            {experience.link && (
              <a href={experience.link} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs text-indigo-600 hover:underline">
                Related work ↗
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
