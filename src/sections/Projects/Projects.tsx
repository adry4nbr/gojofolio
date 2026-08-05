import { motion } from "motion/react";
import { ProjectsEnergyBallReveal } from "./ProjectsEnergyBallReveal";
import { cardVariants, gridVariants } from "./projects.animations";
import { projects } from "./projects.data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="Projects"
      className="relative flex flex-col overflow-hidden mb-4"
    >
      <ProjectsEnergyBallReveal />
      <div className="mx-4 md:mx-7">
        <p className="my-2 ml-1 text-accent-blue">// Meus Projetos</p>

        <h2 className="text-4xl md:text-7xl">Trabalhos</h2>

        <div className="w-[20%] md:w-[7%] h-1 bg-linear-to-r from-accent-blue to-accent-red mt-4 mb-8" />

        <p className="text-base md:text-xl font-stretch-semi-expanded text-foreground w-full md:w-[45%]">
          Confira alguns dos projetos que desenvolvi — Cada um com propósito e
          uma nova habilidade adquirida.
        </p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              variants={cardVariants}
              custom={index % 3}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
