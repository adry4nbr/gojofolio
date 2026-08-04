import type { Variants } from "motion";
import { socialLinks } from "./contact.data";
import { motion } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.1, ease: "easeOut" },
  },
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  borderColorClass: string;
  hoverTextColorClass: string;
}

export function SocialLinkItem({
  href,
  icon,
  borderColorClass,
  hoverTextColorClass,
}: SocialLinkProps) {
  return (
    <motion.a
      variants={itemVariants}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group flex items-center justify-center w-16 h-16 rounded-full border-2 transition-transform duration-500 ease-in-out hover:scale-110 ${borderColorClass} ${hoverTextColorClass}`}
    >
      <span className="inline-flex transition-transform duration-500 ease-in-out group-hover:rotate-360 group-hover:scale-110">
        {icon}
      </span>
    </motion.a>
  );
}

export function SocialLinks() {
  return (
    <motion.div variants={containerVariants} className="flex gap-6">
      {socialLinks.map((link) => (
        <SocialLinkItem
          key={link.name}
          href={link.href}
          icon={<link.icon size={24} />}
          borderColorClass={link.borderColorClass}
          hoverTextColorClass={link.hoverTextColorClass}
        />
      ))}
    </motion.div>
  );
}
