import type { JSX } from "react";
import type { IconType } from "react-icons";

export interface NavLinkType {
  label: string;
  path: string;
  Icon: IconType;
}

export interface SocialLinkType {
  name: string;
  icon: JSX.Element;
  url: string;
}
