import { motion } from "framer-motion";
import about from "./aboutData";

const AboutSection: React.FC = () => (
  <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" />
        Background
      </p>
      <h2
        className="text-slate-900"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        About
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">
      {/* Left */}
      <div>
        {about.bio.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-base leading-relaxed mb-4"
          >
            {para}
          </motion.p>
        ))}

        {/* Traits */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-3 mt-8"
        >
          {about.traits.map((t, i) => (
            <div key={i} className="about-trait-card bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-200 transition-colors">
              <div className="text-xl mb-2">{t.icon}</div>
              <div className="text-sm font-semibold text-slate-900 mb-1">{t.title}</div>
              <div className="text-xs text-slate-500 leading-relaxed">{t.desc}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right sidebar */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        {/* Education */}
        <div className="about-side-card bg-white border border-slate-200 rounded-2xl p-5">
          <p className="font-mono text-[10px] text-indigo-600 uppercase tracking-widest mb-4">Education</p>
          {about.education.map((e, i) => (
            <div key={i} className={`py-3 ${i < about.education.length - 1 ? "border-b border-slate-100" : ""}`}>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="text-sm font-medium text-slate-900 leading-snug">{e.degree}</div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">{e.school}</div>
                </div>
                <span className="font-mono text-[10px] text-indigo-500 shrink-0">{e.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="about-side-card bg-white border border-slate-200 rounded-2xl p-5">
          <p className="font-mono text-[10px] text-indigo-600 uppercase tracking-widest mb-4">Certifications</p>
          {about.certifications.map((c, i) => (
            <div key={i} className={`py-3 ${i < about.certifications.length - 1 ? "border-b border-slate-100" : ""}`}>
              <div className="text-sm font-medium text-slate-900 leading-snug">{c.name}</div>
              <div className="font-mono text-xs text-slate-400 mt-0.5">{c.issuer}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
