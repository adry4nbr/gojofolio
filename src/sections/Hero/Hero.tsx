import { motion } from "motion/react";
import { Button } from "../../components/ui/Button";
import { ScrollIndicator } from "./ScrollIndicator";
import { SixEyesIcon } from "./SixEyesIcon";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="Hero"
      className="relative flex flex-col justify-center items-center h-screen gap-1 overflow-hidden mb-5"
    >
      <motion.div
        variants={itemVariants}
        className="absolute w-80 h-80 pointer-events-none"
        style={{ background: "var(--hero-glow)", filter: "blur(120px)" }}
      />

      <motion.div variants={itemVariants}>
        <SixEyesIcon />
      </motion.div>

      <motion.h1 variants={itemVariants} className="text-9xl my-6 z-1">
        Portfolio
      </motion.h1>
      <motion.p
        variants={itemVariants}
        className="text-4xl mb-8 z-1 font-light"
      >
        Adryan | Desenvolvedor Front-End | O Mais Honrado
      </motion.p>

      <motion.div variants={itemVariants} className="flex gap-5 mb-24">
        <Button onClick={() => scrollToSection("Projects")} variant="filled">
          Ver Projetos
        </Button>
        <Button onClick={() => scrollToSection("Contact")} variant="outline">
          Contato
        </Button>
      </motion.div>

      <motion.div variants={itemVariants}>
        <ScrollIndicator />
      </motion.div>
    </motion.section>
  );
}
