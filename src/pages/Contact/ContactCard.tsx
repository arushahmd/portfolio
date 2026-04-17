import { motion } from "framer-motion";

interface ContactCardProps {
  title: string;
  icon: React.ReactNode;
  link?: string;
  info?: string;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  icon,
  link,
  info,
}) => {
  const isClickable = !!link;

  return (
    <motion.a
      href={link || "#"}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: isClickable ? 1.05 : 1,
        boxShadow: isClickable ? "0px 10px 25px rgba(0,0,0,0.15)" : "none",
      }}
      className={`flex items-center gap-4 p-3 bg-white border border-gray-200 shadow rounded-xl transition
        ${isClickable ? "cursor-pointer" : "cursor-not-allowed opacity-70"}`}
    >
      <div className="text-2xl text-purple-600">{icon}</div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800">{title}</span>
        {info && <span className="text-gray-500 text-sm">{info}</span>}
      </div>
    </motion.a>
  );
};

export default ContactCard;
