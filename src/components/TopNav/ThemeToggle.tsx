import { FiMonitor, FiMoon, FiSun } from "react-icons/fi";

export type ThemePreference = "light" | "dark" | "system";

interface ThemeToggleProps {
  preference: ThemePreference;
  resolvedTheme: "light" | "dark";
  onToggle: () => void;
}

const LABELS: Record<ThemePreference, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  preference,
  resolvedTheme,
  onToggle,
}) => {
  const icon =
    preference === "system" ? (
      <FiMonitor className="w-4 h-4" />
    ) : resolvedTheme === "dark" ? (
      <FiMoon className="w-4 h-4" />
    ) : (
      <FiSun className="w-4 h-4" />
    );

  return (
    <button
      onClick={onToggle}
      type="button"
      title={`Theme: ${LABELS[preference]}`}
      aria-label={`Theme: ${LABELS[preference]}`}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white/80 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-150 cursor-pointer"
    >
      {icon}
      <span className="hidden sm:inline text-sm font-medium">{LABELS[preference]}</span>
    </button>
  );
};

export default ThemeToggle;
