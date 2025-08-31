import type { SocialLinkType } from "../../types";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

interface SidebarConnectProps {
  links: SocialLinkType[];
}

const SidebarConnect: React.FC<SidebarConnectProps> = ({ links }) => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* Heading */}
      <p className="font-semibold tracking-wide text-sm uppercase relative text-left">
        <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 bg-clip-text text-transparent">
          Connect
        </span>
        <span className="absolute -bottom-1 left-0 w-16 h-[2px] bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"></span>
      </p>

      {/* Links */}
      <div className="flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-gray-600 transition-all duration-300 relative
                       hover:bg-gradient-to-r hover:from-purple-50 hover:to-indigo-100 hover:shadow-md"
          >
            {/* Left side: icon + name */}
            <div className="flex items-center gap-2">
              <span className="text-lg transition-colors duration-300 group-hover:text-purple-600">
                {link.icon}
              </span>
              <span className="transition-colors duration-300 group-hover:text-purple-700 group-hover:font-semibold">
                {link.name}
              </span>
            </div>

            {/* Right side: external link icon */}
            <ArrowTopRightOnSquareIcon className="w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-purple-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />

            {/* Hover Glow (AI feel) */}
            <span className="absolute inset-0 rounded-lg ring-1 ring-purple-200 opacity-0 group-hover:opacity-60 group-hover:animate-pulse"></span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SidebarConnect;
