import Link from "next/link";
export default function NotFound() {
  return (
    <main
      className="section-pad"
      style={{
        minHeight: "100vh",
        display: "grid",
        alignContent: "center",
        gap: 30,
      }}
    >
      <p className="eyebrow">404 / UM NOVO CAMINHO</p>
      <h1 style={{ fontSize: "clamp(40px,6vw,80px)" }}>
        Este espaço
        <br />
        não foi encontrado.
      </h1>
      <p>Continue explorando as possibilidades.</p>
      <Link href="/" className="button" style={{ justifySelf: "start" }}>
        Voltar para o início ↗
      </Link>
    </main>
  );
}
