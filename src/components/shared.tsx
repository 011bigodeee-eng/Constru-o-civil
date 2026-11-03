import Image from "next/image";
export { default as Photo } from "./photo";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { company, whatsapp } from "@/config/company";
import { navigation } from "@/data/navigation";
export function Brand() {
  return company.logo ? (
    <Image src={company.logo} width={190} height={62} alt={company.name} />
  ) : (
    <span className="brand">
      SILVESTRE <span>CONSTRUÇÃO CIVIL</span>
    </span>
  );
}
export function Eyebrow({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <p className="eyebrow">
      <span>{number}</span>
      <i />
      {children}
    </p>
  );
}
export function ContactLink({
  children = "Solicitar orçamento",
  message,
  className = "button",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={whatsapp(message)}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      <ArrowUpRight size={18} />
    </a>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <Link href="/#inicio" aria-label="Silvestre Construção Civil, início">
          <Brand />
        </Link>
        <p>
          Construir é dar forma
          <br />à sua obra.
        </p>
        <a href="/#inicio" aria-label="Voltar ao início" className="round-link">
          ↑
        </a>
      </div>
      <div className="footer-grid">
        <div>
          <small>VAMOS CONVERSAR</small>
          <a href={whatsapp()} target="_blank" rel="noopener noreferrer">
            {company.phone} <ArrowUpRight size={15} />
          </a>
          <p>
            Silvestre Ferreira
            <br />
            Piracicaba · São Paulo
          </p>
        </div>
        <div>
          <small>EXPLORE</small>
          {navigation.slice(1).map(([label, id]) => (
            <Link key={id} href={`/#${id}`}>
              {label}
            </Link>
          ))}
        </div>
        <div>
          <small>SERVIÇOS</small>
          <p>
            Construção · Reformas
            <br />
            Ampliações · Acabamentos
          </p>
          <span className="muted">
            Serviços demonstrativos.
            <br />
            Consulte a disponibilidade.
          </span>
        </div>
        <div>
          <small>BASES DO NOSSO TRABALHO</small>
          <p>
            Tranquilidade.
            <br />
            Qualidade.
            <br />
            Segurança.
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Silvestre Construção Civil</span>
        <span>Prévia comercial · Conteúdo ilustrativo</span>
        <Link href="/privacidade">
          Privacidade <ArrowRight size={12} />
        </Link>
      </div>
    </footer>
  );
}
