import { TechCategory } from "./TechCategory";
import { techCategories } from "./technologies.data";
import { TechnologiesCollisionReveal } from "./TechnologiesCollisionReveal";

export function Technologies() {
  return (
    <section
      id="Technologies"
      className="relative flex flex-col h-screen overflow-hidden"
    >
      <TechnologiesCollisionReveal />
      <div className="mx-7">
        <p className="my-2 ml-1 text-purple-600">// Stack Técnico</p>
        <h2 className="text-7xl">Tecnologias</h2>
      </div>

      <div className="grid grid-cols-2">
        {techCategories.map((category) => (
          <TechCategory key={category.title} category={category} />
        ))}
      </div>
    </section>
  );
}
