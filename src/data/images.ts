export type ImageAsset = {
  id: string;
  section: string;
  path: string;
  origin: string;
  upstreamRepository: string;
  license: string;
  width: number;
  height: number;
  sourceWidth: number;
  sourceHeight: number;
  ratio: number;
  focalDesktop: string;
  focalMobile: string;
  alt: string;
  illustrative: boolean;
  kind: "reference";
};
export const images: ImageAsset[] = [
  {
    id: "hero",
    section: "hero",
    path: "/images/work-hero.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/bg_1.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 2000,
    height: 1333,
    sourceWidth: 2000,
    sourceHeight: 1333,
    ratio: 1.5003750937734435,
    focalDesktop: "65% 50%",
    focalMobile: "67% 32%",
    alt: "Profissionais com capacetes e coletes conferem uma planta diante de estrutura de concreto em construção",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "about",
    section: "about",
    path: "/images/about.webp",
    origin:
      "https://github.com/themefisher/constra/blob/d75c9a80d13618031f78aa5abbd2c5e3ac592402/theme/images/news/news2.jpg",
    upstreamRepository: "https://github.com/themefisher/constra",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 750,
    height: 450,
    sourceWidth: 750,
    sourceHeight: 450,
    ratio: 1.6666666666666667,
    focalDesktop: "60% 50%",
    focalMobile: "60% 50%",
    alt: "Profissional com capacete analisando uma planta em uma obra",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "process",
    section: "process",
    path: "/images/process.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/image_1.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 1000,
    height: 667,
    sourceWidth: 1000,
    sourceHeight: 667,
    ratio: 1.4992503748125936,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Plantas técnicas, ferramentas e capacete sobre uma mesa de planejamento",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "meeting",
    section: "contact",
    path: "/images/meeting.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/image_4.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 1000,
    height: 667,
    sourceWidth: 1000,
    sourceHeight: 667,
    ratio: 1.4992503748125936,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Três profissionais com capacetes e coletes analisam uma planta no canteiro",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-structure",
    section: "services",
    path: "/images/work-structure.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/work-9.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 700,
    sourceWidth: 800,
    sourceHeight: 700,
    ratio: 1.1428571428571428,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Trabalhadores com capacetes e coletes executam serviços em uma estrutura de concreto",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-renovation",
    section: "services",
    path: "/images/work-renovation.webp",
    origin:
      "https://github.com/Alex-Programming/PAINTER-Website-Template/blob/1d8e7a99720557718b17ed5e3ddca03174c552ef/images/blog-3.jpg",
    upstreamRepository:
      "https://github.com/Alex-Programming/PAINTER-Website-Template",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 500,
    sourceWidth: 800,
    sourceHeight: 500,
    ratio: 1.6,
    focalDesktop: "48% 50%",
    focalMobile: "40% 50%",
    alt: "Pintura de uma parede interna durante a renovação de um ambiente",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-extension",
    section: "services",
    path: "/images/work-extension.webp",
    origin:
      "https://github.com/iani-garfalski/Olympia-Brickwork/blob/19c03baad754d2c3005c4c09880e02728c53931f/vanilla-js-version/public/img/33.jpg",
    upstreamRepository: "https://github.com/iani-garfalski/Olympia-Brickwork",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 1532,
    height: 2048,
    sourceWidth: 1532,
    sourceHeight: 2048,
    ratio: 0.748046875,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Parede de alvenaria em execução junto a uma construção residencial",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-masonry",
    section: "services",
    path: "/images/work-masonry.webp",
    origin:
      "https://github.com/iani-garfalski/Olympia-Brickwork/blob/19c03baad754d2c3005c4c09880e02728c53931f/vanilla-js-version/public/img/35.jpg",
    upstreamRepository: "https://github.com/iani-garfalski/Olympia-Brickwork",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 1950,
    height: 2600,
    sourceWidth: 3024,
    sourceHeight: 4032,
    ratio: 0.75,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Assentamento de blocos cerâmicos em uma parede em construção, com materiais no canteiro",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-coating",
    section: "services",
    path: "/images/work-coating.webp",
    origin:
      "https://github.com/Alex-Programming/PAINTER-Website-Template/blob/1d8e7a99720557718b17ed5e3ddca03174c552ef/images/blog-2.jpg",
    upstreamRepository:
      "https://github.com/Alex-Programming/PAINTER-Website-Template",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 500,
    sourceWidth: 800,
    sourceHeight: 500,
    ratio: 1.6,
    focalDesktop: "45% 50%",
    focalMobile: "35% 50%",
    alt: "Profissional com luvas e roupa de proteção aplica pintura com rolo em uma parede",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-commercial-service",
    section: "services",
    path: "/images/work-commercial-service.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/work-7.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 700,
    sourceWidth: 800,
    sourceHeight: 700,
    ratio: 1.1428571428571428,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Canteiro de uma construção de grande porte com estruturas e guindastes",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-residential",
    section: "projects",
    path: "/images/work-residential.webp",
    origin:
      "https://github.com/iani-garfalski/Olympia-Brickwork/blob/19c03baad754d2c3005c4c09880e02728c53931f/vanilla-js-version/public/img/34.jpg",
    upstreamRepository: "https://github.com/iani-garfalski/Olympia-Brickwork",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 1532,
    height: 2048,
    sourceWidth: 1532,
    sourceHeight: 2048,
    ratio: 0.748046875,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Alvenaria residencial em execução, com blocos e materiais organizados junto à estrutura",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-finishing",
    section: "projects",
    path: "/images/work-finishing.webp",
    origin:
      "https://github.com/Alex-Programming/PAINTER-Website-Template/blob/1d8e7a99720557718b17ed5e3ddca03174c552ef/images/about-1.jpg",
    upstreamRepository:
      "https://github.com/Alex-Programming/PAINTER-Website-Template",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 800,
    sourceWidth: 800,
    sourceHeight: 800,
    ratio: 1.0,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Aplicação de acabamento com rolo de pintura sobre uma parede",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-commercial",
    section: "projects",
    path: "/images/work-commercial.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/work-8.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 700,
    sourceWidth: 800,
    sourceHeight: 700,
    ratio: 1.1428571428571428,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Estruturas de concreto e guindastes em uma construção em andamento",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-completed",
    section: "projects",
    path: "/images/work-completed.webp",
    origin:
      "https://github.com/codewithsadee/realvine/blob/26daa8c33bca9c1270df58a08dc2982af757c6e0/assets/images/property-6.jpg",
    upstreamRepository: "https://github.com/codewithsadee/realvine",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 533,
    sourceWidth: 800,
    sourceHeight: 533,
    ratio: 1.5009380863039399,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Fachada de uma construção finalizada, referência de execução e acabamentos",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-completed-detail",
    section: "projects",
    path: "/images/work-completed-detail.webp",
    origin:
      "https://github.com/codewithsadee/homeverse/blob/24db592aecf03f0caef6b038674ec0e07f91a5dd/assets/images/property-1.jpg",
    upstreamRepository: "https://github.com/codewithsadee/homeverse",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 850,
    height: 650,
    sourceWidth: 850,
    sourceHeight: 650,
    ratio: 1.3076923076923077,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Fachada clara de uma residência finalizada, referência independente de acabamento",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-earthworks",
    section: "projects",
    path: "/images/work-earthworks.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/work-5.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 800,
    height: 700,
    sourceWidth: 800,
    sourceHeight: 700,
    ratio: 1.1428571428571428,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Escavadeira em uma área de preparação de terreno",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-foundations",
    section: "projects",
    path: "/images/work-foundations.webp",
    origin:
      "https://github.com/Arplight/Builderz_Construction/blob/f9d756558cd8c38ff6aef688fde4693b0dfcc435/img/service-1.jpg",
    upstreamRepository: "https://github.com/Arplight/Builderz_Construction",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 400,
    height: 400,
    sourceWidth: 400,
    sourceHeight: 400,
    ratio: 1.0,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Armação de concreto e preparação estrutural em um canteiro",
    illustrative: true,
    kind: "reference",
  },
  {
    id: "work-planning",
    section: "projects",
    path: "/images/work-planning.webp",
    origin:
      "https://github.com/litonsarker369/buildream-Constructor/blob/09e1d5c5305b80c464f24a9b67bda26d4a846ddf/images/image_6.jpg",
    upstreamRepository:
      "https://github.com/litonsarker369/buildream-Constructor",
    license:
      "Fotografia de referência. Autoria e direitos de uso comercial individuais não confirmados; obter autorização ou substituir antes de divulgação comercial.",
    width: 1000,
    height: 667,
    sourceWidth: 1000,
    sourceHeight: 667,
    ratio: 1.4992503748125936,
    focalDesktop: "50% 50%",
    focalMobile: "50% 50%",
    alt: "Mãos revisam uma planta para planejar a execução de uma obra",
    illustrative: true,
    kind: "reference",
  },
];
export const imageById = Object.fromEntries(
  images.map((image) => [image.id, image]),
);
