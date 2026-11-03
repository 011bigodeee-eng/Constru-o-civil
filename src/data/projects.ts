export type Category = "Residencial" | "Comercial" | "Reformas";
export const constructionStages = [
  "Obras em andamento",
  "Etapas construtivas",
  "Acabamentos",
  "Resultados finais",
] as const;
export type ConstructionStage = (typeof constructionStages)[number];
export type Project = {
  stage: ConstructionStage;
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
    stage: "Obras em andamento",
    image: "work-residential",
    gallery: ["work-residential", "work-structure"],
    description:
      "Referências de uma construção residencial em execução: estrutura, organização do canteiro e etapas que antecedem o acabamento. Imagens geradas por IA, sem vínculo com obras da Silvestre.",
    features: [
      "Estrutura residencial",
      "Organização do canteiro",
      "Execução em andamento",
    ],
  },
  {
    slug: "espaco-essencia",
    name: "Espaço Essência",
    category: "Reformas",
    stage: "Acabamentos",
    image: "work-finishing",
    gallery: ["work-finishing", "work-renovation"],
    description:
      "A execução de uma reforma passa pela preparação das superfícies e pelo cuidado na aplicação dos materiais. Seleção ilustrativa de serviços em andamento.",
    features: [
      "Preparação de superfícies",
      "Aplicação de materiais",
      "Reforma em execução",
    ],
  },
  {
    slug: "edificio-vertice",
    name: "Edifício Vértice",
    category: "Comercial",
    stage: "Obras em andamento",
    image: "work-commercial",
    gallery: ["work-commercial", "work-structure"],
    description:
      "Estruturas de concreto e movimentação de materiais mostram a dimensão prática da construção comercial. Referências demonstrativas de canteiros distintos.",
    features: [
      "Estruturas de concreto",
      "Logística do canteiro",
      "Construção comercial",
    ],
  },
  {
    slug: "residencia-patio",
    name: "Residência Pátio",
    category: "Residencial",
    stage: "Resultados finais",
    image: "work-completed",
    gallery: ["work-completed", "work-completed-detail"],
    description:
      "Uma referência de construção residencial finalizada, para observar fachadas e acabamentos. Não há registro correspondente do antes e durante desta mesma obra.",
    features: [
      "Fachada concluída",
      "Detalhes de acabamento",
      "Resultado ilustrativo",
    ],
  },
  {
    slug: "novos-ares",
    name: "Novos Ares",
    category: "Reformas",
    stage: "Acabamentos",
    image: "work-coating",
    gallery: ["work-coating", "work-masonry"],
    description:
      "Revestimentos e alvenaria exigem preparação, alinhamento e atenção durante a execução. Imagens ilustrativas de etapas independentes.",
    features: ["Alvenaria", "Revestimentos", "Cuidado na execução"],
  },
  {
    slug: "atelier-aberto",
    name: "Ateliê Aberto",
    category: "Comercial",
    stage: "Etapas construtivas",
    image: "work-earthworks",
    gallery: ["work-earthworks", "work-planning"],
    description:
      "Preparar o terreno, planejar e organizar a execução são partes do caminho da obra. Esta seleção apresenta referências de etapas construtivas sem simular uma evolução documentada.",
    features: [
      "Preparação do terreno",
      "Planejamento da obra",
      "Etapas construtivas",
    ],
  },
];
