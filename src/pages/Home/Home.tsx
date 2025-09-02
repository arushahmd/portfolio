import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCopy, FiArrowRight } from "react-icons/fi"; //FiDownload -> was used for resume icon
import { Link } from "react-router-dom";
// import ElegantAIBackground from "../../components/Animations/ElegantAIBackground";
import RobotRunner from "../../components/Animations/RobotRunner";

const roles = [
  "AI Engineer / LLM Specialist",
  "Full Stack AI Developer",
  "Data Scientist & ML Engineer",
];

const MotionLink = motion(Link);

const Home: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const primaryGradient =
    "bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aroosh.ahmad.ai@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen flex overflow-hidden px-4 pt-16 md:pt-20">
      {/* Animated Subtle Background */}
      {/* <ElegantAIBackground /> */}

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col max-w-2xl w-full text-gray-600 space-y-6"
      >
        {/* Name */}
        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-left relative">
          Hi, I am{" "}
          <motion.span
            initial={{ backgroundPosition: "200% 0" }}
            animate={{ backgroundPosition: "0% 0" }}
            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
            className="relative inline-block bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400
                       bg-clip-text text-transparent cursor-pointer px-1 animate-gradient"
          >
            Aroosh
          </motion.span>
        </h1>

        {/* Roles */}
        <div className="text-sm md:text-lg font-medium text-gray-700">
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex]}
              initial={{ opacity: 0, y: 5, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -5, filter: "blur(4px)" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent"
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-24 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 rounded-full origin-left"
        ></motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="space-y-3"
        >
          <p className="text-sm md:text-md text-gray-600 leading-relaxed text-left">
            Experienced in building{" "}
            <span className="font-semibold text-purple-600">
              production-grade AI systems
            </span>
            , leading cross-functional teams globally, and designing{" "}
            <span className="font-semibold text-purple-600">
              scalable NLP, LLM & ML solutions
            </span>{" "}
            for impactful real-world applications.
          </p>

          <p className="text-sm md:text-md text-gray-600 leading-relaxed text-left">
            Passionate about transforming research into products and solving
            complex AI problems. You can talk to me about{" "}
            <span className="font-semibold text-purple-600">
              AI research, NLP, LLMs, or building scalable software
            </span>
            .
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2 justify-start items-start">
          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 14px rgba(109,40,217,0.4)",
            }}
            onClick={handleCopyEmail}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient} transition cursor-pointer`}
          >
            <FiCopy className="w-4 h-4" />
            {copied ? "Copied!" : "Email"}
          </motion.button>

          <MotionLink
            to="/contact"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 14px rgba(109,40,217,0.4)",
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient}`}
          >
            Connect <FiArrowRight className="w-4 h-4" />
          </MotionLink>

          {/* <motion.a
            href="https://linkedin.com/in/arushahmd"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 14px rgba(109,40,217,0.4)",
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient}`}
          >
            LinkedIn <FiArrowRight className="w-4 h-4" />
          </motion.a> */}

          {/* <motion.a
            href="https://github.com/arushahmd"
            target="_blank"
            rel="noopener noreferrer"
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 14px rgba(109,40,217,0.4)",
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient}`}
          >
            GitHub <FiArrowRight className="w-4 h-4" />
          </motion.a> */}

          {/* <motion.a
            href={`${import.meta.env.BASE_URL}Aroosh_Ahmad_AI_Engineer.pdf`}
            download
            whileTap={{ scale: 0.95 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 4px 14px rgba(109,40,217,0.4)",
            }}
            className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient}`}
          >
            Resume <FiDownload className="w-4 h-4" />
          </motion.a> */}
        </div>
      </motion.div>

      {/* Robot Runner (animated entrance) */}
      <RobotRunner enabled={false} />
    </div>
  );
};

export default Home;
