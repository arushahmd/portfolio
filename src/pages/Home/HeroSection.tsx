import { motion } from "framer-motion";
import { personal, metrics } from "./personal";
import profileImg from "../../assets/profile.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto"
    >
      {/* Profile card + open-to-work */}
      <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-8">
        {/* Avatar */}
        <div className="relative shrink-0">
          <div className="w-16 h-16 rounded-2xl overflow-hidden ring-2 ring-indigo-100 shadow-md">
            <img src={profileImg} alt="Aroosh Ahmad" className="w-full h-full object-cover" />
          </div>
          {/* Online dot */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white" />
        </div>

        {/* Status badge */}
        <div>
          <div className="text-sm font-semibold text-slate-900 mb-0.5">{personal.name}</div>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Open to remote · AI/ML Engineer · Lahore → US Timezones
          </span>
        </div>
      </motion.div>

      {/* Heading */}
      <motion.h1
        {...fadeUp(0.1)}
        className="leading-none text-slate-900 mb-3"
        style={{
          fontFamily: "'Instrument Serif', Georgia, serif",
          fontSize: "clamp(56px, 10vw, 96px)",
          fontWeight: 400,
        }}
      >
        {personal.name.split(" ")[0]}
        <br />
        <em className="text-indigo-600 not-italic">{personal.name.split(" ")[1]}.</em>
      </motion.h1>

      {/* Role */}
      <motion.p {...fadeUp(0.2)} className="text-lg md:text-xl text-slate-500 font-light mb-8">
        <span className="text-slate-800 font-medium">Full Stack AI Developer</span>
        {" · "}NLP{" · "}LLMs{" · "}Computer Vision{" · "}Voice AI
      </motion.p>

      {/* Tagline */}
      <motion.p
        {...fadeUp(0.3)}
        className="text-base md:text-lg text-slate-500 max-w-2xl leading-relaxed mb-12 border-l-2 border-indigo-400 pl-5"
      >
        I build{" "}
        <strong className="text-slate-800 font-medium">production-grade AI systems</strong>
        {" "}— not demos. From real-time voice ordering at{" "}
        <strong className="text-slate-800 font-medium">Cygnus Payments</strong> (Virginia, USA) to
        OCR engines deployed at the{" "}
        <strong className="text-slate-800 font-medium">Center of Language Engineering</strong>,
        I take AI from research to shipped.
      </motion.p>

      {/* Metrics */}
      <motion.div
        {...fadeUp(0.4)}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mb-12"
      >
        {metrics.map((m) => (
          <div
            key={m.label}
            className="bg-white border border-slate-200 rounded-xl p-4 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-200 group cursor-default"
          >
            <div
              className="text-3xl text-indigo-600 leading-none mb-1.5 group-hover:text-indigo-700 transition-colors"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontWeight: 400 }}
            >
              {m.value}
            </div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wide">{m.label}</div>
          </div>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-3">
        <button
          onClick={() => scrollTo("projects")}
          className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200 cursor-pointer"
        >
          View Projects
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </button>
        <a
          href={personal.resumeUrl}
          download
          className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-lg transition-all duration-150"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 2v8M4 7l4 4 4-4M2 13h12" />
          </svg>
          Resume
        </a>
        <button
          onClick={() => scrollTo("contact")}
          className="flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer"
        >
          Let's Talk
        </button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
