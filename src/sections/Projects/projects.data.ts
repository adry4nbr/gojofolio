export interface Project {
  title: string;
  description: string;
  techs: string[];
  image: string;
  repoUrl: string;
  deployUrl: string;
}

export const projects: Project[] = [
  {
    title: "Planejai",
    description:
      "Educador Financeiro Inteligente desenvolvido com React 19 + TypeScript + Google Gemini API.",
    techs: ["React", "TypeScript", "Gemini API"],
    image: "/projects/Planejai.png",
    repoUrl: "https://github.com/adry4nbr/planejaai",
    deployUrl: "https://planejaai-lake.vercel.app",
  },
  {
    title: "PocketMarket",
    description:
      "Marketplace completo de cartas Pokémon TCG com React, React Router, Axios e Tailwind no frontend.",
    techs: ["React", "React Router", "Axios"],
    image: "/projects/PocketMarket.png",
    repoUrl: "https://github.com/adry4nbr/PocketMarket-Frontend",
    deployUrl: "https://pocketmarket-frontend.vercel.app/",
  },
  {
    title: "Crazy Index",
    description:
      "Um grimório interativo de raças fictícias com sistema de administração, filtros dinâmicos e animação imersiva em formato de livro.",
    techs: ["Next.js", "TypeScript", "Supabase"],
    image: "/projects/CrazyIndex.png",
    repoUrl: "https://github.com/adry4nbr/Crazy_Index",
    deployUrl: "https://crazyindex.vercel.app",
  },
  {
    title: "Countries Explorer",
    description:
      "Uma aplicação para explorar, filtrar e pesquisar informações sobre países de todo o mundo, consumindo dados da REST Countries API.",
    techs: ["Next.js", "TypeScript", "API REST"],
    image: "/projects/Paises.png",
    repoUrl: "https://github.com/adry4nbr/nextjs-countries-challenge",
    deployUrl: "https://nextjs-countries-challenge.vercel.app/",
  },
];
