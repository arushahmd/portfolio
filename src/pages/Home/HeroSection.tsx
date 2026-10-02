import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import { hero, personal, recruiterLinks } from "./personal";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 1, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.35, delay, ease: "easeOut" },
});

const iconMap = {
  GitHub: <FiGithub className="w-4 h-4" aria-hidden="true" />,
  LinkedIn: <FiLinkedin className="w-4 h-4" aria-hidden="true" />,
  Email: <FiMail className="w-4 h-4" aria-hidden="true" />,
};

const HeroSection: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="hero-stage relative flex flex-col px-6 pt-20 pb-12 md:pt-24 md:pb-14 max-w-6xl mx-auto overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute right-[-6%] top-28 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute left-[28%] top-44 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
      </div>

      <motion.div {...fadeUp(0)} className="mb-5">
        <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
          Greater Toronto Area, Canada
        </span>
      </motion.div>

      <motion.div {...fadeUp(0.06)} className="mb-4 max-w-4xl">
        <div className="font-mono text-xs uppercase tracking-[0.28em] text-indigo-500 mb-4">
          Applied AI · Reproducible systems · Clear engineering
        </div>
        <h1
          id="hero-heading"
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

      <motion.div {...fadeUp(0.12)} className="mb-6 max-w-4xl">
        <p className="text-2xl md:text-[30px] text-slate-900 font-medium tracking-tight mb-2">
          {hero.headline}
        </p>
        <p className="text-base md:text-lg text-slate-500">{hero.subheadline}</p>
      </motion.div>

      <motion.div {...fadeUp(0.18)} className="max-w-4xl mb-8">
        <p className="text-base md:text-lg text-slate-500 leading-relaxed border-l-2 border-indigo-400 pl-5">
          {hero.summary}
        </p>
      </motion.div>

      <motion.div {...fadeUp(0.24)} className="flex flex-wrap gap-3 mb-4">
        <button
          onClick={() => scrollTo("work")}
          className="hero-primary-cta flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-200 cursor-pointer"
        >
          View Flagship Work
          <FiArrowRight className="w-4 h-4" aria-hidden="true" />
        </button>
        <button
          onClick={() => scrollTo("contact")}
          className="hero-secondary-cta flex items-center gap-2 px-6 py-3 bg-white border border-slate-300 hover:border-indigo-400 text-slate-700 hover:text-indigo-600 text-sm font-medium rounded-lg transition-all duration-150 cursor-pointer"
        >
          Get in Touch
        </button>
      </motion.div>

      <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-2.5">
        {recruiterLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? "_blank" : undefined}
            rel={link.external ? "noopener noreferrer" : undefined}
            className="hero-chip inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 hover:bg-indigo-50/50 transition-all duration-150"
          >
            {iconMap[link.label as keyof typeof iconMap]}
            {link.label}
          </a>
        ))}
      </motion.div>

    </section>
  );
};

export default HeroSection;
