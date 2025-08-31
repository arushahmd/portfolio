import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
import RainBackground from "../components/Animations/RainBackground";

const Home: React.FC = () => {
  const [_hoverName, setHoverName] = useState(false);
  const [copied, setCopied] = useState(false);

  const primaryGradient =
    "bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("aroosh@example.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4">
      {/* Animated background */}
      <RainBackground />

      {/* Left-aligned text container */}
      <div className="flex flex-col items-start max-w-2xl w-full text-gray-600 mb-16">
        <h1 className="text-3xl md:text-4xl font-semibold mb-2">
          Hi, I am{" "}
          <motion.span
            onHoverStart={() => setHoverName(true)}
            onHoverEnd={() => setHoverName(false)}
            className="cursor-pointer relative inline-block text-purple-600 transition-all duration-300"
            whileHover={{
              scale: 1.05,
              textShadow: "0px 0px 12px rgba(109,40,217,0.7)",
            }}
          >
            Aroosh
          </motion.span>
        </h1>

        <p className="text-left text-sm md:text-lg mb-4">
          AI Engineer | NLP & LLM Specialist <br />
          Experienced in building production-grade AI systems and leading
          cross-functional teams globally. Passionate about transforming
          research into impactful products.
        </p>

        <p className="text-left text-sm md:text-md text-gray-600">
          I work on AI research, NLP & LLM systems, and production-grade
          projects. <br />
          You can talk to me about{" "}
          <span className="font-semibold text-purple-600">
            AI, NLP, LLMs, or building products
          </span>
          .
        </p>
      </div>

      {/* Centered Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <button
          onClick={handleCopyEmail}
          className={`flex items-center gap-2 px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient} hover:opacity-90 transition cursor-pointer`}
        >
          <FiCopy className="w-4 h-4" />
          {copied ? "Copied!" : "Email"}
        </button>

        <Link
          to="/connect"
          className={`px-6 py-2 rounded-md font-medium text-white text-sm ${primaryGradient} hover:opacity-90 transition cursor-pointer`}
        >
          Connect
        </Link>
      </div>
    </div>
  );
};

export default Home;
