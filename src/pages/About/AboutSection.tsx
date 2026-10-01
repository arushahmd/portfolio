import { motion } from "framer-motion";
import about from "./aboutData";

const AboutSection: React.FC = () => (
  <section id="about" aria-labelledby="about-heading" className="py-24 px-6 max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-14"
    >
      <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-2 flex items-center gap-2">
        <span className="w-5 h-px bg-indigo-600 inline-block" aria-hidden="true" />
        Background
      </p>
      <h2
        id="about-heading"
        className="text-slate-900"
        style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: "clamp(36px,5vw,52px)", fontWeight: 400 }}
      >
        About
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-[1fr_320px] gap-12 items-start">
      <div>
        {about.bio.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-slate-500 text-base leading-relaxed mb-4"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        viewport={{ once: true }}
        className="flex flex-col gap-4"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-4">Education</p>
          {about.education.map((education, index) => (
            <div key={education.degree} className={`py-3 ${index < about.education.length - 1 ? "border-b border-slate-100" : ""}`}>
              <div className="flex justify-between items-start gap-2">
                <div>
                  <div className="text-sm font-medium text-slate-900 leading-snug">{education.degree}</div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">{education.school}</div>
                </div>
                <span className="font-mono text-xs text-indigo-500 shrink-0">{education.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-5">
          <p className="font-mono text-xs text-indigo-600 uppercase tracking-widest mb-4">Certifications</p>
          {about.certifications.map((certification, index) => (
            <div key={certification.name} className={`py-3 ${index < about.certifications.length - 1 ? "border-b border-slate-100" : ""}`}>
              <a
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-900 leading-snug hover:text-indigo-600 transition-colors"
              >
                {certification.name} ↗
              </a>
              <div className="font-mono text-xs text-slate-400 mt-0.5">{certification.issuer}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
