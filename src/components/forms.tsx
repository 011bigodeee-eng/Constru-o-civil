"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Check,
  MessageCircle,
} from "lucide-react";
import { whatsapp } from "@/config/company";
type Answers = {
  service: string;
  property: string;
  plan: string;
  city: string;
  type: string;
  area: string;
  description: string;
  timing: string;
  name: string;
  phone: string;
  notes: string;
};
const initial: Answers = {
  service: "",
  property: "",
  plan: "",
  city: "Piracicaba",
  type: "",
  area: "",
  description: "",
  timing: "",
  name: "",
  phone: "",
  notes: "",
};
const steps = [
  "Seu projeto",
  "O ponto de partida",
  "Os detalhes",
  "Seu momento",
  "Vamos conversar",
  "Tudo pronto",
];
const labels: Record<keyof Answers, string> = {
  service: "Serviço",
  property: "Terreno ou imóvel",
  plan: "Projeto arquitetônico",
  city: "Cidade",
  type: "Tipo de imóvel",
  area: "Metragem aproximada",
  description: "Descrição",
  timing: "Prazo desejado",
  name: "Nome",
  phone: "Telefone",
  notes: "Observações",
};
export function quoteMessage(a: Answers) {
  return (
    "Olá, Silvestre! Gostaria de solicitar um orçamento.\n\n" +
    (Object.entries(a) as [keyof Answers, string][])
      .map(
        ([key, value]) => `${labels[key]}: ${value.trim() || "Não informado"}`,
      )
      .join("\n") +
    "\n\nEntendo que o prazo desejado depende da disponibilidade da empresa."
  );
}
function Choices({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div className="choices">
        {options.map((o) => (
          <button
            type="button"
            key={o}
            className={o === value ? "chosen" : ""}
            aria-pressed={o === value}
            onClick={() => onChange(o)}
          >
            {o}
            <span>
              {o === value ? <Check size={15} /> : <ArrowUpRight size={15} />}
            </span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}
function Field({
  label,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  multiline = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  type?: string;
  multiline?: boolean;
}) {
  const props = {
    id: name,
    name,
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      onChange(e.target.value),
    required,
    maxLength: multiline ? 2000 : 120,
  };
  return (
    <label className="field" htmlFor={name}>
      {label}
      {multiline ? (
        <textarea {...props} rows={3} />
      ) : (
        <input
          {...props}
          type={type}
          autoComplete={
            name.includes("phone")
              ? "tel"
              : name.includes("name")
                ? "name"
                : undefined
          }
        />
      )}
    </label>
  );
}
export function QuoteWizard() {
  const [step, setStep] = useState(0),
    [data, setData] = useState(initial),
    [error, setError] = useState("");
  const title = useRef<HTMLHeadingElement>(null);
  function update(key: keyof Answers, value: string) {
    setData((d) => ({ ...d, [key]: value }));
    setError("");
  }
  function go(target: number) {
    setStep(target);
    setError("");
    setTimeout(() => title.current?.focus(), 0);
  }
  function advance() {
    let message = "";
    if (step === 0 && !data.service)
      message = "Selecione o serviço para continuar.";
    if (step === 1 && (!data.property || !data.plan))
      message = "Responda às duas perguntas para continuar.";
    if (
      step === 2 &&
      (!data.city.trim() || !data.type.trim() || !data.description.trim())
    )
      message = "Informe cidade, tipo de imóvel e uma breve descrição.";
    if (
      step === 2 &&
      data.area &&
      (Number(data.area) <= 0 || !Number.isFinite(Number(data.area)))
    )
      message = "Informe uma metragem positiva ou deixe o campo vazio.";
    if (step === 3 && !data.timing) message = "Selecione seu prazo desejado.";
    if (
      step === 4 &&
      (data.name.trim().length < 2 ||
        data.phone.replace(/\D/g, "").length < 10 ||
        data.phone.replace(/\D/g, "").length > 13)
    )
      message = "Informe seu nome e um telefone válido com DDD.";
    if (message) setError(message);
    else go(step + 1);
  }
  return (
    <div className="wizard">
      <div className="wizard-head">
        <span>SEU PROJETO, PASSO A PASSO</span>
        <span>0{step + 1} / 06</span>
      </div>
      <div
        className="progress"
        role="progressbar"
        aria-label="Progresso do orçamento"
        aria-valuenow={step + 1}
        aria-valuemin={1}
        aria-valuemax={6}
      >
        <i style={{ width: `${((step + 1) / 6) * 100}%` }} />
      </div>
      <h3 tabIndex={-1} ref={title}>
        {steps[step]}
        <span>.</span>
      </h3>
      <div className="wizard-content">
        {step === 0 && (
          <Choices
            label="O que você quer realizar?"
            options={[
              "Construção",
              "Reforma",
              "Ampliação",
              "Acabamento",
              "Outro",
            ]}
            value={data.service}
            onChange={(v) => update("service", v)}
          />
        )}
        {step === 1 && (
          <>
            <Choices
              label="Você já possui terreno ou imóvel?"
              options={[
                "Sim",
                "Não",
                "Ainda estou procurando",
                "Não se aplica",
              ]}
              value={data.property}
              onChange={(v) => update("property", v)}
            />
            <Choices
              label="Você já possui projeto arquitetônico?"
              options={[
                "Sim",
                "Não",
                "Está em desenvolvimento",
                "Não sei informar",
              ]}
              value={data.plan}
              onChange={(v) => update("plan", v)}
            />
          </>
        )}
        {step === 2 && (
          <>
            <div className="field-grid">
              <Field
                label="Cidade *"
                name="quote-city"
                value={data.city}
                onChange={(v) => update("city", v)}
              />
              <Field
                label="Tipo de imóvel *"
                name="quote-type"
                value={data.type}
                onChange={(v) => update("type", v)}
              />
            </div>
            <Field
              label="Metragem aproximada em m² (opcional)"
              name="quote-area"
              type="number"
              value={data.area}
              onChange={(v) => update("area", v)}
            />
            <Field
              label="Conte um pouco sobre o serviço *"
              name="quote-description"
              value={data.description}
              multiline
              onChange={(v) => update("description", v)}
            />
          </>
        )}
        {step === 3 && (
          <>
            <Choices
              label="Quando você gostaria de começar?"
              options={[
                "O quanto antes",
                "Próximos 3 meses",
                "Próximos 6 meses",
                "Ainda estou planejando",
              ]}
              value={data.timing}
              onChange={(v) => update("timing", v)}
            />
            <p className="form-note">
              Sua preferência será conversada com a empresa. Esta seleção não
              confirma disponibilidade.
            </p>
          </>
        )}
        {step === 4 && (
          <>
            <Field
              label="Seu nome *"
              name="quote-name"
              value={data.name}
              onChange={(v) => update("name", v)}
            />
            <Field
              label="Telefone com DDD *"
              name="quote-phone"
              type="tel"
              value={data.phone}
              onChange={(v) => update("phone", v)}
            />
            <Field
              label="Observações (opcional)"
              name="quote-notes"
              value={data.notes}
              multiline
              onChange={(v) => update("notes", v)}
            />
          </>
        )}
        {step === 5 && (
          <>
            <p>Confira os detalhes antes de iniciar a conversa.</p>
            <dl className="summary">
              {(Object.entries(data) as [keyof Answers, string][]).map(
                ([key, value]) => (
                  <div key={key}>
                    <dt>{labels[key]}</dt>
                    <dd>{value || "Não informado"}</dd>
                  </div>
                ),
              )}
            </dl>
            <button className="text-button" onClick={() => go(0)}>
              Editar informações <ArrowLeft size={15} />
            </button>
          </>
        )}
      </div>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      <div className="wizard-actions">
        {step > 0 ? (
          <button className="back" onClick={() => go(step - 1)}>
            <ArrowLeft size={16} /> Voltar
          </button>
        ) : (
          <span className="form-note">
            Sem estimativas fictícias.
            <br />
            Uma conversa sobre possibilidades.
          </span>
        )}
        {step < 5 ? (
          <button className="button" onClick={advance}>
            Continuar <ArrowRight size={18} />
          </button>
        ) : (
          <a
            className="button"
            href={whatsapp(quoteMessage(data))}
            target="_blank"
            rel="noopener noreferrer"
          >
            Enviar pelo WhatsApp <ArrowUpRight size={18} />
          </a>
        )}
      </div>
      <p className="privacy-note">
        Seus dados ficam apenas nesta página e serão incluídos na mensagem. Você
        confirma o envio no WhatsApp.{" "}
        <Link href="/privacidade">Privacidade</Link>.
      </p>
    </div>
  );
}
export function QuickForm() {
  const [data, setData] = useState({
      name: "",
      phone: "",
      city: "",
      service: "",
      message: "",
    }),
    [error, setError] = useState("");
  const [url, setUrl] = useState("");
  function update(k: keyof typeof data, v: string) {
    setData((d) => ({ ...d, [k]: v }));
    setUrl("");
    setError("");
  }
  return (
    <form
      className="quick-form"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          data.name.trim().length < 2 ||
          !data.city.trim() ||
          !data.message.trim()
        ) {
          setError("Informe seu nome, cidade e uma breve mensagem.");
          return;
        }
        const count = data.phone.replace(/\D/g, "").length;
        if (count < 10 || count > 13) {
          setError("Informe um telefone válido com DDD.");
          return;
        }
        setUrl(
          whatsapp(
            `Olá, Silvestre!\nNome: ${data.name}\nTelefone: ${data.phone}\nCidade: ${data.city}\nServiço: ${data.service}\nMensagem: ${data.message}`,
          ),
        );
      }}
    >
      <div className="field-grid">
        <Field
          required
          label="Nome"
          name="quick-name"
          value={data.name}
          onChange={(v) => update("name", v)}
        />
        <Field
          required
          label="Telefone com DDD"
          name="quick-phone"
          type="tel"
          value={data.phone}
          onChange={(v) => update("phone", v)}
        />
        <Field
          required
          label="Cidade"
          name="quick-city"
          value={data.city}
          onChange={(v) => update("city", v)}
        />
        <div className="field">
          <label htmlFor="quick-service">Serviço</label>
          <select
            id="quick-service"
            required
            value={data.service}
            onChange={(e) => update("service", e.target.value)}
          >
            <option value="">Selecione</option>
            {["Construção", "Reforma", "Ampliação", "Acabamento", "Outro"].map(
              (s) => (
                <option key={s}>{s}</option>
              ),
            )}
          </select>
        </div>
      </div>
      <Field
        required
        multiline
        label="Sua ideia"
        name="quick-message"
        value={data.message}
        onChange={(v) => update("message", v)}
      />
      {error && (
        <p role="alert" className="form-error">
          {error}
        </p>
      )}
      {url ? (
        <a
          className="button"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Abrir mensagem no WhatsApp <ArrowUpRight size={18} />
        </a>
      ) : (
        <button className="button" type="submit">
          Preparar mensagem <ArrowUpRight size={18} />
        </button>
      )}
      <p className="privacy-note" role="status">
        {url
          ? "Mensagem preparada. Abra o WhatsApp para revisar e confirmar o envio."
          : "Nenhum dado é enviado automaticamente. "}
        <Link href="/privacidade">Como usamos seus dados</Link>.
      </p>
    </form>
  );
}
export function FloatingContact() {
  const [hide, setHide] = useState(false);
  useEffect(() => {
    const visible = new Set<string>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visible.add(entry.target.id);
        else visible.delete(entry.target.id);
      });
      setHide(visible.size > 0);
    });
    ["orcamento", "contato"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <a
      className={`floating-contact ${hide ? "is-hidden-mobile" : ""}`}
      href={whatsapp()}
      aria-label="Conversar com Silvestre no WhatsApp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <MessageCircle size={23} />
      <span>Vamos conversar?</span>
    </a>
  );
}
