import { FiGrid, FiMonitor, FiSun } from "react-icons/fi";

export type ThemePreference = "signal" | "light" | "system";

interface ThemeToggleProps {
  preference: ThemePreference;
  onToggle: () => void;
}

const LABELS: Record<ThemePreference, string> = {
  signal: "Signal",
  light: "Light",
  system: "System",
};

const ICONS: Record<ThemePreference, React.ReactNode> = {
  signal: <FiGrid className="w-4 h-4" />,
  light: <FiSun className="w-4 h-4" />,
  system: <FiMonitor className="w-4 h-4" />,
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ preference, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      type="button"
      title={`Theme: ${LABELS[preference]}`}
      aria-label={`Theme: ${LABELS[preference]}`}
      className="flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200 bg-white/80 text-slate-600 hover:text-indigo-600 hover:border-indigo-300 transition-all duration-150 cursor-pointer"
    >
      {ICONS[preference]}
      <span className="hidden sm:inline text-sm font-medium">{LABELS[preference]}</span>
    </button>
  );
};

export default ThemeToggle;
