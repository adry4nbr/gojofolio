import { Button } from "../../components/ui/Button";
import { StatCard } from "./StatCard";

const stats = [
  { value: "1+", label: "Ano de Experiência Prática" },
  { value: "5+", label: "Projetos Concluídos" },
  { value: "32+", label: "Tecnologias" },
  { value: "8+", label: "Cursos de Tecnologia" },
];

export function AboutMeInfo() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col size-full justify-center px-6 md:px-16 gap-8 md:gap-6 mt-8 md:mt-0">
      <div className="flex flex-col gap-4 text-left ">
        <p className="text-sm md:text-xl font-medium text-foreground">
          Sou um desenvolvedor Full-Stack em formação, com foco no ecossistema
          Js/Ts e Node, construo desde componentes responsivos até aplicações
          completas.
        </p>
        <p className="text-sm md:text-xl font-medium text-foreground">
          No ecossistema Js/Ts e Node utilizo React/Next.js no Front-end e
          NestJS/Prisma no Back-end. E fiquei em 1° lugar no Hackathon da
          Uninassau.
        </p>
      </div>

      <div className="relative w-[95%] h-px bg-linear-to-r from-accent-red to-accent-blue block">
        <span className="absolute -right-6 md:-right-8 leading-none top-1/2 -translate-y-1/2 text-accent-red text-sm md:text-lg">
          ◆
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      <Button onClick={() => scrollToSection("Contact")} variant="filled">
        Entrar em Contato
      </Button>
    </div>
  );
}
