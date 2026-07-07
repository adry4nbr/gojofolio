import { motion } from "motion/react";

type BallColor = "red" | "blue";

interface EnergyBallProps {
  color: BallColor;
  size?: number;
  xRange?: [string, string]; // [posição inicial, posição final]
  duration?: number; // duração da travessia (whileInView)
  delay?: number;
}

export function EnergyBall({
  color,
  size = 100,
  xRange = ["-100%", "0%"],
  duration = 1.2,
  delay = 0,
}: EnergyBallProps) {
  const core = `var(--orb-${color}-core)`;
  const aura = `var(--orb-${color}-aura)`;
  const shadow = `var(--orb-${color}-shadow)`;
  const ringColor = `var(--orb-${color}-glow)`;

  return (
    <motion.div
      initial={{ x: xRange[0] }}
      whileInView={{ x: xRange[1] }}
      viewport={{ once: true }}
      transition={{ duration, delay, ease: "easeOut" }}
      style={{ position: "relative", width: size, height: size, flexShrink: 0 }}
    >
      {/* Aura atmosférica larga */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: -size * 1.6,
          background: aura,
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* Anel externo pulsante */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.7, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }}
        style={{
          position: "absolute",
          inset: -size * 0.28,
          borderRadius: "50%",
          border: `1.5px solid ${ringColor}`,
        }}
      />

      {/* Anel secundário, em fase oposta */}
      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 2.2, 1], opacity: [0.3, 0, 0.3] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.8,
        }}
        style={{
          position: "absolute",
          inset: -size * 0.1,
          borderRadius: "50%",
          border: `1px solid ${ringColor}`,
        }}
      />

      {/* Núcleo da bola */}
      <motion.div
        animate={{ scale: [1, 1.07, 0.95, 1.05, 0.97, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: core,
          boxShadow: shadow,
        }}
      />

      {/* Brilho especular (glint) */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "10%",
          left: "14%",
          width: "28%",
          height: "22%",
          borderRadius: "50%",
          background: "rgba(255,255,255,0.9)",
          filter: "blur(3px)",
          pointerEvents: "none",
        }}
      />

      {/* Pontinhos orbitando (ilusão de rotação) */}
      {[0, 72, 144, 216, 288].map((angleDeg, i) => {
        const r = size * 0.55;
        const rad = (angleDeg * Math.PI) / 180;
        const x0 = Math.cos(rad) * r;
        const y0 = Math.sin(rad) * r;
        const x1 = Math.cos(rad + 0.3) * (r * 1.2);
        const y1 = Math.sin(rad + 0.3) * (r * 1.2);
        return (
          <motion.div
            key={angleDeg}
            aria-hidden="true"
            animate={{
              x: [x0, x1, x0],
              y: [y0, y1, y0],
              opacity: [0.7, 0.2, 0.7],
              scale: [1, 0.4, 1],
            }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: size * 0.1,
              height: size * 0.1,
              marginTop: -(size * 0.05),
              marginLeft: -(size * 0.05),
              borderRadius: "50%",
              background: "white",
              pointerEvents: "none",
            }}
          />
        );
      })}
    </motion.div>
  );
}
