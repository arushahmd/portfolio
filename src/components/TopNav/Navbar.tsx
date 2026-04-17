import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { personal, navSections } from "../../pages/Home/personal";
import profileImg from "../../assets/profile.png";
import ThemeToggle, { type ThemePreference } from "./ThemeToggle";

interface NavbarProps {
  themePreference: ThemePreference;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  themePreference,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled]   = useState(false);
  const [activeId, setActiveId]   = useState("");
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      let current = "";
      navSections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 90) current = id;
      });
      setActiveId(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 68, behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
            : "bg-transparent"
        }`}
        style={{ height: "64px" }}
      >
        <div className="max-w-6xl mx-auto px-6 h-full flex items-center gap-3">

          {/* Profile avatar + logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="flex items-center gap-2.5 mr-auto group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-indigo-100 group-hover:ring-indigo-300 transition-all shrink-0">
              <img src={profileImg} alt="Aroosh Ahmad" className="w-full h-full object-cover" />
            </div>
            <span className="font-mono text-sm font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors tracking-tight">
              {personal.name.split(" ")[0].toLowerCase()}
              <span className="text-indigo-600">.</span>
              {personal.name.split(" ")[1].toLowerCase()}
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navSections.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`relative px-3 py-1.5 text-sm rounded-md transition-all duration-150 cursor-pointer ${
                  activeId === id
                    ? "text-indigo-600 font-medium"
                    : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                {label}
                {activeId === id && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-indigo-50 rounded-md -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <ThemeToggle
            preference={themePreference}
            onToggle={onToggleTheme}
          />

          {/* Hire Me CTA */}
          <button
            onClick={() => scrollTo("contact")}
            className="ml-2 hidden md:flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-150 hover:-translate-y-0.5 cursor-pointer"
          >
            Hire Me
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-slate-700 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-200 shadow-lg md:hidden"
        >
          <div className="flex flex-col p-4 gap-1">
            <div className="mb-2">
              <ThemeToggle
                preference={themePreference}
                onToggle={onToggleTheme}
              />
            </div>
            {navSections.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-left px-4 py-2.5 rounded-lg text-sm transition-colors cursor-pointer ${
                  activeId === id
                    ? "bg-indigo-50 text-indigo-600 font-medium"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="mt-2 w-full py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg cursor-pointer"
            >
              Hire Me →
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
