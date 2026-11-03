import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/header";
import { Footer } from "@/components/shared";
import { company, whatsapp } from "@/config/company";
export const metadata: Metadata = { title: "Política de privacidade" };
export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="privacy-page">
        <article>
          <p className="eyebrow">TRANSPARÊNCIA / SEUS DADOS</p>
          <h1>
            Política de
            <br />
            privacidade.
          </h1>
          <p>
            Esta página descreve o funcionamento desta demonstração comercial da
            Silvestre Construção Civil e dos seus formulários de contato.
          </p>
          <h2>Informações que você preenche</h2>
          <p>
            O assistente e o formulário rápido solicitam informações sobre seu
            projeto e seus dados de contato. Esses dados são mantidos apenas na
            memória da página enquanto ela está aberta. Não há banco de dados,
            cadastro ou envio automático para a empresa.
          </p>
          <h2>Envio pelo WhatsApp</h2>
          <p>
            Ao escolher enviar pelo WhatsApp, os dados preenchidos são incluídos
            no texto de um link para o serviço. O WhatsApp receberá esse texto
            ao abrir o link. Você poderá revisar e confirmar a mensagem antes de
            enviá-la. O uso dos dados pelo WhatsApp segue suas próprias
            políticas.
          </p>
          <h2>Armazenamento no navegador</h2>
          <p>
            Um indicador no sessionStorage registra apenas se a abertura visual
            já foi exibida nesta sessão. Ele não contém informações pessoais. Os
            formulários não são salvos nesse armazenamento.
          </p>
          <h2>Serviços e registros técnicos</h2>
          <p>
            Esta versão não inclui analytics, pixels de publicidade nem
            ferramentas de rastreamento. O provedor de hospedagem pode tratar
            registros técnicos, como endereço IP e solicitações HTTP,
            necessários à operação e segurança do site. A configuração final
            deve ser revisada antes da publicação.
          </p>
          <h2>Links externos</h2>
          <p>
            Links de contato abrem o WhatsApp. A referência à cidade abre o
            Google Maps. Esses serviços possuem suas próprias condições e
            políticas. O mapa não é incorporado nem carregado automaticamente
            nesta página.
          </p>
          <h2>Contato</h2>
          <p>
            Para conversar sobre as informações enviadas à empresa, procure{" "}
            {company.responsible} pelo WhatsApp {company.phone}.
          </p>
          <a
            href={whatsapp(
              "Olá, Silvestre! Gostaria de conversar sobre o uso dos meus dados de contato.",
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar sobre privacidade ↗
          </a>
          <p>
            Esta política corresponde à versão demonstrativa e deve acompanhar
            eventuais mudanças na hospedagem, nas integrações ou no tratamento
            de dados.
          </p>
          <Link href="/">← Voltar para o início</Link>
        </article>
      </main>
      <Footer />
    </>
  );
}
