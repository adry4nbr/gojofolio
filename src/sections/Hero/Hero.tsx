import { Button } from "../../components/ui/Button";
import { ThemeToggle } from "../../components/ui/ThemeToggle";
import { ScrollIndicator } from "./ScrollIndicator";
import { SixEyesIcon } from "./SixEyesIcon";

export function Hero() {
  return (
    <section id="Hero" className="flex flex-col justify-center items-center">
      <ThemeToggle />
      <SixEyesIcon />
      <h1>Portfolio</h1>
      <p>Desenvolvedor...</p>
      <div className="flex gap-4">
        <Button variant="filled"> Projetos </Button>
        <Button variant="outline"> Contatos </Button>
      </div>
      <ScrollIndicator />
    </section>
  );
}
