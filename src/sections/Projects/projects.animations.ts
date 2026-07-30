import type { Variants } from "motion/react";

export const BALL_DELAY = 0.18;
export const BALL_DURATION = 3;
const COLUMNS = 3;

export const gridVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0,
    },
  },
};

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (column: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: BALL_DELAY + (COLUMNS - 1 - column) * (BALL_DURATION / COLUMNS),
    },
  }),
};

export const techsContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 1,
      staggerDirection: -1,
    },
  },
};

export const techBadgeVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export const loadingBarVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: (techsCount: number) => ({
    scaleX: 1,
    transition: {
      duration: 3,
      ease: "easeOut",
      delay: 0.5 + techsCount * 0.12,
    },
  }),
};
