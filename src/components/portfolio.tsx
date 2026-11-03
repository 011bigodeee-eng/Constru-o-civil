"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Expand,
} from "lucide-react";
import { projects, constructionStages } from "@/data/projects";
import { Photo } from "./shared";
export function Gallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef(0);
  const next = (direction: number) =>
    setIndex((i) => (i + direction + images.length) % images.length);
  return (
    <>
      <div className="gallery-thumbs">
        {images.map((id, i) => (
          <button
            key={id}
            onClick={() => {
              setIndex(i);
              dialog.current?.showModal();
            }}
            aria-label={`Ampliar imagem ${i + 1} de ${title}`}
          >
            <Photo id={id} alt={`${title}, referência de execução ${i + 1}`} />
            <span>
              <Expand size={18} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        className="lightbox"
        ref={dialog}
        aria-label={`Galeria: ${title}`}
        onTouchStart={(e) => (touch.current = e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          const distance = e.changedTouches[0].screenX - touch.current;
          if (Math.abs(distance) > 50) next(distance < 0 ? 1 : -1);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next(1);
          if (e.key === "ArrowLeft") next(-1);
        }}
      >
        <button
          className="lightbox-close"
          aria-label="Fechar galeria"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <Photo
          id={images[index]}
          alt={`${title}, imagem ilustrativa ${index + 1}`}
        />
        <div className="lightbox-controls">
          <button aria-label="Imagem anterior" onClick={() => next(-1)}>
            <ChevronLeft />
          </button>
          <p aria-live="polite">
            {title} · {index + 1} / {images.length}
          </p>
          <button aria-label="Próxima imagem" onClick={() => next(1)}>
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </>
  );
}
export default function Portfolio() {
  const [filter, setFilter] = useState("Todos");
  const [stage, setStage] = useState("Todas as etapas");
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef(0);
  const visible = projects.filter(
    (p) =>
      (filter === "Todos" || p.category === filter) &&
      (stage === "Todas as etapas" || p.stage === stage),
  );
  return (
    <>
      <div
        className="stage-toolbar"
        role="group"
        aria-label="Filtrar por etapa da obra"
      >
        {["Todas as etapas", ...constructionStages].map((label) => (
          <button
            key={label}
            aria-pressed={stage === label}
            className={stage === label ? "selected" : ""}
            onClick={() => setStage(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="portfolio-toolbar">
        <div role="group" aria-label="Filtrar projetos">
          {["Todos", "Residencial", "Comercial", "Reformas"].map((f) => (
            <button
              key={f}
              className={filter === f ? "selected" : ""}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {f}
            </button>
          ))}
        </div>
        <span>Construção em cada etapa.</span>
      </div>
      <div className="project-grid">
        {visible.length === 0 && (
          <div className="portfolio-empty">
            <p>Nenhuma referência nesta combinação de etapa e categoria.</p>
            <button
              className="button"
              onClick={() => {
                setFilter("Todos");
                setStage("Todas as etapas");
              }}
            >
              Ver todas as referências
            </button>
          </div>
        )}
        {visible.map((p, i) => (
          <article className="project" key={p.slug}>
            <div className="project-image">
              <button
                aria-label={`Ampliar ${p.name}`}
                onClick={() => {
                  setSelected(projects.indexOf(p));
                  dialog.current?.showModal();
                }}
              >
                <Photo
                  id={p.image}
                  alt={`${p.name}: referência ilustrativa de ${p.category.toLowerCase()}`}
                />
                <span className="expand">
                  <Expand size={20} />
                </span>
              </button>
              <span className="demo-tag">{p.stage} · Ilustrativo</span>
            </div>
            <div className="project-title">
              <div>
                <span>
                  {p.category} <i /> 0{projects.indexOf(p) + 1}
                </span>
                <h3>
                  <Link href={`/projetos/${p.slug}`}>{p.name}</Link>
                </h3>
              </div>
              <Link
                className="round-link"
                href={`/projetos/${p.slug}`}
                aria-label={`Conhecer ${p.name}`}
              >
                <ArrowUpRight />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="lightbox"
        aria-label="Galeria de projetos"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight")
            setSelected((i) => (i + 1) % projects.length);
          if (e.key === "ArrowLeft")
            setSelected((i) => (i + projects.length - 1) % projects.length);
        }}
        onTouchStart={(e) => (touch.current = e.changedTouches[0].screenX)}
        onTouchEnd={(e) => {
          const dx = e.changedTouches[0].screenX - touch.current;
          if (Math.abs(dx) > 50)
            setSelected(
              (i) => (i + (dx < 0 ? 1 : projects.length - 1)) % projects.length,
            );
        }}
      >
        <button
          className="lightbox-close"
          aria-label="Fechar galeria"
          onClick={() => dialog.current?.close()}
        >
          <X />
        </button>
        <Photo
          id={projects[selected].image}
          alt={`${projects[selected].name}, projeto ilustrativo`}
        />
        <div className="lightbox-controls">
          <button
            onClick={() =>
              setSelected((i) => (i + projects.length - 1) % projects.length)
            }
            aria-label="Imagem anterior"
          >
            <ChevronLeft />
          </button>
          <Link href={`/projetos/${projects[selected].slug}`}>
            {projects[selected].name} · Ver projeto ↗
          </Link>
          <button
            onClick={() => setSelected((i) => (i + 1) % projects.length)}
            aria-label="Próxima imagem"
          >
            <ChevronRight />
          </button>
        </div>
      </dialog>
    </>
  );
}
