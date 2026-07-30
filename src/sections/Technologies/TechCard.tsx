// sections/Technologies/TechCard.tsx
import { motion } from "motion/react";
import type { Tech } from "./technologies.data";
import { cardVariants } from "./TechCategory";

interface TechCardProps {
  tech: Tech;
}

export function TechCard({ tech }: TechCardProps) {
  const Icon = tech.icon;

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 border-border overflow-hidden transition-all duration-300 hover:scale-110 hover:border-accent-blue"
    >
      <Icon size={32} color="default" />
      <span className="text-sm font-medium">{tech.name}</span>

      <div className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue w-0 group-hover:w-full transition-all duration-300" />
    </motion.div>
  );
}
