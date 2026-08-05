import { AboutMeInfo } from "./AboutMeInfo";
import { AboutMeEnergyBallReveal } from "./AboutMeEnergyBallReveal";
import { AboutMePhoto } from "./AboutMePhoto";

export function AboutMe() {
  return (
    <section
      id="ABoutMe"
      className="relative flex flex-col md:my-10 pb-12 overflow-hidden"
    >
      <AboutMeEnergyBallReveal />

      <div className="ml-4 md:ml-7 mt-10 md:mt-0 text-left">
        <p className="my-2 ml-1 text-accent-red">// SOBRE MIM</p>
        <h2 className="text-4xl md:text-7xl">Quem sou eu ?</h2>
      </div>

      <div className="flex flex-col md:grid md:grid-cols-2 size-full mt-10 md:mt-0 gap-10 md:gap-0">
        <AboutMePhoto />
        <AboutMeInfo />
      </div>
    </section>
  );
}
