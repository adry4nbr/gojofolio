// technologies.data.ts
import type { ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiCss,
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiFigma,
  SiLinux,
} from "@icons-pack/react-simple-icons";

export interface Tech {
  name: string;
  icon: ComponentType<{ size?: number; color?: string }>;
}

export interface TechCategoryData {
  title: string;
  techs: Tech[];
}

export const techCategories: TechCategoryData[] = [
  {
    title: "FRONT-END",
    techs: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "BACK-END",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "BANCO DE DADOS",
    techs: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "FERRAMENTAS",
    techs: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "Figma", icon: SiFigma },
      { name: "Linux", icon: SiLinux },
    ],
  },
];
