import { Eye, EyeClosed } from "lucide-react";
import { easeInOut, motion } from "motion/react";
import { useState } from "react";

export function SixEyesIcon() {
  const [hasAwakened, setHasAwakened] = useState(false);
  const Icon = hasAwakened ? Eye : EyeClosed;

  function handleClick() {
    if (hasAwakened) return;
    setHasAwakened(true);
  }

  return (
    <div className="relative flex items-center justify-center ">
      {hasAwakened && (
        <motion.div
          className="absolute rounded-full pointer-events-none top-1/2 left-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 z-50"
          style={{ background: "var(--explosion-purple-radiant)" }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: [1, 50, 100], opacity: [1, 1, 0] }}
          transition={{ duration: 2, ease: easeInOut }}
        />
      )}

      <motion.button
        onClick={handleClick}
        disabled={hasAwakened}
        style={{ background: "var(--six-eyes-gradient)" }}
        className="p-5 rounded-full mb-12"
        aria-label={hasAwakened ? "Olho aberto" : "Olho fechado"}
        animate={{
          boxShadow: [
            "0 0 0px 0px rgba(59, 130, 246, 0)",
            "0 0 20px 10px rgba(59, 130, 246, 0.4)",
          ],
        }}
        transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <Icon className="text-white" size={60} />
      </motion.button>
    </div>
  );
}
