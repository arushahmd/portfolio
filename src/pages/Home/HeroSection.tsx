import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMessageSquare,
} from "react-icons/fi";
import { hero, metrics, personal, proofPoints, recruiterLinks } from "./personal";
import compassVoiceImg from "../../assets/project_images/compass-voice.svg";
import menuparserImg from "../../assets/project_images/menuparser.svg";
import flightAssistant from "../../assets/project_images/flight-assistant/flight-assistant.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: "easeOut" },
});

const iconMap = {
  GitHub: <FiGithub className="w-4 h-4" />,
  LinkedIn: <FiLinkedin className="w-4 h-4" />,
  Email: <FiMail className="w-4 h-4" />,
  WhatsApp: <FiMessageSquare className="w-4 h-4" />,
};

const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-stage relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-6%] top-28 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-[28%] top-44 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <div className="pointer-events-none absolute right-6 top-28 hidden xl:block -z-10">
        <motion.div
          initial={{ opacity: 0, y: 16, rotate: -8 }}
          animate={{ opacity: 0.92, y: 0, rotate: -8 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute right-44 top-16 w-64 rounded-2xl border border-white/10 bg-white/70 p-2 shadow-2xl backdrop-blur-md"
        >
          <img
            src={compassVoiceImg}
            alt=""
            className="h-40 w-full rounded-xl object-cover opacity-90"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: 6 }}
          animate={{ opacity: 0.95, y: 0, rotate: 6 }}
          transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
          className="absolute right-6 top-48 w-72 rounded-2xl border border-white/10 bg-white/75 p-2 shadow-2xl backdrop-blur-md"
        >
          <img
            src={menuparserImg}
            alt=""
            className="h-44 w-full rounded-xl object-cover opacity-95"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -3 }}
          animate={{ opacity: 0.8, y: 0, rotate: -3 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="absolute right-16 top-[-8] w-60 rounded-2xl border border-white/10 bg-slate-950/80 p-2 shadow-2xl backdrop-blur-md"
        >
          <img
            src={flightAssistant}
            alt=""
            className="h-36 w-full rounded-xl object-cover opacity-85"
          />
        </motion.div>
      </div>

      <motion.div {...fadeUp(0)} className="mb-6">
        <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Open to remote · AI/ML Engineer · Lahore {"->"} US time zones
        </span>
      </motion.div>

      <motion.div {...fadeUp(0.08)} className="mb-5 max-w-4xl">
        <div className="font-mono text-xs uppercase tracking-[0.28em] text-indigo-500 mb-4">
          Applied ML · Production systems · Shipped impact
        </div>
        <h1
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
        </h1>
      </motion.div>

      <motion.div {...fadeUp(0.16)} className="mb-8 max-w-4xl">
        <p className="text-2xl md:text-[30px] text-slate-900 font-medium tracking-tight mb-3">
          {hero.headline}
        </p>
        <p className="text-base md:text-lg text-slate-500">{hero.subheadline}</p>
      </motion.div>

      <motion.div {...fadeUp(0.24)} className="max-w-4xl mb-12">
        <p className="text-base md:text-lg text-slate-500 leading-relaxed mb-4 border-l-2 border-indigo-400 pl-5">
          {hero.summary}
        </p>
        <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed">
          <span className="text-slate-900 font-medium">Recruiter summary:</span> {hero.recruiterNote}
        </p>
      </motion.div>

      <motion.div
        {...fadeUp(0.32)}
        className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mb-10"
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

      <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-3 mb-5">
        <button
          onClick={() => scrollTo("projects")}
          className="hero-primary-cta flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200 cursor-pointer"
        >
          View Projects
          <FiArrowRight className="w-4 h-4" />
        </button>
        <a
          href={personal.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hero-secondary-cta flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-lg transition-all duration-150"
        >
          <FiDownload className="w-4 h-4" />
          Resume
        </a>
        <button
          onClick={() => scrollTo("contact")}
          className="hero-secondary-cta flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer"
        >
          Let's Talk
        </button>
      </motion.div>

      <motion.div {...fadeUp(0.48)} className="flex flex-wrap gap-2.5 mb-12">
        {recruiterLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            download={link.download}
            target={link.external && !link.href.startsWith("mailto") ? "_blank" : undefined}
            rel={link.external && !link.href.startsWith("mailto") ? "noopener noreferrer" : undefined}
            className="hero-chip inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-150"
          >
            {iconMap[link.label as keyof typeof iconMap]}
            {link.label}
          </a>
        ))}
      </motion.div>

      <motion.div
        {...fadeUp(0.56)}
        className="hero-focus-panel max-w-4xl rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm p-5 md:p-6 mb-12"
      >
        <div className="font-mono text-[11px] uppercase tracking-[0.24em] text-indigo-500 mb-3">
          Current Focus
        </div>
        <p className="text-sm md:text-base text-slate-600 leading-relaxed">{hero.currentFocus}</p>
      </motion.div>

      <motion.div
        {...fadeUp(0.64)}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl"
      >
        {proofPoints.map((point) => (
          <div
            key={point.title}
            className="proof-card rounded-2xl border border-slate-200 bg-white p-5 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-200"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-indigo-500 mb-3">
              {point.eyebrow}
            </div>
            <h3 className="text-slate-900 font-semibold text-lg mb-2">{point.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{point.detail}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroSection;
