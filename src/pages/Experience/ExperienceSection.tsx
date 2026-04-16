import { motion } from "framer-motion";
import { experiences } from "./experienceData";

const METRICS = ["<1s", "~98%", "~92%", "92%+", "60%", "65%", "99%", "95%", "50%", "3.4%", "2.3%", "20+"];

function HighlightedBullet({ text }: { text: string }) {
  const pattern = new RegExp(
    `(${METRICS.map((m) => m.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`
  );
  const parts = text.split(pattern);
  return (
    <li className="text-sm text-slate-500 pl-4 relative leading-relaxed">
      <span className="absolute left-0 top-[5px] text-indigo-400 text-xs">→</span>
      {parts.map((part, i) =>
        METRICS.includes(part) ? (
          <strong key={i} className="text-slate-800 font-medium">{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </li>
  );
}

const ExperienceSection: React.FC = () => (
  <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" />
        Work History
      </p>
      <h2
        className="text-slate-900 mb-3"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        Experience
      </h2>
      <p className="text-slate-500 text-base max-w-lg">
        Production systems shipped — not just notebooks or proofs of concept.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: idx * 0.06 }}
          viewport={{ once: true }}
          className={`relative bg-white border rounded-2xl p-7 hover:shadow-md transition-all duration-200 group overflow-hidden
            ${exp.current ? "border-indigo-200 hover:border-indigo-300" : "border-slate-200 hover:border-slate-300"}`}
        >
          {/* left accent */}
          <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-l-2xl transition-colors duration-200
            ${exp.current ? "bg-indigo-500" : "bg-slate-200 group-hover:bg-indigo-400"}`}
          />

          {/* header: logo + company + date */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Company logo */}
              {exp.logo && (
                <div className="w-10 h-10 rounded-lg border border-slate-100 bg-slate-50 flex items-center justify-center shrink-0 overflow-hidden p-1">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>
              )}
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-[15px] font-semibold text-slate-900 leading-tight">{exp.company}</h3>
                  {exp.current && (
                    <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 border border-indigo-200 shrink-0">
                      ● Current
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-indigo-500 mt-0.5">{exp.role}</p>
              </div>
            </div>
            <span className="font-mono text-xs text-slate-400 whitespace-nowrap shrink-0">{exp.duration}</span>
          </div>

          {exp.location && <p className="text-xs text-slate-400 mb-4 ml-13">{exp.location}</p>}
          {!exp.location && <div className="mb-3" />}

          {/* bullets */}
          <ul className="space-y-2 mb-5">
            {exp.bullets.map((b, i) => <HighlightedBullet key={i} text={b} />)}
          </ul>

          {/* tags */}
          <div className="flex flex-wrap gap-1.5">
            {exp.tags.map((t) => (
              <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200">
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
