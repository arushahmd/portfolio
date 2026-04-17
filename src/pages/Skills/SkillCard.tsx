// src/pages/SkillCard.tsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Skill } from "./skillsData";

const MotionDiv = motion.div;

// SkillCard.tsx
const SkillCard: React.FC<Skill> = ({ name, icon: Icon }) => {
  const [visible, setVisible] = useState(false);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const touchTimeout = useRef<number | null>(null);

  // hide tooltip when clicking/tapping outside
  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      if (!wrapperRef.current) return;
      if (visible && !wrapperRef.current.contains(e.target as Node)) {
        setVisible(false);
      }
    };
    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, [visible]);

  useEffect(() => {
    return () => {
      if (touchTimeout.current) window.clearTimeout(touchTimeout.current);
    };
  }, []);

  // toggle for touch devices (tap)
  const handleTouchToggle = (e: React.TouchEvent) => {
    e.stopPropagation();
    setVisible((v) => !v);
    if (touchTimeout.current) window.clearTimeout(touchTimeout.current);
    // auto-hide after 3s on mobile to avoid stuck tooltips
    touchTimeout.current = window.setTimeout(() => setVisible(false), 3000);
  };

  return (
    <div ref={wrapperRef} className="relative inline-flex">
      <MotionDiv
        role="button"
        tabIndex={0}
        aria-label={name}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        onTouchStart={handleTouchToggle}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.98 }}
        className={`
          group w-16 h-16 rounded-lg bg-white flex items-center justify-center cursor-pointer
          shadow-[0_12px_36px_rgba(109,40,217,0.18)]
          hover:shadow-[0_20px_60px_rgba(109,40,217,0.28)]
          transition-all duration-300
        `}
      >
        <Icon className="w-8 h-8 text-gray-700 group-focus:text-[#6D28D9] group-hover:text-[#6D28D9] transition-colors" />
      </MotionDiv>

      {/* Tooltip */}
      <AnimatePresence>
        {visible && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.16 }}
            className={`
              pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2
              whitespace-nowrap rounded-md bg-white px-3 py-1 text-sm font-medium text-gray-800
              shadow-[0_12px_36px_rgba(109,40,217,0.18)]
            `}
            aria-hidden={!visible}
          >
            {/* small triangular caret rotated 45deg */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-white shadow-[0_6px_16px_rgba(109,40,217,0.12)]" />
            <span className="relative z-10">{name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillCard;
