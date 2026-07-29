import { Button } from "../../components/ui/Button";
import { StatCard } from "../../components/ui/StatCard";

const stats = [
  { value: "3+", label: "Anos de Experiência" },
  { value: "20+", label: "Projetos Concluídos" },
  { value: "15+", label: "Tecnologias" },
  { value: "10+", label: "Clientes Satisfeitos" },
];

export function AboutMeInfo() {
  return (
    <div className="flex flex-col size-full justify-center px-16 gap-6">
      <div className="flex flex-col gap-4">
        <p className="text-xl font-medium text-foreground">
          Sou um desenvolvedor web apaixonado por criar experiências digitais
          que combinam design elegante com código limpo e eficiente. Acredito
          que a tecnologia deve ser tanto funcional quanto bela.
        </p>
        <p className="text-xl font-medium text-foreground">
          Com foco em desenvolvimento front-end e back-end, transformo ideias em
          produtos digitais robustos — desde interfaces responsivas até APIs
          escaláveis.
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

      <Button className="w-fit" variant="filled">
        Entrar em Contato
      </Button>
    </div>
  );
}
