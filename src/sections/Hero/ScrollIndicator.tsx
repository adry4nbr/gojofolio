import { motion } from "motion/react";

export function ScrollIndicator() {
  return (
    <motion.div
      aria-hidden="true"
      className="flex items-start border-border border-2 rounded-full px-3 py-6 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: [0, 16, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: 0.5,
      }}
    >
      <motion.div
        className="bg-accent-blue p-1 rounded-full"
        animate={{ y: [-12, 12, -12] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}
