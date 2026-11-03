export type ImageAsset = {
  id: string;
  section: string;
  path: string;
  origin: string;
  upstreamRepository: string;
  license: string;
  width: number;
  height: number;
  ratio: number;
  focalDesktop: string;
  focalMobile: string;
  alt: string;
  illustrative: boolean;
  kind: "reference" | "ai-render";
};
export const images: ImageAsset[] = [
  {
    id: "hero",
    section: "hero",
    path: "/images/hero.webp",
    origin: "Gerada para esta demonstração com OpenAI Image Generation",
    upstreamRepository: "",
    license:
      "Imagem gerada por IA para a prévia. Não retrata obra real, cliente ou imóvel da empresa.",
    width: 1774,
    height: 887,
    ratio: 2,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Visualização arquitetônica gerada por IA: residência contemporânea de concreto e vidro ao anoitecer",
    illustrative: true,
    kind: "ai-render",
  },
  {
    id: "about",
    section: "about",
    path: "/images/about.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/news/news2.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 750,
    height: 450,
    ratio: 1.667,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Profissional com capacete analisando uma planta em uma obra",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "house",
    section: "projects",
    path: "/images/house.webp",
    origin:
      "https://github.com/bedimcode/responsive-real-state-website/blob/4da3a9eb4f1c71aea5422f59c476cb742c5f1658/assets/img/popular1.jpg",
    upstreamRepository:
      "https://github.com/bedimcode/responsive-real-state-website",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 540,
    height: 427,
    ratio: 1.265,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Residência contemporânea com volumes escuros e iluminação interna",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "interior",
    section: "services",
    path: "/images/interior.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/about-banner-2.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 800,
    height: 570,
    ratio: 1.404,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Sala contemporânea iluminada por uma ampla janela",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "facade",
    section: "projects",
    path: "/images/facade.webp",
    origin:
      "https://github.com/codewithsadee/realvine/blob/26daa8c33bca9c1270df58a08dc2982af757c6e0/assets/images/property-6.jpg",
    upstreamRepository: "https://github.com/codewithsadee/realvine",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 800,
    height: 533,
    ratio: 1.501,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Fachada contemporânea de linhas retas e varanda",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "commercial",
    section: "projects",
    path: "/images/commercial.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/projects/project3.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 750,
    height: 600,
    ratio: 1.25,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Edificação com estrutura metálica e grandes superfícies de vidro",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "material",
    section: "services",
    path: "/images/material.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/slider-main/bg2.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 1600,
    height: 800,
    ratio: 2,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Capacete de proteção em um canteiro de obras",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "detail",
    section: "projects",
    path: "/images/detail.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/property-2.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 850,
    height: 650,
    ratio: 1.308,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Interior com revestimentos e iluminação em tons neutros",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "living",
    section: "projects",
    path: "/images/living.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/property-3.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 850,
    height: 650,
    ratio: 1.308,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Ambiente residencial com escada e espaços integrados",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "renovation",
    section: "projects",
    path: "/images/renovation.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/blog-3.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 800,
    height: 570,
    ratio: 1.404,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Varanda iluminada integrada ao interior",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "process",
    section: "process",
    path: "/images/process.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/slider-pages/slide-page3.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 555,
    height: 330,
    ratio: 1.682,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Plantas técnicas e ferramentas de planejamento sobre uma mesa",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "meeting",
    section: "contact",
    path: "/images/meeting.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/slider-pages/slide-page2.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença específica da fotografia não confirmadas. Uso em prévia; revisar ou substituir antes de divulgação comercial.",
    width: 555,
    height: 330,
    ratio: 1.682,
    focalDesktop: "50% 50%",
    focalMobile: "60% 50%",
    alt: "Aperto de mãos durante um encontro profissional sobre construção",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "service-house",
    section: "services",
    path: "/images/service-house.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/property-1.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença fotográfica individual não confirmadas. Revisar ou substituir antes de divulgação comercial.",
    width: 850,
    height: 650,
    ratio: 1.3076923076923077,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Residência de referência de dois pavimentos e fachada clara",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "service-interior",
    section: "services",
    path: "/images/service-interior.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/blog-1.png",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença fotográfica individual não confirmadas. Revisar ou substituir antes de divulgação comercial.",
    width: 854,
    height: 614,
    ratio: 1.3908794788273615,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Sala em tons de cinza, referência de reforma de interiores",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "service-facade",
    section: "services",
    path: "/images/service-facade.webp",
    origin:
      "https://github.com/codewithsadee/realvine/blob/26daa8c33bca9c1270df58a08dc2982af757c6e0/assets/images/property-5.jpg",
    upstreamRepository: "https://github.com/codewithsadee/realvine",
    license:
      "Autoria e licença fotográfica individual não confirmadas. Revisar ou substituir antes de divulgação comercial.",
    width: 800,
    height: 533,
    ratio: 1.5009380863039399,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Residência de referência com telhado inclinado e jardim",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "service-detail",
    section: "services",
    path: "/images/service-detail.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/blog-3.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Autoria e licença fotográfica individual não confirmadas. Revisar ou substituir antes de divulgação comercial.",
    width: 800,
    height: 570,
    ratio: 1.4035087719298245,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Varanda com acabamentos contemporâneos",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "service-commercial",
    section: "services",
    path: "/images/service-commercial.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/projects/project6.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença fotográfica individual não confirmadas. Revisar ou substituir antes de divulgação comercial.",
    width: 750,
    height: 600,
    ratio: 1.25,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Edifício comercial com fachada de vidro",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "atelier",
    section: "projects",
    path: "/images/atelier.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/projects/project1.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Autoria e licença fotográfica individual não confirmadas. Revisar ou substituir antes de divulgação comercial.",
    width: 750,
    height: 600,
    ratio: 1.25,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Arquitetura comercial com estrutura e superfícies de vidro",
    illustrative: true,
    kind: "reference",
  },
];
export const imageById = Object.fromEntries(
  images.map((image) => [image.id, image]),
);
