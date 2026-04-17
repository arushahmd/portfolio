import { motion } from "framer-motion";
import type { ToolItem } from "./toolsData";

const MotionDiv = motion.div;

const ToolCard: React.FC<ToolItem> = ({ name, icon: Icon, image, purpose }) => {
  return (
    <MotionDiv
      className="relative w-full max-w-[260px] cursor-pointer overflow-visible group perspective"
      whileHover={{ scale: 1.03 }}
    >
      {/* Soft background glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-purple-900 via-indigo-800 to-cyan-700 opacity-20 blur-3xl z-0 pointer-events-none"></div>

      {/* 3D tilt container */}
      <MotionDiv
        className="relative flex items-center gap-4 bg-white rounded-lg border border-gray-200
                   shadow-[0_10px_25px_rgba(109,40,217,0.15)] hover:shadow-[0_20px_40px_rgba(109,40,217,0.25)]
                   transition-shadow duration-300 p-4 z-10"
        whileHover={{
          rotateX: 5,
          rotateY: -5,
          transition: { type: "spring", stiffness: 200, damping: 15 },
        }}
      >
        {/* Icon / Image */}
        <div
          className="w-14 h-14 flex items-center justify-center bg-gray-50 border border-gray-200
                        group-hover:bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 transition-all"
        >
          {Icon ? (
            <Icon className="w-8 h-8 text-gray-700 group-hover:text-white transition-all" />
          ) : image ? (
            <img
              src={image}
              alt={name}
              className="w-10 h-10 object-contain transition-all group-hover:brightness-125"
            />
          ) : null}
        </div>

        {/* Name + Purpose */}
        <div className="flex flex-col items-start">
          <h3 className="text-base font-semibold text-gray-800 group-hover:text-gray-900">
            {name}
          </h3>
          <p className="text-sm text-gray-500 group-hover:text-gray-700">
            {purpose}
          </p>
        </div>
      </MotionDiv>
    </MotionDiv>
  );
};

export default ToolCard;
