import { Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ size?: number; color?: string }>;
  href: string;
  borderColorClass: string;
  hoverTextColorClass: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:adry4nbr@gmail.com",
    borderColorClass: "border-red-500",
    hoverTextColorClass: "hover:text-red-500",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "https://github.com/adry4nbr/",
    borderColorClass: "border-purple-600",
    hoverTextColorClass: "hover:text-purple-600",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/adryan-galdino-262769276/",
    borderColorClass: "border-blue-500",
    hoverTextColorClass: "hover:text-blue-500",
  },
];
