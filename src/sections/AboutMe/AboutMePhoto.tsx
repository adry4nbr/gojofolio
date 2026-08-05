import { motion } from "motion/react";
import { MiniOrb } from "../../components/ui/MiniOrb";

export function AboutMePhoto() {
  return (
    <div className="size-full p-4 md:p-8 flex items-center justify-center">
      <div className="relative size-50 md:size-80 mt-6 md:mt-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-70 md:size-100 rounded-full border-2 border-dashed border-spacing-6 border-accent-blue/50 shadow-[0_0_8px_1px] shadow-accent-blue/30"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-60 md:size-90 rounded-full border border-accent-red/30 shadow-[0_0_4px_1px] shadow-accent-red/20" />

        <img
          src="/aboutMe/foto2.jpeg"
          alt="Minha Foto"
          className="absolute inset-0 size-full rounded-full object-cover border-4 border-border"
        />

        <MiniOrb variant="red" className="absolute top-[-22%] left-[108%]" />
        <MiniOrb variant="blue" className="absolute top-[108%] left-[-22%]" />
      </div>
    </div>
  );
}
