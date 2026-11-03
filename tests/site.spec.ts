import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { projects } from "../src/data/projects";
import { mkdirSync } from "node:fs";
const errors: string[] = [];
test.beforeEach(async ({ page }) => {
  page.on("pageerror", (e) => errors.push(e.message));
});
async function open(page: import("@playwright/test").Page) {
  await page.goto("/");
  const skip = page.getByRole("button", { name: "Pular abertura" });
  if (await skip.isVisible()) await skip.click();
  await expect(page.locator(".intro")).toHaveCount(0);
}
test("abertura, pular e uma única exibição por sessão", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".intro")).toBeVisible();
  await page.getByRole("button", { name: "Pular abertura" }).click();
  await expect(page.locator(".intro")).toHaveCount(0);
  await page.reload();
  await expect(page.locator(".intro")).toHaveCount(0);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Construímos",
  );
});
test("menu mobile: foco, escape, seleção e scroll", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await open(page);
  const trigger = page.getByRole("button", { name: "Abrir menu" });
  await trigger.click();
  await expect(page.locator(".mobile-menu")).toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await page.keyboard.press("Escape");
  await expect(page.locator(".mobile-menu")).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await trigger.click();
  await page
    .getByRole("navigation", { name: "Menu mobile" })
    .getByRole("link", { name: "Serviços" })
    .click();
  await expect(page.locator(".mobile-menu")).not.toBeVisible();
  await expect(page).toHaveURL(/#servicos/);
});
test("filtros, lightbox por teclado e seis páginas de projetos", async ({
  page,
}) => {
  await open(page);
  await page.getByRole("button", { name: "Residencial", exact: true }).click();
  await expect(page.locator(".project")).toHaveCount(2);
  await page.getByRole("button", { name: "Ampliar Casa Horizonte" }).click();
  await expect(page.locator(".lightbox")).toBeVisible();
  await page.keyboard.press("ArrowRight");
  await expect(page.locator(".lightbox-controls")).toContainText(
    "Espaço Essência",
  );
  await page.keyboard.press("Escape");
  await expect(page.locator(".lightbox")).not.toBeVisible();
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  await expect(page.locator(".project")).toHaveCount(6);
  for (const project of projects) {
    await page.goto(`/projetos/${project.slug}`);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      project.name,
    );
    await expect(
      page.getByText(
        "Projeto ilustrativo · Não é uma obra executada pela Silvestre",
      ),
    ).toBeVisible();
    await page
      .getByRole("button", { name: new RegExp("Ampliar imagem 1") })
      .click();
    await expect(page.locator(".lightbox")).toBeVisible();
    await page.keyboard.press("ArrowRight");
    await expect(page.locator(".lightbox-controls")).toContainText("2 / 2");
    await page.keyboard.press("Escape");
  }
});
test("assistente completo, validação, revisão, voltar e WhatsApp codificado", async ({
  page,
}) => {
  await open(page);
  const wizard = page.locator(".wizard");
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await expect(wizard.getByRole("alert")).toContainText("Selecione");
  await wizard.getByRole("button", { name: "Reforma", exact: true }).click();
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await wizard
    .getByRole("group", { name: "Você já possui terreno ou imóvel?" })
    .getByRole("button", { name: "Sim", exact: true })
    .click();
  await wizard
    .getByRole("group", { name: "Você já possui projeto arquitetônico?" })
    .getByRole("button", { name: "Não", exact: true })
    .click();
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await wizard.getByLabel("Tipo de imóvel").fill("Casa");
  await wizard
    .getByLabel("Conte um pouco")
    .fill("Reforma da cozinha & área externa");
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await wizard.getByRole("button", { name: "Ainda estou planejando" }).click();
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await wizard.getByLabel("Seu nome").fill("Pessoa Teste");
  await wizard.getByLabel("Telefone com DDD").fill("123");
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await expect(wizard.getByRole("alert")).toContainText("telefone válido");
  await wizard.getByLabel("Telefone com DDD").fill("19999990000");
  await wizard.getByRole("button", { name: "Continuar" }).click();
  await expect(wizard.locator(".summary")).toContainText("Não informado");
  const link = wizard.getByRole("link", { name: "Enviar pelo WhatsApp" });
  const url = new URL((await link.getAttribute("href"))!);
  expect(url.hostname).toBe("wa.me");
  expect(url.pathname).toBe("/5519989060658");
  expect(url.searchParams.get("text")).toContain(
    "Reforma da cozinha & área externa",
  );
  expect(url.searchParams.get("text")).toContain("Pessoa Teste");
  await wizard.getByRole("button", { name: "Voltar", exact: true }).click();
  await expect(wizard.getByLabel("Seu nome")).toHaveValue("Pessoa Teste");
});
test("formulário rápido, FAQ, comparador e narrativa 3D", async ({ page }) => {
  await open(page);
  const form = page.locator(".quick-form");
  await form.getByLabel("Nome", { exact: true }).fill("Teste Contato");
  await form.getByLabel("Telefone com DDD").fill("19999990000");
  await form.getByLabel("Cidade").fill("Piracicaba");
  await form.getByLabel("Serviço", { exact: true }).selectOption("Reforma");
  await form.getByLabel("Sua ideia").fill("Quero renovar a sala.");
  await form.getByRole("button", { name: "Preparar mensagem" }).click();
  await expect(form.getByRole("status")).toContainText("Mensagem preparada");
  const url = new URL(
    (await form
      .getByRole("link", { name: "Abrir mensagem" })
      .getAttribute("href"))!,
  );
  expect(url.searchParams.get("text")).toContain("Quero renovar a sala.");
  await page
    .locator("summary")
    .filter({ hasText: "Como solicitar um orçamento?" })
    .click();
  await expect(page.locator(".faq-list details").first()).toHaveAttribute(
    "open",
    "",
  );
  const range = page.getByRole("slider");
  await range.focus();
  await page.keyboard.press("ArrowRight");
  await expect(range).toHaveValue("51");
  await page
    .locator(".stage-list")
    .getByRole("button", { name: "05 Acabamento" })
    .click();
  await expect(page.locator(".building")).toHaveClass(/stage-4/);
});
test("movimento reduzido, privacidade, SEO e rota inexistente", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator(".intro")).toHaveCount(0);
  await page.goto("/privacidade");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Política de",
  );
  await expect(page.locator("body")).toContainText("Não há banco de dados");
  const robots = await page.request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await page.request.get("/sitemap.xml");
  expect(await sitemap.text()).toContain("/projetos/casa-horizonte");
  const unknown = await page.goto("/projetos/nao-existe");
  expect(unknown?.status()).toBe(404);
});
test("imagens, links, responsividade e capturas", async ({ page }) => {
  mkdirSync("docs/screenshots", { recursive: true });
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 390, 430, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 1000 });
    await open(page);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 750) {
        window.scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 30));
      }
      window.scrollTo(0, 0);
    });
    await expect
      .poll(
        async () =>
          page
            .locator("img:visible")
            .evaluateAll((images) =>
              (images as HTMLImageElement[]).every(
                (i) => i.complete && i.naturalWidth > 0,
              ),
            ),
        { timeout: 15000 },
      )
      .toBe(true);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      `horizontal overflow at ${width}`,
    ).toBe(true);
    const badImages = await page
      .locator("img:visible")
      .evaluateAll((images) =>
        (images as HTMLImageElement[])
          .filter((i) => !i.complete || i.naturalWidth === 0)
          .map((i) => i.src),
      );
    expect(badImages).toEqual([]);
    const internal = await page
      .locator('a[href^="#"]')
      .evaluateAll((links) =>
        links
          .map((l) => l.getAttribute("href"))
          .filter(
            (h) => h && h !== "#" && !document.getElementById(h.slice(1)),
          ),
      );
    expect(internal).toEqual([]);
    if ([320, 390, 768, 1440].includes(width)) {
      await page.screenshot({
        path: `docs/screenshots/home-${width}.png`,
        fullPage: true,
      });
      for (const id of [
        "inicio",
        "servicos",
        "projetos",
        "orcamento",
        "contato",
      ])
        await page.locator(`#${id}`).screenshot({
          path: `docs/screenshots/${id}-${width}.png`,
          ...(id === "inicio"
            ? {}
            : {
                style:
                  ".site-header, .skip-link, .floating-contact { visibility: hidden !important; }",
              }),
        });
    }
  }
  expect(errors).toEqual([]);
});

test("acessibilidade automatizada: sem violações sérias ou críticas", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page);
  for (const path of ["/", "/privacidade", "/projetos/casa-horizonte"]) {
    await page.goto(path);
    const result = await new AxeBuilder({ page }).analyze();
    expect(
      result.violations
        .filter((v) => v.impact === "critical" || v.impact === "serious")
        .map((v) => ({
          id: v.id,
          impact: v.impact,
          targets: v.nodes.map((n) => n.target),
        })),
    ).toEqual([]);
  }
});

test("identidade de construção e filtros por etapas sem remover categorias", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await open(page);
  await expect(page.locator(".hero-copy .eyebrow")).toHaveText(
    "CONSTRUÇÃO DE VERDADE.",
  );
  await expect(page.locator(".hero-image img")).toHaveAttribute(
    "src",
    /work-hero/,
  );
  const stages = page.getByRole("group", { name: "Filtrar por etapa da obra" });
  await stages
    .getByRole("button", { name: "Obras em andamento", exact: true })
    .click();
  await expect(page.locator(".project")).toHaveCount(2);
  await stages
    .getByRole("button", { name: "Acabamentos", exact: true })
    .click();
  await expect(page.locator(".project")).toHaveCount(2);
  await page
    .getByRole("group", { name: "Filtrar projetos", exact: true })
    .getByRole("button", { name: "Comercial", exact: true })
    .click();
  await expect(page.locator(".portfolio-empty")).toBeVisible();
  await page.getByRole("button", { name: "Ver todas as referências" }).click();
  await expect(page.locator(".project")).toHaveCount(6);
});
