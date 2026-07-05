import { Button } from "../../components/ui/Button";
import { ScrollIndicator } from "./ScrollIndicator";
import { SixEyesIcon } from "./SixEyesIcon";

export function Hero() {
  return (
    <section
      id="Hero"
      className="flex flex-col justify-center items-center h-screen"
    >
      <SixEyesIcon />
      <h1 className="text-9xl my-2">Portfolio</h1>
      <h2 className="text-4xl mb-7">Desenvolvedor...</h2>
      <div className="flex gap-5 mb-24">
        <Button variant="filled"> Ver Projetos </Button>
        <Button variant="outline"> Contato </Button>
      </div>
      <ScrollIndicator />
    </section>
  );
}
