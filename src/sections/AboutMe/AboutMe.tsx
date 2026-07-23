import { AboutMeInfo } from "./AboutMeInfo";
import { EnergyBallReveal } from "./EnergyBallReveal";
import { ProfilePhoto } from "./ProfilePhoto";

export function AboutMe() {
  return (
    <section
      id="ABoutMe"
      className="relative flex flex-col h-screen overflow-hidden "
    >
      <EnergyBallReveal />
      <div className="ml-7">
        <p className="mt-5 mb-8 ml-1 text-accent-red">// SOBRE MIM</p>
        <h2 className="text-7xl">Quem sou eu ?</h2>
      </div>
      <div className="grid grid-cols-2 size-full">
        <ProfilePhoto />
        <AboutMeInfo />
      </div>
    </section>
  );
}
