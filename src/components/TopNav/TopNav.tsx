// src/components/ResponsiveNav/TopNav.tsx
import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  HomeIcon,
  BoltIcon,
  BriefcaseIcon,
  FolderIcon,
  UserIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

import profilePic from "../../assets/profile.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type LinkItem = { label: string; path: string; Icon: React.FC<any> };

const ALL_LINKS: LinkItem[] = [
  { label: "Home", path: "/", Icon: HomeIcon },
  { label: "Skills", path: "/skills", Icon: BoltIcon },
  { label: "Experience", path: "/experience", Icon: BriefcaseIcon },
  { label: "Projects", path: "/projects", Icon: FolderIcon },
  { label: "About", path: "/about", Icon: UserIcon },
  { label: "Contact", path: "/contact", Icon: PhoneIcon },
  { label: "Tools", path: "/tools", Icon: WrenchScrewdriverIcon },
];

// Primary (visible) count on the top bar, rest go to More / Drawer
const PRIMARY_COUNT = 4;

export default function TopNav() {
  const location = useLocation();
  const [openMore, setOpenMore] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const moreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Close More when route changes
    setOpenMore(false);
  }, [location.pathname]);

  // close on outside click
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!moreRef.current) return;
      if (!moreRef.current.contains(e.target as Node)) setOpenMore(false);
    };
    document.addEventListener("pointerdown", onDoc);
    return () => document.removeEventListener("pointerdown", onDoc);
  }, []);

  const primary = ALL_LINKS.slice(0, PRIMARY_COUNT);
  const rest = ALL_LINKS.slice(PRIMARY_COUNT);

  return (
    <>
      {/* Top bar: visible only on small screens */}
      <div className="md:hidden sticky top-0 z-40 bg-white/70 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 py-2 flex items-center justify-between gap-2">
          {/* Left: logo or small name */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white font-semibold">
              <img src={profilePic} />
            </div>
            <span className="text-sm font-medium text-gray-800">Aroosh</span>
          </div>

          {/* Center: icons */}
          <nav className="flex items-center gap-1 overflow-x-auto">
            {primary.map((link) => (
              <NavIcon
                key={link.label}
                to={link.path}
                Icon={link.Icon}
                label={link.label}
              />
            ))}

            {/* More dropdown */}
            <div ref={moreRef} className="relative">
              <button
                onClick={() => setOpenMore((s) => !s)}
                aria-haspopup="menu"
                aria-expanded={openMore}
                className="w-10 h-10 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
                title="More"
              >
                {/* three dots / more icon (simple) */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-gray-600"
                >
                  <path d="M6 10a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zM6 18a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>

              <AnimatePresence>
                {openMore && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.12 }}
                    className="absolute right-0 mt-2 w-44 rounded-lg bg-white border shadow-lg py-1"
                  >
                    {rest.map((r) => (
                      <NavLink
                        key={r.label}
                        to={r.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 ${
                            isActive ? "font-semibold text-purple-600" : ""
                          }`
                        }
                        onClick={() => setOpenMore(false)}
                      >
                        <r.Icon className="w-4 h-4" />
                        {r.label}
                      </NavLink>
                    ))}

                    {/* Divider + Tools maybe */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right: hamburger for full drawer */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setOpenDrawer(true)}
              className="w-10 h-10 rounded-md flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              aria-label="Open menu"
            >
              <FiMenu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Drawer (mobile full nav) */}
      <AnimatePresence>
        {openDrawer && (
          <motion.div
            className="fixed inset-0 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-black/30"
              onClick={() => setOpenDrawer(false)}
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-72 h-full bg-white shadow-2xl"
            >
              <div className="p-4 flex items-center justify-between border-b">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white font-semibold">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Aroosh Ahmad</div>
                    <div className="text-xs text-gray-500">AI Engineer</div>
                  </div>
                </div>
                <button
                  onClick={() => setOpenDrawer(false)}
                  aria-label="Close"
                  className="p-2 rounded-md hover:bg-gray-100"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>

              <div className="p-3">
                {ALL_LINKS.map((l) => (
                  <NavLink
                    key={l.label}
                    to={l.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2 rounded-md text-sm w-full hover:bg-gray-50 ${
                        isActive
                          ? "bg-gradient-to-r from-purple-50 to-indigo-50 font-semibold text-purple-600"
                          : "text-gray-700"
                      }`
                    }
                    onClick={() => setOpenDrawer(false)}
                  >
                    <l.Icon className="w-5 h-5" />
                    <span>{l.label}</span>
                  </NavLink>
                ))}

                <div className="mt-6 border-t border-gray-200 pt-4">
                  <p className="text-xs font-medium text-gray-500 uppercase mb-3 tracking-wide">
                    Connect
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="https://linkedin.com/in/arushahmd"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md
                 text-gray-600 hover:text-[#6D28D9]
                 transition-all duration-200 ease-out
                 hover:translate-x-1 hover:scale-[1.02]"
                    >
                      <FaLinkedin className="w-5 h-5" />
                      <span className="text-sm">LinkedIn</span>
                    </a>

                    <a
                      href="https://github.com/arushahmd"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md
                 text-gray-600 hover:text-[#6D28D9]
                 transition-all duration-200 ease-out
                 hover:translate-x-1 hover:scale-[1.02]"
                    >
                      <FaGithub className="w-5 h-5" />
                      <span className="text-sm">GitHub</span>
                    </a>

                    <a
                      href="https://instagram.com/arush_ahmd"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-2 py-1.5 rounded-md
                 text-gray-600 hover:text-[#6D28D9]
                 transition-all duration-200 ease-out
                 hover:translate-x-1 hover:scale-[1.02]"
                    >
                      <FaInstagram className="w-5 h-5" />
                      <span className="text-sm">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Small helper: icon-only button with tooltip */
function NavIcon({
  to,
  Icon,
  label,
}: {
  to: string;
  Icon: React.FC<any>;
  label: string;
}) {
  return (
    <NavLink to={to} className="group relative">
      <motion.div
        whileHover={{ scale: 1.06 }}
        className="w-10 h-10 rounded-md flex items-center justify-center bg-white shadow-sm border border-gray-100"
        title={label}
      >
        <Icon className="w-5 h-5 text-gray-600 group-hover:text-[#6D28D9]" />
      </motion.div>
      {/* lightweight tooltip for non-touch devices */}
      <span className="absolute -top-9 left-1/2 -translate-x-1/2 text-xs px-2 py-1 rounded-md bg-white/95 border border-gray-100 text-gray-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        {label}
      </span>
    </NavLink>
  );
}
