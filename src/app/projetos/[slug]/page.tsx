import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Header from "@/components/header";
import { Photo, Eyebrow, ContactLink, Footer } from "@/components/shared";
import { Gallery } from "@/components/portfolio";
import { FloatingContact } from "@/components/forms";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  return {
    title: p ? `${p.name} — projeto ilustrativo` : "Projeto não encontrado",
    description: p?.description,
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const p = projects[index],
    next = projects[(index + 1) % projects.length];
  return (
    <>
      <Header />
      <main id="main" className="project-page">
        <section className="project-hero">
          <Photo
            id={p.image}
            alt={`${p.name}: referência ilustrativa de construção civil`}
            priority
          />
          <div className="project-hero-copy">
            <Eyebrow number={`0${index + 1}`}>
              {p.category} / {p.stage}
            </Eyebrow>
            <h1>{p.name}</h1>
            <p>Projeto ilustrativo · Não é uma obra executada pela Silvestre</p>
          </div>
        </section>
        <section className="section-pad">
          <div className="project-intro">
            <div>
              <Eyebrow number="SC">Execução em foco</Eyebrow>
              <p>{p.description}</p>
              <span className="demo-note">
                Nomes e características demonstrativos. As imagens são geradas
                por IA e não documentam um projeto real.
              </span>
            </div>
            <div className="project-features">
              {p.features.map((f) => (
                <span key={f}>{f}</span>
              ))}
            </div>
          </div>
          <h2>
            Etapas e detalhes.
            <br />
            <em>Construção de verdade.</em>
          </h2>
          <Gallery images={p.gallery} title={p.name} />
          <div className="project-nav">
            <Link href="/#projetos">
              <ArrowLeft size={16} /> Todos os projetos
            </Link>
            <ContactLink
              message={`Olá, Silvestre! Gostei da referência ilustrativa ${p.name} e gostaria de conversar sobre meu projeto.`}
            >
              Quero conversar sobre minha obra
            </ContactLink>
            <Link href={`/projetos/${next.slug}`}>
              Próximo projeto <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
