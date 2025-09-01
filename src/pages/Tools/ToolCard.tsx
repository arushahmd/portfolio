// src/pages/Tools/ToolCard.tsx
import { motion } from "framer-motion";
import type { ToolItem } from "./toolsData";
import { FaStar, FaCrown, FaMedal } from "react-icons/fa";
import type { JSX } from "react";

type Level = "specialist" | "expert" | "intermediate" | "beginner";

const levelFrom = (p: number): Level =>
  p >= 90
    ? "specialist"
    : p >= 80
    ? "expert"
    : p >= 60
    ? "intermediate"
    : "beginner";

// Subtle but distinct colors (low saturation, slightly muted)
const levelMeta: Record<
  Level,
  {
    bg: string;
    ring: string;
    badge: string;
    text: string;
    label: string;
    icon: JSX.Element;
  }
> = {
  specialist: {
    bg: "from-purple-600 via-indigo-500 to-cyan-400",
    ring: "ring-purple-400/40",
    badge: "bg-purple-600 text-white",
    text: "text-white",
    label: "Specialist",
    icon: <FaCrown className="text-purple-300 w-4 h-4" />,
  },
  expert: {
    bg: "from-indigo-600 via-purple-600 to-cyan-400",
    ring: "ring-indigo-400/40",
    badge: "bg-indigo-600 text-white",
    text: "text-white",
    label: "Expert",
    icon: <FaMedal className="text-indigo-300 w-4 h-4" />,
  },
  intermediate: {
    bg: "from-gray-600 via-indigo-500 to-cyan-400",
    ring: "ring-cyan-400/30",
    badge: "bg-cyan-600 text-white",
    text: "text-white",
    label: "Intermediate",
    icon: (
      <div className="flex gap-0.5">
        <FaStar className="text-cyan-300 w-3.5 h-3.5 opacity-75" />
        <FaStar className="text-cyan-300 w-3.5 h-3.5 opacity-75" />
      </div>
    ),
  },
  beginner: {
    bg: "from-gray-400 via-gray-500 to-gray-600",
    ring: "ring-gray-400/40",
    badge: "bg-gray-600 text-white",
    text: "text-white",
    label: "Beginner",
    icon: <FaStar className="text-gray-400 w-4 h-4 opacity-60" />,
  },
};

const MotionDiv = motion.div;

const ToolCard: React.FC<ToolItem> = ({
  name,
  icon: Icon,
  image,
  experience,
  proficiency,
}) => {
  const lvl = levelFrom(proficiency);
  const meta = levelMeta[lvl];

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05, rotateX: 4, rotateY: 4 }}
      className={`
        relative group w-full
        bg-white border border-gray-200 rounded-2xl shadow-sm
        hover:shadow-2xl transition-all duration-300
        ring-0 hover:${meta.ring}
      `}
      style={{
        willChange: "transform",
        transformStyle: "preserve-3d",
      }}
      title={`${name} • ${experience} • ${meta.label}`}
    >
      {/* Hover gradient overlay */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-r ${meta.bg}`}
        style={{ zIndex: 0 }}
      />

      {/* Content row */}
      <div className="relative z-[1] flex items-center gap-4 p-4">
        {/* Logo container with rotation */}
        <motion.div
          whileHover={{ rotate: 360 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className={`
            flex items-center justify-center shrink-0
            w-12 h-12 rounded-xl
            bg-gray-50 border border-gray-200
            group-hover:bg-white/10 group-hover:border-white/20 transition
          `}
        >
          {Icon ? (
            <Icon
              className={`w-7 h-7 text-gray-700 group-hover:text-white transition`}
            />
          ) : image ? (
            <img
              src={image}
              alt={name}
              className="w-7 h-7 object-contain group-hover:brightness-200 transition"
            />
          ) : null}
        </motion.div>

        {/* Title + Proficiency bar */}
        <div className="flex-1 min-w-0">
          <div
            className={`text-sm md:text-base font-semibold text-gray-800 group-hover:${meta.text} truncate`}
          >
            {name}
          </div>

          <div className="mt-2 w-full h-2 rounded-full bg-gray-200/70 overflow-hidden">
            <motion.div
              className="h-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
              initial={{ width: 0 }}
              whileInView={{ width: `${proficiency}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            />
          </div>

          {/* Meta row */}
          <div className="mt-1 flex items-center justify-between text-xs">
            <span
              className={`flex items-center gap-1 text-gray-600 group-hover:${meta.text}`}
            >
              {meta.icon} {meta.label}
            </span>
          </div>
        </div>

        {/* Experience badge */}
        <div
          className={`
            absolute top-2 right-2 px-2 py-0.5 rounded-full text-[11px] font-semibold
            ${meta.badge} shadow-sm
          `}
        >
          {experience}
        </div>
      </div>
    </MotionDiv>
  );
};

export default ToolCard;
