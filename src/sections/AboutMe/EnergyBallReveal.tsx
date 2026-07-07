import { motion } from "motion/react";
import { EnergyBall } from "../../components/ui/EnergyBall";

// EnergyBallReveal.tsx
export function EnergyBallReveal() {
  return (
    <>
      {/* Véu — fica atrás da bola, corta progressivamente */}
      <motion.div
        className="absolute inset-0 z-10 bg-foreground"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 100%)" }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 4, ease: "easeOut" }}
      />

      {/* Bola — na frente, não afetada pelo clip-path do véu */}
      <div className="absolute inset-0 z-20 flex items-center">
        <EnergyBall
          color="red"
          xRange={["0vw", "100vw"]}
          duration={4}
          delay={0.4}
        />
      </div>
    </>
  );
}
