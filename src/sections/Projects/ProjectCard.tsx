// sections/Projects/ProjectCard.tsx
import { motion } from "motion/react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { ExternalLink } from "lucide-react";
import type { Variants } from "motion/react";
import type { Project } from "./projects.data";
import {
  techsContainerVariants,
  techBadgeVariants,
  loadingBarVariants,
} from "./projects.animations";

interface ProjectCardProps {
  project: Project;
  variants: Variants;
  custom: number;
}

export function ProjectCard({ project, variants, custom }: ProjectCardProps) {
  const { title, description, techs, image, repoUrl, deployUrl } = project;

  return (
    <motion.div
      variants={variants}
      custom={custom}
      className=" group flex flex-col rounded-2xl overflow-hidden bg-background border-2 border-border transition-transform duration-900 ease-out hover:-translate-y-4 "
    >
      {/* Imagem + overlay de hover */}
      <div className="relative overflow-hidden group-hover:scale-105 transition-all duration-700">
        <img
          src={image}
          alt={`Captura de tela do projeto ${title}`}
          className="w-full h-72 object-cover "
        />
        <div
          className="absolute inset-0 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 "
          style={{ background: "var(--project-overlay-gradient)" }}
        >
          <a
            href={deployUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Deploy do projeto ${title}`}
            className="flex items-center justify-center w-12 h-12 rounded-full
                bg-accent-blue text-background hover:scale-120
                transition-transform duration-300"
          >
            <ExternalLink size={20} />
          </a>
          <a
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Repositório do projeto ${title}`}
            className="flex items-center justify-center w-12 h-12 rounded-full
                text-background bg-foreground hover:scale-120
                transition-transform duration-300"
          >
            <SiGithub size={20} />
          </a>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="mt-2 text-foreground/80 flex-1">{description}</p>

        {/* Badges em cascata + barra de loading */}
        <div className="flex flex-col gap-4 mt-4">
          <motion.div
            variants={techsContainerVariants}
            className="flex flex-wrap gap-2"
          >
            {techs.map((tech) => (
              <motion.span
                key={tech}
                variants={techBadgeVariants}
                className="px-3 py-1 rounded-full text-sm bg-foreground text-background"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            variants={loadingBarVariants}
            className="h-1 origin-left rounded-full bg-linear-to-r from-accent-blue to-accent-red"
          />
        </div>
      </div>
    </motion.div>
  );
}
