import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";

const socialLinks = [
  {
    title: "WhatsApp Me",
    icon: <FaWhatsapp />,
    link: "https://wa.me/03194040067",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/arushahmd",
  },
  {
    title: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/arushahmd",
  },
  {
    title: "Twitter",
    icon: <FaTwitter />,
    link: "https://twitter.com/arushahmd",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    link: "https://instagram.com/arush_ahmd",
  },
];

// Animation configs
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, x: 50 }, // slide in from right
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gray-50 py-20 px-4 md:px-16 flex flex-col md:flex-row gap-12">
      {/* Left: Form */}
      <motion.div
        className="flex-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent
               bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Connect with Me
        </motion.h1>

        {/* Optional gradient underline */}
        <motion.div
          className="ml-32 w-80 h-1 mt-2 rounded-full bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <p className="text-gray-600 mb-8 mt-4">
          I’m always open to discussing AI, NLP, LLMs, ML, Data Science and Web
          Projects or Freelance opportunities. Send me a message below or reach
          me via social links.
        </p>
        <ContactForm />
      </motion.div>

      {/* Right: Social / Contact Cards */}
      <motion.div
        className="flex-1 flex items-center" // makes cards vertically centered
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="w-full flex flex-col gap-3">
          {socialLinks.map((link, idx) => (
            <motion.div key={idx} variants={cardVariant}>
              <ContactCard {...link} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
