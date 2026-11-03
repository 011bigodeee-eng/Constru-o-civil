/** Reservado para avaliações reais: não renderizar entradas sem autorização e comprovação. */
export type Testimonial = {
  name: string;
  text: string;
  sourceUrl: string;
  authorized: boolean;
  verified: boolean;
};
export const testimonials: Testimonial[] = [];
