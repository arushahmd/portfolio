import { useState, useEffect } from "react";
import type { NavLinkType, SocialLinkType } from "../../types";
import SidebarLink from "./SidebarLink";
import SidebarConnect from "./SidebarConnect";

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
import { useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();
  const [active, setActive] = useState("Home");

  // const links: NavLinkType[] = [
  //   { label: "Home", path: "/#/", Icon: HomeIcon },
  //   { label: "Experience", path: "/#/experience", Icon: BriefcaseIcon },
  //   { label: "Projects", path: "/#/projects", Icon: FolderIcon },
  //   { label: "About", path: "/#/about", Icon: UserIcon },
  //   { label: "Contact", path: "/#/contact", Icon: PhoneIcon },
  //   { label: "Tools", path: "/#/tools", Icon: WrenchScrewdriverIcon },
  // ];
  const links: NavLinkType[] = [
    { label: "Home", path: "/", Icon: HomeIcon },
    { label: "Experience", path: "/experience", Icon: BriefcaseIcon },
    { label: "Projects", path: "/projects", Icon: FolderIcon },
    { label: "About", path: "/about", Icon: UserIcon },
    { label: "Contact", path: "/contact", Icon: PhoneIcon },
    { label: "Tools", path: "/tools", Icon: WrenchScrewdriverIcon },
  ];

  // Update active state when location changes
  // useEffect(() => {
  //   const hashPath = location.hash ? location.hash.replace("#", "") : "/";
  //   const currentLink = links.find((link) => link.path.endsWith(hashPath));
  //   if (currentLink) setActive(currentLink.label);
  // }, [location]);
  useEffect(() => {
    const currentPath = location.pathname;
    const currentLink = links.find((link) => link.path === currentPath);
    if (currentLink) setActive(currentLink.label);
  }, [location]);

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
    <aside className="flex flex-col justify-start h-full w-64 p-4 bg-gradient-to-b from-gray-50 via-white to-gray-100 border-r border-gray-200 relative">
      <div className="absolute inset-0 bg-[url('/abstract-ai-bg.png')] bg-cover bg-center opacity-10 mix-blend-overlay pointer-events-none"></div>

      <ProfileHeader />

      <nav className="flex flex-col gap-1 mt-7 relative z-10">
        {links.map((link) => (
          <SidebarLink
            key={link.label}
            link={link}
            isActive={active === link.label}
            onClick={() => setActive(link.label)}
          />
        ))}
      </nav>

      <div className="relative z-10 mt-40">
        <SidebarConnect links={socialLinks} />
      </div>
    </aside>
  );
};

export default Sidebar;
