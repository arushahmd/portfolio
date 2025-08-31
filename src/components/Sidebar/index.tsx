import { useState } from "react";
import type { NavLinkType, SocialLinkType } from "../../types";
import SidebarLink from "./SidebarLink";
import SidebarConnect from "./SidebarConnect";

// Example icons, replace with your preferred ones
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  HomeIcon,
  BriefcaseIcon,
  FolderIcon,
  UserIcon,
  PhoneIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import ProfileHeader from "./PortfolioHeader";

const Sidebar: React.FC = () => {
  const [active, setActive] = useState("Home");

  const links: NavLinkType[] = [
    { label: "Home", path: "/", Icon: HomeIcon },
    { label: "Experience", path: "/experience", Icon: BriefcaseIcon },
    { label: "Projects", path: "/projects", Icon: FolderIcon },
    { label: "About", path: "/about", Icon: UserIcon },
    { label: "Contact", path: "/contact", Icon: PhoneIcon },
    { label: "Tools", path: "/tools", Icon: WrenchScrewdriverIcon },
  ];

  const socialLinks: SocialLinkType[] = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/your-profile",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      url: "https://github.com/your-profile",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/your-profile",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/your-profile",
    },
  ];

  return (
    <aside
      className="flex flex-col justify-between h-full w-64 p-4 
                 bg-gradient-to-b from-gray-50 via-white to-gray-100 
                 border-r border-gray-200 relative"
    >
      {/* Optional background image overlay */}
      <div className="absolute inset-0 bg-[url('/abstract-ai-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>

      {/* Profile Section */}
      {/* <div className="flex items-center gap-3 relative z-10">
        <div className="relative">
          <img
            src={profilePic}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover ring-2 ring-transparent bg-gray-200"
          />
          <span className="absolute inset-0 rounded-full ring-2 ring-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 opacity-40 blur-sm"></span>
        </div>
        <div>
          <h4 className="m-0 font-semibold text-gray-800">Aroosh Ahmad</h4>
          <p className="text-lg font-semibold bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 bg-clip-text text-transparent animate-fade-rotate">
            AI Engineer / LLM Specialist
          </p>
        </div>
      </div> */}
      <ProfileHeader />

      {/* Nav Links */}
      <nav className="flex flex-col gap-1 mt-3 relative z-10">
        {links.map((link) => (
          <SidebarLink
            key={link.label}
            link={link}
            isActive={active === link.label}
            onClick={() => setActive(link.label)}
          />
        ))}
      </nav>

      {/* Social / Connect Links */}
      <div className="relative z-10">
        <SidebarConnect links={socialLinks} />
      </div>
    </aside>
  );
};

export default Sidebar;
