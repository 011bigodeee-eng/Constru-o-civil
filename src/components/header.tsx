"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Brand } from "./shared";
import { navigation } from "@/data/navigation";
export default function Header() {
  const [scrolled, setScrolled] = useState(false),
    [active, setActive] = useState("inicio"),
    [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: "-20% 0px -60% 0px" },
    );
    navigation.forEach(([, id]) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", fn);
      observer.disconnect();
    };
  }, []);
  useEffect(() => {
    const d = dialog.current;
    if (open) {
      d?.showModal();
      document.body.style.overflow = "hidden";
    } else {
      d?.close();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <header className={scrolled ? "site-header solid" : "site-header"}>
        <Link href="/#inicio" aria-label="Silvestre Construção Civil, início">
          <Brand />
        </Link>
        <nav aria-label="Principal">
          {navigation.map(([name, id]) => (
            <Link
              className={active === id ? "active" : ""}
              key={id}
              href={`/#${id}`}
            >
              {name}
            </Link>
          ))}
        </nav>
        <Link className="header-cta" href="/#orcamento">
          Solicitar orçamento <ArrowUpRight size={16} />
        </Link>
        <button
          className="menu-toggle"
          ref={trigger}
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <Menu />
        </button>
      </header>
      <dialog
        ref={dialog}
        className="mobile-menu"
        onCancel={() => setOpen(false)}
        onClose={() => {
          setOpen(false);
          trigger.current?.focus();
        }}
      >
        <div className="menu-top">
          <Brand />
          <button onClick={() => setOpen(false)} aria-label="Fechar menu">
            <X />
          </button>
        </div>
        <nav aria-label="Menu mobile">
          {navigation.map(([name, id], i) => (
            <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {name}
              <ArrowUpRight />
            </Link>
          ))}
        </nav>
        <Link
          href="/#orcamento"
          className="button"
          onClick={() => setOpen(false)}
        >
          Comece seu projeto <ArrowUpRight size={18} />
        </Link>
        <p>Piracicaba · São Paulo</p>
      </dialog>
    </>
  );
}
