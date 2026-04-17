import { useEffect, useMemo, useState } from "react";
import HeroSection      from "../pages/Home/HeroSection";
import ExperienceSection from "../pages/Experience/ExperienceSection";
import ProjectsSection   from "../pages/Projects/ProjectsSection";
import SkillsSection     from "../pages/Skills/SkillsSection";
import AboutSection      from "../pages/About/AboutSection";
import ContactSection    from "../pages/Contact/ContactSection";
import Navbar            from "../components/TopNav/Navbar";
import { personal }      from "../pages/Home/personal";
import type { ThemePreference } from "../components/TopNav/ThemeToggle";

const THEME_STORAGE_KEY = "portfolio-theme-preference";

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

const MainLayout: React.FC = () => {
  const [themePreference, setThemePreference] = useState<ThemePreference>("light");
  const [systemPrefersDark, setSystemPrefersDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as ThemePreference | null;
    if (stored === "light" || stored === "dark" || stored === "system") {
      setThemePreference(stored);
    }

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = (event?: MediaQueryListEvent) => {
      setSystemPrefersDark(event ? event.matches : media.matches);
    };

    syncSystemTheme();
    media.addEventListener("change", syncSystemTheme);
    return () => media.removeEventListener("change", syncSystemTheme);
  }, []);

  const resolvedTheme = useMemo<"light" | "dark">(
    () =>
      themePreference === "system"
        ? systemPrefersDark
          ? "dark"
          : "light"
        : themePreference,
    [systemPrefersDark, themePreference]
  );

  useEffect(() => {
    window.localStorage.setItem(THEME_STORAGE_KEY, themePreference);
    document.documentElement.classList.remove("theme-light", "theme-dark");
    document.documentElement.classList.add(
      resolvedTheme === "dark" ? "theme-dark" : "theme-light"
    );
    document.documentElement.style.colorScheme = resolvedTheme;
  }, [resolvedTheme, themePreference]);

  const toggleTheme = () => {
    setThemePreference((current) =>
      current === "light" ? "dark" : current === "dark" ? "system" : "light"
    );
  };

  return (
    <div className="bg-slate-50 min-h-screen transition-colors duration-300">
      <Navbar
        themePreference={themePreference}
        resolvedTheme={resolvedTheme}
        onToggleTheme={toggleTheme}
      />
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
};

export default MainLayout;
