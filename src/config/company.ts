export const company = {
  name: "Silvestre Construção Civil",
  responsible: "Silvestre Ferreira",
  phone: "(19) 98906-0658",
  whatsapp: "5519989060658",
  city: "Piracicaba",
  state: "São Paulo",
  logo: null as string | null,
  demoMode: true,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
};
export function whatsapp(
  message = "Olá, Silvestre! Gostaria de conversar sobre meu projeto e solicitar um orçamento.",
) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
