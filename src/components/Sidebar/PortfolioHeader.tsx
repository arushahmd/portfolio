import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import profilePic from "../../assets/profile.png";

const roles = [
  "Expert AI Engineer",
  "NLP - LLM Specialist",
  "Expert ML Engineer",
  "FullStack AI Developer",
];

const ProfileHeader: React.FC = () => {
  const [index, setIndex] = useState(0);

  // Cycle taglines every 2.5s (slightly slower for elegance)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500); // ⬅ changed duration for readability
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-4 relative z-10 pt-8">
      {/* Profile Picture */}
      <div className="relative flex-shrink-0 w-10 h-10">
        <img
          src={profilePic}
          alt="Profile"
          className="w-full h-full rounded-full object-cover ring-2 ring-transparent bg-gray-200"
        />
        {/* Gradient Glow */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 opacity-40 blur-md"></span>
      </div>

      {/* Name + Animated Tagline */}
      <div className="flex flex-col justify-center min-h-[56px]">
        {/* Name */}
        <h1
          className="text-xl font-bold leading-tight
                     bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400
                     bg-clip-text text-transparent"
        >
          Aroosh Ahmad
        </h1>
        {/* ⬆ Made name gradient text to match AI theme */}
        {/* ⬆ You can adjust font-size by changing `text-xl` */}

        {/* Tagline */}
        <div className="h-7 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[index]}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="block text-sm font-medium leading-snug
                         bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400
                         bg-clip-text text-transparent"
            >
              {roles[index]}
            </motion.span>
          </AnimatePresence>
        </div>
        {/* ⬆ Fixed height for tagline container prevents name jump */}
        {/* ⬆ Tagline font-size is `text-sm` smaller than name for hierarchy */}
      </div>
    </div>
  );
};

export default ProfileHeader;
