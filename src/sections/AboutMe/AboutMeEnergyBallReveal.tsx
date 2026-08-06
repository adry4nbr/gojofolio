import { motion } from "motion/react";
import { EnergyBall } from "../../components/ui/EnergyBall";
import { useState } from "react";

export function AboutMeEnergyBallReveal() {
  const [ballStarted, setBallStarted] = useState(false);
  return (
    <>
      {/* Véu — fica atrás da bola, corta progressivamente */}
      <motion.div
        className="absolute inset-0 z-15 bg-background pointer-events-none"
        initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
        animate={{
          clipPath: ballStarted ? "inset(0% 0% 0% 100%)" : "inset(0% 0% 0% 0%)",
        }}
        transition={{ delay: 0.1, duration: 3, ease: "easeOut" }}
      />

      {/* Bola — na frente, não afetada pelo clip-path do véu */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <EnergyBall
          color="red"
          xRange={["0vw", "105vw"]}
          duration={3}
          delay={0.3}
          onAnimationStart={() => setBallStarted(true)}
        />
      </div>
    </>
  );
}
