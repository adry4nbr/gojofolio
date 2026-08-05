// sections/Technologies/TechnologiesCollisionReveal.tsx
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { EnergyBall } from "../../components/ui/EnergyBall";

const TRAVEL_DURATION = 1.5;
const EXPLOSION_DURATION = 1;

type Phase = "traveling" | "exploding" | "done";

export function TechnologiesCollisionReveal() {
  const [phase, setPhase] = useState<Phase>("traveling");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const redRange = isMobile ? ["0vw", "40vw"] : ["0vw", "50vw"];
  const blueRange = isMobile ? ["99vw", "40vw"] : ["99vw", "50vw"];

  return (
    <div
      className="absolute inset-0 z-30 pointer-events-none"
      aria-hidden="true"
    >
      {/* Véu branco — some só na fase "done" */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === "done" ? 0 : 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Fase 1: bolas viajando */}
      {phase === "traveling" && (
        <>
          <div className="absolute inset-0 flex items-center ">
            <EnergyBall
              color="red"
              xRange={redRange}
              duration={TRAVEL_DURATION}
              onAnimationComplete={() => setPhase("exploding")}
            />
          </div>
          <div className="absolute inset-0 flex items-center">
            <EnergyBall
              color="blue"
              xRange={blueRange}
              duration={TRAVEL_DURATION}
            />
          </div>
        </>
      )}

      {/* Fase 2: explosão */}
      {phase === "exploding" && (
        <motion.div
          className="absolute rounded-full pointer-events-none top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2"
          style={{ background: "var(--explosion-purple-radiant)" }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [1, 40, 80], opacity: [1, 1, 0] }}
          transition={{ duration: EXPLOSION_DURATION, ease: "easeInOut" }}
          onAnimationComplete={() => setPhase("done")}
        />
      )}
    </div>
  );
}
