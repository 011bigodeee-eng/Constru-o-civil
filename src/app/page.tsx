import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  ShieldCheck,
  Layers,
  Compass,
  MapPin,
  Check,
} from "lucide-react";
import Header from "@/components/header";
import { Photo, Eyebrow, ContactLink, Footer } from "@/components/shared";
import { Intro, Motion, Architecture } from "@/components/experience";
import Portfolio from "@/components/portfolio";
import { QuoteWizard, QuickForm, FloatingContact } from "@/components/forms";
import Comparison from "@/components/comparison";
import { services } from "@/data/services";
import { faq } from "@/data/faq";
import { company, whatsapp } from "@/config/company";
export default function Home() {
  return (
    <>
      <Intro />
      <Header />
      <main id="main">
        <section id="inicio" className="hero">
          <Photo
            className="hero-image"
            id="hero"
            alt="Fotografia ilustrativa de profissionais com capacetes e coletes em uma estrutura de concreto em construção."
            priority
          />
          <div className="hero-shade" />
          <div className="hero-topline">
            <span>DA FUNDAÇÃO AO ACABAMENTO.</span>
            <span>
              PIRACICABA / SP <i />
            </span>
          </div>
          <div className="hero-copy">
            <p className="eyebrow">
              <i />
              CONSTRUÇÃO DE VERDADE.
            </p>
            <h1>
              Construímos
              <br />
              mais que obras.
              <br />
              <em>
                Construímos
                <br />
                confiança.
              </em>
            </h1>
            <p className="hero-description">
              Qualidade, segurança e compromisso
              <br />
              na construção e na reforma da sua obra.
            </p>
            <div className="hero-actions">
              <Link href="#orcamento" className="button">
                Solicitar orçamento <ArrowUpRight size={18} />
              </Link>
              <Link href="#servicos" className="outline-button">
                Conhecer serviços <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="hero-bottom">
            <a href="#sobre">
              <ArrowDown size={18} /> CONHEÇA NOSSO TRABALHO
            </a>
            <span>01 — FUNDAÇÃO. ESTRUTURA. ACABAMENTO.</span>
            <span className="hero-photo-note">
              Obra em execução · Imagem ilustrativa
            </span>
          </div>
          <div className="hero-side">TRANQUILIDADE · QUALIDADE · SEGURANÇA</div>
        </section>
        <div className="values-strip">
          <span>Da fundação ao acabamento. Construção de verdade.</span>
          <p>
            Tranquilidade <i /> Qualidade <i /> Segurança{" "}
            <ArrowUpRight size={20} />
          </p>
        </div>
        <section id="sobre" className="about section-pad">
          <div className="about-visual reveal">
            <Photo
              id="about"
              alt="Referência visual de profissionais e do universo da construção civil"
            />
            <span className="image-note">
              Imagem ilustrativa · não representa a equipe
            </span>
            <div className="about-seal">
              <Compass size={26} />
              <span>
                BASES SÓLIDAS.
                <br />
                CUIDADO NA EXECUÇÃO.
              </span>
            </div>
          </div>
          <div className="about-copy reveal">
            <Eyebrow number="01">A Silvestre</Eyebrow>
            <h2>
              Seu projeto merece
              <br />
              confiança.
              <br />
              <em>Do início ao fim.</em>
            </h2>
            <p className="lead">
              Cada obra começa com uma decisão importante. E com alguém em quem
              confiar.
            </p>
            <p>
              A Silvestre Construção Civil tem como valores a tranquilidade, a
              qualidade e a segurança. Nossa proposta é oferecer soluções em
              construção civil com atenção às necessidades de cada projeto.
            </p>
            <div className="about-values">
              <span>
                <Check size={15} /> Tranquilidade
              </span>
              <span>
                <Check size={15} /> Qualidade
              </span>
              <span>
                <Check size={15} /> Segurança
              </span>
            </div>
            <ContactLink className="text-link">
              Converse com a Silvestre
            </ContactLink>
          </div>
        </section>
        <section id="servicos" className="services section-pad">
          <div className="section-heading reveal">
            <div>
              <Eyebrow number="02">O que podemos construir</Eyebrow>
              <h2>
                Execução em
                <br />
                <em>cada etapa da obra.</em>
              </h2>
            </div>
            <div>
              <p>
                Construção, reformas e acabamentos.
                <br />
                Conheça as etapas para tirar
                <br />
                sua ideia do papel.
              </p>
              <span className="demo-note">
                Catálogo demonstrativo · serviços a confirmar
              </span>
            </div>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <article className={`service service-${i} reveal`} key={s.name}>
                <Photo
                  id={s.image}
                  alt={`Referência ilustrativa de ${s.name.toLowerCase()}`}
                />
                <div className="service-shade" />
                <span className="service-number">0{i + 1} /</span>
                <div className="service-copy">
                  <h3>{s.name}</h3>
                  <p>{s.description}</p>
                  <ContactLink
                    className="service-link"
                    message={`Olá, Silvestre! ${s.cta}. Podemos conversar sobre esse serviço?`}
                  >
                    {s.cta}
                  </ContactLink>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section id="projetos" className="portfolio section-pad">
          <div className="section-heading reveal">
            <div>
              <Eyebrow number="03">Obras & etapas construtivas</Eyebrow>
              <h2>
                Da estrutura
                <br />
                <em>ao resultado final.</em>
              </h2>
            </div>
            <div>
              <p>
                Referências de execução.
                <br />
                Canteiro, estrutura e acabamento:
                <br />
                cada etapa faz a diferença.
              </p>
              <span className="demo-note">
                Imagens ilustrativas · não são obras da Silvestre
              </span>
            </div>
          </div>
          <Portfolio />
          <div className="portfolio-cta">
            <p>
              O que você precisa
              <br />
              <strong>construir ou reformar?</strong>
            </p>
            <ContactLink
              className="outline-button"
              message="Olá, Silvestre! Vi as referências de execução no site e gostaria de conversar sobre minha obra."
            >
              Quero conversar sobre minha obra
            </ContactLink>
          </div>
        </section>
        <Architecture />
        <section className="process section-pad" id="processo">
          <div className="process-heading reveal">
            <Eyebrow number="05">Cada etapa importa</Eyebrow>
            <h2>
              Do primeiro contato
              <br />à realização do
              <br />
              <em>seu projeto.</em>
            </h2>
            <p>
              Uma boa conversa é o ponto de partida.
              <br />O caminho é construído com clareza.
            </p>
            <span className="demo-note">
              Fluxo ilustrativo, sujeito à confirmação da empresa
            </span>
          </div>
          <div className="process-image reveal">
            <Photo
              id="process"
              alt="Plantas e ferramentas para planejar a execução da obra, imagem ilustrativa"
            />
            <span className="image-note">Planejamento antes da execução.</span>
          </div>
          <div className="timeline">
            {[
              [
                "Primeiro contato",
                "Compartilhe sua ideia, suas necessidades e o que você imagina para o espaço.",
              ],
              [
                "Avaliação",
                "Converse sobre o contexto do imóvel e as informações necessárias para a análise.",
              ],
              [
                "Planejamento e orçamento",
                "Alinhe o escopo, as condições e os próximos passos diretamente com a empresa.",
              ],
              [
                "Execução e acompanhamento",
                "Combine as etapas de trabalho e a forma de acompanhar seu projeto.",
              ],
            ].map(([title, text], i) => (
              <div key={title} className="reveal">
                <span>0{i + 1}</span>
                <i />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <ContactLink className="text-link">
            Vamos conversar sobre sua obra
          </ContactLink>
        </section>
        <section id="diferenciais" className="differences section-pad">
          <div className="section-heading reveal">
            <div>
              <Eyebrow number="06">O que sustenta cada ideia</Eyebrow>
              <h2>
                Antes da primeira parede,
                <br />
                <em>valores sólidos.</em>
              </h2>
            </div>
            <p>
              Construir envolve escolhas.
              <br />
              Estas são as nossas.
            </p>
          </div>
          <div className="difference-grid">
            {[
              [
                Compass,
                "Tranquilidade",
                "Uma experiência organizada e transparente.",
              ],
              [Layers, "Qualidade", "Atenção aos detalhes em cada etapa."],
              [
                ShieldCheck,
                "Segurança",
                "Responsabilidade e cuidado durante a execução.",
              ],
            ].map(([Icon, title, text], i) => {
              const I = Icon as typeof Compass;
              return (
                <article key={String(title)} className="reveal">
                  <div>
                    <I size={31} strokeWidth={1} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{String(title)}.</h3>
                  <p>{String(text)}</p>
                </article>
              );
            })}
          </div>
        </section>
        <section className="credibility section-pad">
          <Photo
            id="meeting"
            alt="Ambiente profissional de encontro e troca de ideias, fotografia ilustrativa"
          />
          <div className="reveal">
            <Eyebrow number="07">Relações que constroem</Eyebrow>
            <h2>
              Confiança se constrói
              <br />
              <em>em cada detalhe.</em>
            </h2>
            <p>
              Alinhar o escopo, organizar as etapas e conversar com clareza. O
              cuidado na execução começa antes do primeiro serviço.
            </p>
            <p>
              Conheça Silvestre Ferreira e converse sobre o que faz sentido para
              o seu projeto.
            </p>
            <ContactLink className="text-link">Vamos nos conhecer</ContactLink>
            <span className="demo-note">
              Apresentação institucional · sem avaliações ou depoimentos
              simulados
            </span>
          </div>
        </section>
        <section className="transformation section-pad">
          <div className="section-heading reveal">
            <div>
              <Eyebrow number="08">Um novo olhar para o espaço</Eyebrow>
              <h2>
                Imagine
                <br />
                <em>a transformação.</em>
              </h2>
            </div>
            <p>
              Deslize para explorar um estudo conceitual
              <br />
              de acabamentos no mesmo ambiente.
              <br />
              <span className="demo-note">
                Demonstração gráfica, sem atribuição à empresa.
              </span>
            </p>
          </div>
          <Comparison />
        </section>
        <section id="orcamento" className="quote-section section-pad">
          <div className="quote-copy reveal">
            <Eyebrow number="09">O próximo passo é seu</Eyebrow>
            <h2>
              Sua construção
              <br />
              começa com
              <br />
              <em>uma conversa.</em>
            </h2>
            <p>
              Conte o que precisa construir ou reformar. Vamos organizar as
              informações para você conversar com a Silvestre.
            </p>
            <div className="quote-features">
              <span>
                <Check size={16} /> Sem cálculo de preços fictícios
              </span>
              <span>
                <Check size={16} /> Sem compromisso automático
              </span>
              <span>
                <Check size={16} /> Contato direto pelo WhatsApp
              </span>
            </div>
            <span className="quote-decoration">→</span>
          </div>
          <QuoteWizard />
        </section>
        <section className="faq section-pad">
          <div>
            <Eyebrow number="10">Antes de começar</Eyebrow>
            <h2>
              Clareza em
              <br />
              <em>cada resposta.</em>
            </h2>
            <p>
              Ficou com alguma dúvida?
              <br />A conversa continua no WhatsApp.
            </p>
            <ContactLink className="text-link">
              Fale com a Silvestre
            </ContactLink>
          </div>
          <div className="faq-list">
            {faq.map(([q, a], i) => (
              <details key={q}>
                <summary>
                  <span>0{i + 1}</span>
                  {q}
                  <span className="faq-plus">+</span>
                </summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>
        <section id="contato" className="contact section-pad">
          <div className="contact-copy">
            <Eyebrow number="11">Piracicaba, São Paulo</Eyebrow>
            <h2>
              Vamos construir
              <br />
              <em>
                o que vem
                <br />
                pela frente.
              </em>
            </h2>
            <a
              className="contact-phone"
              href={whatsapp()}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.phone}
              <ArrowUpRight />
            </a>
            <p>
              Silvestre Ferreira
              <br />
              Piracicaba · São Paulo · Brasil
            </p>
            <a
              className="text-link"
              href="https://www.google.com/maps/search/?api=1&query=Piracicaba%2C+S%C3%A3o+Paulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin size={17} /> Conheça a cidade <ArrowUpRight size={16} />
            </a>
            <small>Referência à cidade, sem indicação de sede.</small>
          </div>
          <div>
            <p className="contact-form-title">
              Prefere deixar sua ideia por escrito?
            </p>
            <QuickForm />
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
      <Motion />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: company.name,
            telephone: "+5519989060658",
            areaServed: { "@type": "City", name: "Piracicaba" },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+5519989060658",
              contactType: "Orçamento",
              availableLanguage: "Portuguese",
            },
          }).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
