import { AboutMeInfo } from "./AboutMeInfo";
import { AboutMeEnergyBallReveal } from "./AboutMeEnergyBallReveal";
import { ProfilePhoto } from "./AboutMePhoto";

export function AboutMe() {
  return (
    <section
      id="ABoutMe"
      className="relative flex flex-col h-screen my-10 pb-6 overflow-hidden"
    >
      <AboutMeEnergyBallReveal />
      <div className="ml-7">
        <p className="my-2 ml-1 text-accent-red">// SOBRE MIM</p>
        <h2 className="text-7xl">Quem sou eu ?</h2>
      </div>
      <div className="grid grid-cols-2 size-full">
        <ProfilePhoto />
        <AboutMeInfo />
      </div>
    </section>
  );
}
