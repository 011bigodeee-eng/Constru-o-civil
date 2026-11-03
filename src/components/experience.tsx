"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Brand, Eyebrow } from "./shared";
export function Motion() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
        gsap.from(el, {
          y: 35,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 95%", once: true },
        }),
      );
      gsap.to(".hero-image", {
        yPercent: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    });
    return () => mm.revert();
  }, []);
  return null;
}
export function Intro() {
  const [visible, setVisible] = useState(true);
  useLayoutEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem("silvestre-intro") === "1";
    } catch {}
    if (seen || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }
    if (!seen) {
      try {
        sessionStorage.setItem("silvestre-intro", "1");
      } catch {}
    }
    const id = setTimeout(() => setVisible(false), 3100);
    return () => clearTimeout(id);
  }, []);
  if (!visible) return null;
  return (
    <div className="intro" role="region" aria-label="Abertura da Silvestre">
      <div className="intro-lines">
        <i />
        <i />
        <i />
      </div>
      <Brand />
      <p>
        Construindo confiança.
        <br />
        Realizando projetos.
      </p>
      <button onClick={() => setVisible(false)}>Pular abertura ↗</button>
    </div>
  );
}
const stages = [
  "Ideia",
  "Planejamento",
  "Estrutura",
  "Construção",
  "Realização",
];
export function Architecture() {
  const [stage, setStage] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const manual = useRef(false);
  useEffect(() => {
    const fn = () => {
      const r = ref.current?.getBoundingClientRect();
      if (manual.current) {
        if (!r || r.top >= innerHeight || r.bottom <= 0) manual.current = false;
        return;
      }
      if (r && r.top < innerHeight && r.bottom > 0)
        setStage(
          Math.min(
            4,
            Math.max(
              0,
              Math.floor(
                ((innerHeight - r.top) / (innerHeight + r.height)) * 6,
              ),
            ),
          ),
        );
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <section className="architecture" ref={ref}>
      <div className="architecture-copy">
        <Eyebrow number="04">Arquitetura em movimento</Eyebrow>
        <h2>
          Toda realização
          <br />
          começa com
          <br />
          <em>uma ideia.</em>
        </h2>
        <p>
          Do primeiro traço à forma final. Uma visão ilustrativa do caminho que
          transforma possibilidades em espaços.
        </p>
        <div
          className="stage-list"
          role="group"
          aria-label="Etapas da construção"
        >
          {stages.map((s, i) => (
            <button
              key={s}
              onClick={() => {
                manual.current = true;
                setStage(i);
              }}
              className={i === stage ? "selected" : ""}
              aria-pressed={stage === i}
            >
              <span>0{i + 1}</span>
              {s}
            </button>
          ))}
        </div>
      </div>
      <div
        className={`building stage-${stage}`}
        aria-label={`Representação arquitetônica: ${stages[stage]}`}
        role="img"
      >
        <div className="technical-label">
          SC / ESTUDO VOLUMÉTRICO
          <br />
          CONCEITO ILUSTRATIVO
        </div>
        <div className="building-world">
          <div className="ground" />
          {[0, 1, 2].map((i) => (
            <div className={`volume volume-${i}`} key={i}>
              <i className="front" />
              <i className="side" />
              <i className="top" />
            </div>
          ))}
          <span className="axis x">X</span>
          <span className="axis y">Y</span>
        </div>
        <div className="building-caption">
          <span>
            0{stage + 1} / {stages[stage].toUpperCase()}
          </span>
          <span>IDEIA → REALIZAÇÃO</span>
        </div>
      </div>
    </section>
  );
}
