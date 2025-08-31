import { NavLink } from "react-router-dom";
import { useState } from "react";
import type { NavLinkType } from "../../types";

interface SidebarLinkProps {
  link: NavLinkType;
  isActive: boolean;
  onClick: () => void;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({
  link,
  isActive,
  onClick,
}) => {
  const [hover, setHover] = useState(false);

  // Base styles
  const baseClasses =
    "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative my-1.5";
  // 👆 more spacing between links so glow doesn’t clash

  // State styles
  const activeClasses = isActive
    ? "bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700 text-white shadow-lg ring-2 ring-purple-400"
    : hover
    ? "bg-gradient-to-r from-purple-50 to-indigo-100 text-purple-700 shadow-md scale-[1.02]"
    : "text-gray-600 hover:text-purple-700";

  return (
    <NavLink
      to={link.path}
      className={`${baseClasses} ${activeClasses}`}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <link.Icon
        className={`w-5 h-5 transition-transform duration-300 ${
          hover ? "scale-110 text-purple-600" : ""
        } ${isActive ? "text-white" : "text-gray-500"}`}
      />

      {/* Label */}
      <span
        className={`tracking-wide transition-all duration-300 ${
          isActive ? "text-white" : hover ? "text-purple-700" : "text-gray-600"
        }`}
      >
        {link.label}
      </span>

      {/* Hover Glow Accent (AI-ish neon pulse) */}
      {hover && !isActive && (
        <span className="absolute inset-0 rounded-xl ring-1 ring-purple-300 opacity-60 animate-pulse"></span>
      )}

      {/* Active glow border */}
      {isActive && (
        <span className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 opacity-30 blur-xl"></span>
      )}
    </NavLink>
  );
};

export default SidebarLink;
