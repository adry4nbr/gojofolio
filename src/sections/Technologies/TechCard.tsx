import { motion } from "motion/react";
import type { Tech } from "./technologies.data";
import { cardVariants } from "./TechCategory";

interface TechCardProps {
  tech: Tech;
  accentColor: string;
}

export function TechCard({ tech, accentColor }: TechCardProps) {
  const Icon = tech.icon;

  return (
    <motion.div
      variants={cardVariants}
      style={
        {
          "--tech-accent": `var(${accentColor})`,
        } as React.CSSProperties
      }
      // Hover de escala aplicado apenas no desktop (md:hover:scale-110) para evitar bugs no toque mobile
      className="group relative flex flex-col items-center justify-center gap-2 py-4 bg-card rounded-3xl border-2 border-(--tech-accent)/30 overflow-hidden transition-all duration-500 md:hover:scale-110 hover:border-(--tech-accent)/60"
    >
      <Icon size={32} color="default" />
      <span className="text-sm font-medium">{tech.name}</span>

      <div className="absolute bottom-0 left-1 right-1 h-0.5 bg-(--tech-accent) w-0 group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
