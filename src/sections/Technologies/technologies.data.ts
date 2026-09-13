import type { ComponentType } from "react";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiAngular,
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
  SiSpringboot,
  SiHibernate,
  SiFlyway,
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
  SiApachemaven,
  SiJest,
  SiJunit5,
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
    title: "BACK-END",
    accentColor: "--red-500",
    techs: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Express", icon: SiExpress },
      { name: "Prisma", icon: SiPrisma },
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Hibernate", icon: SiHibernate },
      { name: "Flyway", icon: SiFlyway },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "Passport", icon: SiPassport },
      { name: "Google OAuth", icon: SiGoogle },
      { name: "Python", icon: SiPython },
      { name: "PHP", icon: SiPhp },
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
      { name: "Maven", icon: SiApachemaven },
      { name: "Jest", icon: SiJest },
      { name: "JUnit", icon: SiJunit5 },
      { name: "Claude", icon: SiClaude },
      { name: "Google Gemini", icon: SiGooglegemini },
      { name: "Figma", icon: SiFigma },
      { name: "Trello", icon: SiTrello },
      { name: "Notion", icon: SiNotion },
    ],
  },
  {
    title: "FRONT-END",
    accentColor: "--blue-500",
    techs: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Vite", icon: SiVite },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
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
