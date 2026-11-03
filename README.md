# Silvestre Construção Civil

Prévia comercial em Next.js App Router, React e TypeScript, com direção industrial premium grafite/laranja, fotografias de execução de obras, GSAP e estrutura em CSS 3D. Conteúdo demonstrativo identificado, sem avaliações, obras ou dados empresariais inventados.

## Executar

Node.js 20.9+ e npm (validado com Node 24).

```bash
npm ci
npm run dev
```

Produção:

```bash
npm run build
npm run start
```

Porta 3000. Nenhum backend, banco de dados, token ou chave é necessário. Os formulários preparam mensagens para o visitante revisar e confirmar no WhatsApp. Dados pessoais não são persistidos pela aplicação.

## Estrutura

- `src/app/`: início, privacidade, SEO, 404 e `projetos/[slug]`.
- `src/components/`: navegação, animações, galeria, arquitetura, comparador e formulários.
- `src/config/company.ts`: empresa, WhatsApp, logo, URL e modo demonstração.
- `src/data/`: serviços, projetos, FAQ, navegação e manifesto de imagens.
- `public/images/` e `public/fonts/`: arquivos locais e licenças das fontes.
- `tests/`: testes Playwright; `docs/`: créditos, validação e capturas.

## Funcionalidades

Abertura com Pular, execução por sessão e movimento reduzido; navegação fixa com seção ativa; menu mobile com foco e Escape; serviços com WhatsApp contextual; portfólio filtrável por etapas construtivas e categorias; galeria com teclado e swipe; seis páginas individuais; arquitetura CSS 3D em cinco etapas; processo e valores; comparador conceitual acessível; assistente em seis etapas com revisão e validação; formulário rápido; FAQ; localização; privacidade; SEO, Open Graph, sitemap, robots e JSON-LD.

CSS próprio mantém o design system, sem dependência de utilitários CSS. CSS 3D substitui WebGL para reduzir custo no celular. O mapa é um link para a cidade, sem sede inventada. Não há áudio, analytics, depoimentos simulados ou cálculo de preços. O modo demonstração bloqueia a indexação por padrão.

## Conteúdo e imagens

Edite `src/config/company.ts` e os arquivos em `src/data/`. Ative a logo original pelo campo `logo`. Consulte [docs/IMAGES.md](docs/IMAGES.md) antes de divulgação comercial. Algumas fotografias secundárias têm resolução limitada e licença individual pendente. A Hero usa fotografia real de profissionais com EPIs em uma obra. Não há imagens geradas por IA na biblioteca ativa. As galerias são referências; não documentam obras reais da empresa nem um único imóvel real. O comparador é um estudo SVG do mesmo ambiente em duas fases.

O conteúdo de credibilidade é institucional, sem avaliações inventadas. Depoimentos reais podem ser integrados posteriormente, com autorização. Não desligue `demoMode` antes de confirmar serviços, processo e projetos com a empresa.

## Testes

```bash
npm run typecheck
npm run build
npm run test:e2e
```

O runner inicia produção e usa Chromium em `/usr/bin/chromium`. Em outra máquina, instale Chromium e configure `CHROMIUM_PATH`, ou adapte o config para o navegador do Playwright. Faça o build antes dos testes. Relatório HTML e traces ficam ignorados; capturas selecionadas ficam em `docs/screenshots/`.

## Vercel

1. Importe o repositório e selecione a raiz deste projeto.
2. Use o preset Next.js, instalação `npm ci` e build `npm run build`.
3. Defina `NEXT_PUBLIC_SITE_URL` com a URL HTTPS final, sem barra ao final.
4. Publique primeiro uma prévia. Antes de divulgação comercial, insira a logo, resolva as licenças das fotos e confirme o conteúdo demonstrativo.
5. Após aprovação do conteúdo real, altere `demoMode` para `false` e faça novo deploy para permitir indexação.

Nenhum deploy foi executado automaticamente. Não foi informado domínio definitivo. Metas Lighthouse não são presumidas; consulte a validação registrada em `docs/VALIDATION.md`.

## Revisão da identidade visual

Conceito: **Da fundação ao acabamento. Construção de verdade.** A direção fotográfica mostra execução, estruturas, alvenaria e pintura; a seção Sobre foi preservada. O portfólio mantém as seis rotas e acrescenta filtros por obras em andamento, etapas construtivas, acabamentos e resultados finais. Não se simula evolução de obras com fotografias sem correspondência comprovada.

## Qualidade das fotografias

As imagens usam JPEGs originais, sem a recompressão WebP intermediária, e otimização Next/Image com qualidade 90. A resolução considera também o recorte vertical e a densidade da tela. Duas referências foram substituídas por originais maiores, a imagem de 400 × 400 foi retirada e a galeria evita ampliação de arquivos pequenos. Consulte `docs/IMAGES.md` para dimensões, procedência e limites dos originais menores.
