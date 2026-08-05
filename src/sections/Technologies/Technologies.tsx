import { TechCategory } from "./TechCategory";
import { techCategories } from "./technologies.data";
import { TechnologiesCollisionReveal } from "./TechnologiesCollisionReveal";

export function Technologies() {
  return (
    <section
      id="Technologies"
      className="relative flex flex-col overflow-hidden mt-10"
    >
      <TechnologiesCollisionReveal />
      <div className="mx-4 md:mx-7 mb-6 text-left">
        <p className="my-2 ml-1 text-purple-600">// Stack Técnico</p>
        <h2 className="text-4xl md:text-7xl">Tecnologias</h2>
      </div>

      {/* Grid de categorias: 1 coluna no mobile, 2 colunas no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {techCategories.map((category) => (
          <TechCategory key={category.title} category={category} />
        ))}
      </div>

      <div className="flex items-center gap-4 my-4 px-4 md:px-0">
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-red-500/40 to-transparent" />
        <div className="flex items-center gap-4">
          <span className="rounded-full size-2 bg-red-500 shadow-[0_0_16px_4px] shadow-red-500/60" />
          <span className="rounded-full size-2 bg-purple-600 shadow-[0_0_16px_4px] shadow-purple-600/60" />
          <span className="rounded-full size-2 bg-blue-500 shadow-[0_0_16px_4px] shadow-blue-500/60" />
        </div>
        <div className="flex-1 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />
      </div>
    </section>
  );
}
