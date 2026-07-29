import { motion } from "motion/react";
import { MiniOrb } from "../../components/ui/MiniOrb";

export function ProfilePhoto() {
  return (
    <div className="size-full p-8 flex items-center justify-center">
      <div className="relative size-80 ">
        <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-100 rounded-full border-2 border-dashed border-spacing-6 border-accent-blue/50 shadow-[0_0_8px_1px] shadow-accent-blue/30" 
        animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-90 rounded-full border border-accent-red/30 shadow-[0_0_4px_1px] shadow-accent-red/20" />

        <img
          src="../../../public/wallpapersden.com_satoru-gojo-manga-jujutsu-kaisen_2563x1355.jpg"
          alt="Minha Foto"
          className="absolute inset-0 size-full rounded-full object-cover border-4 border-border"
        />

        <MiniOrb variant="red" className="absolute top-[-22%] left-[108%]" />
        <MiniOrb variant="blue" className="absolute top-[108%] left-[-22%]"/>

      </div>
    </div>  
  );
}
