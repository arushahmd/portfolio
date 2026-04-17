import HeroSection      from "../pages/Home/HeroSection";
import ExperienceSection from "../pages/Experience/ExperienceSection";
import ProjectsSection   from "../pages/Projects/ProjectsSection";
import SkillsSection     from "../pages/Skills/SkillsSection";
import AboutSection      from "../pages/About/AboutSection";
import ContactSection    from "../pages/Contact/ContactSection";
import Navbar            from "../components/TopNav/Navbar";
import { personal }      from "../pages/Home/personal";

const Divider = () => (
  <div className="max-w-6xl mx-auto px-6">
    <div className="h-px bg-slate-200" />
  </div>
);

const Footer = () => (
  <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
    <span className="font-mono text-xs text-slate-400">
      © {new Date().getFullYear()} {personal.name} · Built with React + Vite
    </span>
    <div className="flex gap-5">
      {[
        { label: "GitHub",   url: personal.github   },
        { label: "LinkedIn", url: personal.linkedin  },
        { label: "Email",    url: `mailto:${personal.email}` },
      ].map((l) => (
        <a
          key={l.label}
          href={l.url}
          target={l.url.startsWith("mailto") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className="font-mono text-xs text-slate-400 hover:text-indigo-600 transition-colors"
        >
          {l.label}
        </a>
      ))}
    </div>
  </footer>
);

const MainLayout: React.FC = () => (
  <div className="bg-slate-50 min-h-screen">
    <Navbar />
    <HeroSection />
    <Divider />
    <ExperienceSection />
    <Divider />
    <ProjectsSection />
    <Divider />
    <SkillsSection />
    <Divider />
    <AboutSection />
    <Divider />
    <ContactSection />
    <Divider />
    <Footer />
  </div>
);

export default MainLayout;
