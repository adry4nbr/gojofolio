import { motion, type HTMLMotionProps } from "motion/react";

interface MiniOrbProps extends HTMLMotionProps<"div"> {
  variant: "blue" | "red";
}

const baseClasses = "size-9 rounded-full";
const variantClasses = {
  blue: "bg-accent-blue shadow-[0_0_16px_4px] shadow-accent-blue/60",
  red: "bg-accent-red shadow-[0_0_16px_4px] shadow-accent-red/60",
};

export function MiniOrb({ variant, className, ...props }: MiniOrbProps) {
  return (
    <motion.div
      {...props}
      className={[baseClasses, variantClasses[variant], className]
        .filter(Boolean)
        .join(" ")}
      animate={{ y: [-12, 12, -12] }}
      transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      }}
    />
  );
}
