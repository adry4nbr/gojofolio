import { motion } from "motion/react";
import { EnergyBall } from "../../components/ui/EnergyBall";

export function AboutMeEnergyBallReveal() {
  return (
    <>
      {/* Véu — fica atrás da bola, corta progressivamente */}
      <motion.div
        className="absolute inset-0 z-15 bg-background pointer-events-none"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 100%)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 3, ease: "easeOut" }}
      />

      {/* Bola — na frente, não afetada pelo clip-path do véu */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <EnergyBall
          color="red"
          xRange={["0vw", "100vw"]}
          duration={3}
          delay={0.18}
        />
      </div>
    </>
  );
}
