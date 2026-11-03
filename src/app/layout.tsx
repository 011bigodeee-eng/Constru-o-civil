import type { Metadata, Viewport } from "next";
import "./globals.css";
import localFont from "next/font/local";
const space = localFont({
  src: "../../public/fonts/space-grotesk.woff2",
  variable: "--font-space",
  display: "swap",
});
const inter = localFont({
  src: "../../public/fonts/inter.woff2",
  variable: "--font-inter",
  display: "swap",
});
import { company } from "@/config/company";
export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  title: {
    default: "Silvestre Construção Civil | Piracicaba",
    template: "%s | Silvestre Construção Civil",
  },
  description:
    "Qualidade, segurança e compromisso em cada etapa do seu projeto. Converse com Silvestre Construção Civil em Piracicaba, São Paulo.",
  openGraph: {
    title: "Silvestre Construção Civil",
    description: "Construímos mais que obras. Construímos confiança.",
    locale: "pt_BR",
    type: "website",
    images: ["/images/hero.jpg"],
  },
  robots: company.demoMode
    ? { index: false, follow: false }
    : { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#111315" };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${space.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
