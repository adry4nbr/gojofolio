import { motion } from "motion/react";
import { EnergyBall } from "../../components/ui/EnergyBall";

export function ProjectsEnergyBallReveal() {
  return (
    <>
      {/* Véu — fica atrás da bola, corta progressivamente */}
      <motion.div
        className="absolute inset-0 z-15 bg-foreground pointer-events-none"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 100% 0% 0%)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 3, ease: "easeOut" }}
      />

      {/* Bola — na frente, não afetada pelo clip-path do véu */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <EnergyBall
          color="blue"
          xRange={["99vw", "-8vw"]}
          duration={3}
          delay={0.2}
        />
      </div>
    </>
  );
}
