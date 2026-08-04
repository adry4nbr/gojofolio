import { Button } from "../../components/ui/Button";
import { StatCard } from "./StatCard";

const stats = [
  { value: "1+", label: "Ano de Experiência Prática" },
  { value: "5+", label: "Projetos Concluídos" },
  { value: "26+", label: "Tecnologias" },
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
    <div className="flex flex-col size-full justify-center px-16 gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-medium text-foreground">
          Sou um desenvolvedor front-end em formação, apaixonado por criar
          interfaces criativas e inclusivas que fazem diferença para pessoas
          reais. Com essa mentalidade ganhei o Hackathon da Uninassau em
          primeiro lugar.
        </p>
        <p className="text-xl font-medium text-foreground">
          Com foco no ecossistema React/Next.js, construo desde componentes
          responsivos até aplicações completas. Também possuo experiência
          prática integrando APIs REST e gerenciando bancos de dados com
          Supabase e Java.
        </p>
      </div>
      {/* Linha separadora */}
      <div className="relative w-[95%] h-px bg-linear-to-r from-accent-red to-accent-blue">
        <span className="absolute -right-8 leading-none top-1/2 -translate-y-1/2 text-accent-red text-lg">
          ◆
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>

      <Button
        onClick={() => scrollToSection("Contact")}
        className="w-fit"
        variant="filled"
      >
        Entrar em Contato
      </Button>
    </div>
  );
}
