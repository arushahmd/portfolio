import { motion } from "framer-motion";
import { skillGroups } from "./skillsData";

const SkillsSection: React.FC = () => (
  <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" />
        Capabilities
      </p>
      <h2
        className="text-slate-900 mb-3"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        Skills
      </h2>
      <p className="text-slate-500 text-base max-w-lg">
        Tools deployed in production — not just in tutorials.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {skillGroups.map((group, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: idx * 0.08 }}
          viewport={{ once: true }}
          className="skills-card bg-white border border-slate-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-sm transition-all duration-200"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-base shrink-0">
              {group.icon}
            </div>
            <h3 className="text-sm font-semibold text-slate-900">{group.category}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {group.chips.map((chip) => (
              <span
                key={chip}
                className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-slate-200 bg-slate-50 text-slate-500 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-150 cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
