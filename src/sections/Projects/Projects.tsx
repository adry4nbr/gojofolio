import { ProjectsEnergyBallReveal } from "./ProjectsEnergyBallReveal";

export function Projects() {
  return (
    <section
      id="Projects"
      className="relative flex flex-col h-screen overflow-hidden"
    >
      <ProjectsEnergyBallReveal />
      <div className="ml-7">
        <p className="my-2 ml-1 text-accent-blue">// Meus Projetos</p>
        <h2 className="text-7xl">Trabalhos</h2>
        <div className="w-[7%] h-1 bg-linear-to-r from-accent-blue to-accent-red mt-4 mb-8" />
        <p className="text-xl font-stretch-semi-expanded text-foreground w-[45%]">
          Confira alguns dos projetos que desenvolvi — Cada um com propósito e
          uma nova habilidade adquirida.
        </p>
      </div>
    </section>
  );
}
