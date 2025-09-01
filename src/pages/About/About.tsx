import { motion } from "framer-motion";
import SkillBadge from "./SkillBadge";
import ResumeButton from "./ResumeButton";
import AboutCard from "./AboutCard";
import aboutData from "./aboutData";
import { FiGithub, FiLinkedin } from "react-icons/fi";

interface AboutPageProps {
  showIllustration?: boolean; // toggle illustration
}

const AboutPage: React.FC<AboutPageProps> = ({ showIllustration = false }) => {
  return (
    <div className="relative min-h-screen bg-gray-50 py-20 px-4 md:px-16 flex flex-col md:flex-row gap-8">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-4 text-left">
        {/* Heading */}
        <motion.h1
          className="text-2xl md:text-3xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
            Aroosh Ahmad
          </span>{" "}
          — AI Engineer & NLP Specialist
        </motion.h1>

        {/* Bio Paragraphs */}
        {aboutData.paragraphs.map((para, idx) => (
          <motion.p
            key={idx}
            className="text-gray-600 text-sm md:text-base leading-relaxed"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.15 }}
          >
            {para}
          </motion.p>
        ))}

        {/* Interactive Cards */}
        <div className="flex flex-wrap gap-4 mt-4">
          {aboutData.cards.map((card, idx) => (
            <AboutCard
              key={idx}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        {/* Skills */}
        <div className="mt-4">
          <h2 className="text-lg md:text-xl font-semibold text-purple-600 mb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {aboutData.skills.map((skill, idx) => (
              <SkillBadge key={idx} skill={skill} />
            ))}
          </div>
        </div>

        {/* Resume & Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <ResumeButton />
          <a
            href="https://github.com/arushahmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:underline text-sm"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/arushahmd"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-cyan-400 hover:underline text-sm"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>

      {/* Right Content / Illustration */}
      {showIllustration && (
        <div className="flex-1 flex justify-center md:justify-end items-start md:items-center">
          <motion.img
            src="/assets/ai-illustration.png"
            alt="AI abstract illustration"
            className="max-w-xs md:max-w-sm rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          />
        </div>
      )}
    </div>
  );
};

export default AboutPage;
