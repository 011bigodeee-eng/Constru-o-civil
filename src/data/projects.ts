export type Category = "Residencial" | "Comercial" | "Reformas";
export type Project = {
  slug: string;
  name: string;
  category: Category;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
};
export const projects: Project[] = [
  {
    slug: "casa-horizonte",
    name: "Casa Horizonte",
    category: "Residencial",
    image: "house",
    gallery: ["house", "living"],
    description:
      "Uma referência de volumes puros, luz natural e conexão com o exterior. Uma maneira de imaginar a casa como um lugar de pausa.",
    features: [
      "Linhas contemporâneas",
      "Integração dos ambientes",
      "Luz natural",
    ],
  },
  {
    slug: "espaco-essencia",
    name: "Espaço Essência",
    category: "Reformas",
    image: "interior",
    gallery: ["interior", "detail"],
    description:
      "Materiais, texturas e novas perspectivas para transformar a forma de viver um ambiente.",
    features: [
      "Paleta de materiais",
      "Ambientes integrados",
      "Detalhes de acabamento",
    ],
  },
  {
    slug: "edificio-vertice",
    name: "Edifício Vértice",
    category: "Comercial",
    image: "commercial",
    gallery: ["commercial", "meeting"],
    description:
      "Uma composição arquitetônica que explora a relação entre forma, função e identidade.",
    features: [
      "Identidade arquitetônica",
      "Circulação dos espaços",
      "Uso comercial",
    ],
  },
  {
    slug: "residencia-patio",
    name: "Residência Pátio",
    category: "Residencial",
    image: "facade",
    gallery: ["facade", "hero"],
    description:
      "O encontro entre espaços de convivência e a arquitetura residencial contemporânea.",
    features: [
      "Áreas de convivência",
      "Relação com o exterior",
      "Composição de fachada",
    ],
  },
  {
    slug: "novos-ares",
    name: "Novos Ares",
    category: "Reformas",
    image: "detail",
    gallery: ["detail", "renovation"],
    description:
      "Uma seleção de referências para explorar acabamentos e renovar a atmosfera de um imóvel.",
    features: [
      "Renovação de interiores",
      "Texturas e acabamentos",
      "Iluminação",
    ],
  },
  {
    slug: "atelier-aberto",
    name: "Ateliê Aberto",
    category: "Comercial",
    image: "atelier",
    gallery: ["meeting", "process"],
    description:
      "Uma referência de espaço profissional que valoriza os encontros, as ideias e o trabalho.",
    features: [
      "Espaços de encontro",
      "Flexibilidade de uso",
      "Conforto visual",
    ],
  },
];
