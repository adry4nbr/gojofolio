import type { ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss,
  SiPython,
  SiPhp,
  SiOpenjdk,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPrisma,
  SiJsonwebtokens,
  SiPassport,
  SiGoogle,
  SiSupabase,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiPostman,
  SiDocker,
  SiJest,
  SiClaude,
  SiGooglegemini,
  SiTrello,
  SiNotion,
  SiFigma,
  SiVite,
} from "@icons-pack/react-simple-icons";

export interface Tech {
  name: string;
  icon: ComponentType<{ size?: number; color?: string }>;
}

export interface TechCategoryData {
  title: string;
  accentColor: string;
  techs: Tech[];
}

export const techCategories: TechCategoryData[] = [
  {
    title: "FRONT-END",
    accentColor: "--blue-500",
    techs: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
    ],
  },
  {
    title: "FERRAMENTAS",
    accentColor: "--purple-600",
    techs: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Postman", icon: SiPostman },
      { name: "Docker", icon: SiDocker },
      { name: "Jest", icon: SiJest },
      { name: "Claude", icon: SiClaude },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "Figma", icon: SiFigma },
      { name: "Trello", icon: SiTrello },
      { name: "Notion", icon: SiNotion },
    ],
  },
  {
    title: "BACK-END",
    accentColor: "--red-500",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Passport", icon: SiPassport },
      { name: "Google OAuth", icon: SiGoogle },
      { name: "Python", icon: SiPython },
      { name: "PHP", icon: SiPhp },
      { name: "Java", icon: SiOpenjdk },
    ],
  },
  {
    title: "BANCO DE DADOS",
    accentColor: "--pink-500",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Supabase", icon: SiSupabase },
    ],
  },
];
