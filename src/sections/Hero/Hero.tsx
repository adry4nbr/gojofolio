import { Button } from "../../components/ui/Button";
import { ScrollIndicator } from "./ScrollIndicator";
import { SixEyesIcon } from "./SixEyesIcon";

export function Hero() {
  return (
    <section
      id="Hero"
      className="relative flex flex-col justify-center items-center h-screen gap-1 overflow-hidden"
    >
      <div
        className="absolute w-80 h-80 pointer-events-none"
        style={{ background: "var(--hero-glow)", filter: "blur(120px)" }}
      />
      <SixEyesIcon />
      <h1 className="text-9xl my-6 z-1">Portfolio</h1>
      <p className="text-4xl mb-8 z-1 font-light">
        Adryan | Desenvolvedor Front-End | O Mais Honrado
      </p>
      <div className="flex gap-5 mb-24">
        <Button variant="filled"> Ver Projetos </Button>
        <Button variant="outline"> Contato </Button>
      </div>
      <ScrollIndicator />
    </section>
  );
}
