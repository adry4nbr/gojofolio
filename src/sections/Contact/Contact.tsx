import { motion } from "motion/react";
import { Button } from "../../components/ui/Button";
import { SocialLinks } from "./SocialLinks";

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

export function Contact() {
  return (
    <section className="relative flex flex-col h-screen mt-14">
      <div
        aria-hidden="true"
        className="absolute w-80 h-80 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
        style={{ background: "var(--hero-glow)", filter: "blur(120px)" }}
      />

      <p className="my-2 ml-9 text-pink-500">// Contatos</p>

      <motion.div
        className="flex flex-col ml-7 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.h2 variants={itemVariants} className="text-7xl mt-14 mb-6">
          Vamos Trabalhar juntos
        </motion.h2>
        <motion.p variants={itemVariants} className="text-xl">
          Tem um projeto em mente? Entre em contato.
        </motion.p>

        <motion.div variants={itemVariants} className="my-20">
          <SocialLinks />
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button variant="filled">Baixar Currículo</Button>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="w-[18%] h-1 bg-linear-to-r from-accent-blue via-accent-red to-accent-blue mt-18"
        />
      </motion.div>
      <footer className="flex bg-foreground text-background h-20 w-full mt-auto justify-center items-center">
        © 2026 - Desenvolvido por Adryan Galdino Soares - Tema inspirado em
        Satoru Gojo da Obra Jujutsu Kaisen
      </footer>
    </section>
  );
}
