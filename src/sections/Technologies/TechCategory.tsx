/* eslint-disable react-refresh/only-export-components */
import { motion } from "motion/react";
import type { Variants } from "motion/react";
import type { TechCategoryData } from "./technologies.data";
import { TechCard } from "./TechCard";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 2.5,
      staggerChildren: 0.4,
    },
  },
};

interface TechCategoryProps {
  category: TechCategoryData;
}

export const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.1, ease: "backOut" },
  },
};

export function TechCategory({ category }: TechCategoryProps) {
  return (
    <div className="m-4 md:m-6">
      <div className="flex items-center gap-4 ">
        <div
          className="flex-1 h-px bg-border"
          style={{ background: `var(${category.accentColor})` }}
        />
        <span
          className="text-xs md:text-sm tracking-widest text-accent-blue"
          style={{ color: `var(${category.accentColor})` }}
        >
          {category.title}
        </span>
        <div
          className="flex-1 h-px bg-border"
          style={{ background: `var(${category.accentColor})` }}
        />
      </div>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {category.techs.map((tech) => (
          <TechCard
            key={tech.name}
            tech={tech}
            accentColor={category.accentColor}
          />
        ))}
      </motion.div>
    </div>
  );
}
