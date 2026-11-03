# Validação da prévia

Executada em 3 de novembro de 2026, no ambiente de desenvolvimento em nuvem, com Node.js 24.22.1, Next.js 16.4.4 e Chromium local.

## Resultados

- `npm ci --no-audit --no-fund`: instalação reproduzível concluída pelo lockfile.
- `npm run build`: produção compilada, com seis páginas de projetos pré-renderizadas, página inicial, privacidade, 404, sitemap e robots.
- `npm run typecheck`: tipos verificados.
- `npm run test:e2e`: **8 testes passaram**, em aproximadamente 1,2 minuto, sem testes ignorados.
- axe: nenhuma violação séria ou crítica nas verificações automatizadas da página inicial, privacidade e Casa Horizonte. Isso não equivale a auditoria manual completa ou certificação de conformidade.
- Nenhum erro de JavaScript registrado no cenário de imagens e responsividade.

## Cobertura funcional

1. Abertura, botão Pular e execução uma vez por sessão.
2. Menu mobile, fechamento, Escape, retorno de foco e desbloqueio de scroll.
3. Filtros, lightbox por teclado e abertura das seis páginas de projetos.
4. Assistente completo, campos obrigatórios, telefone, revisão, retorno às etapas e geração correta da URL/mensagem do WhatsApp.
5. Formulário rápido, mensagem, FAQ, comparador por teclado e seleção manual dos estados 3D.
6. Movimento reduzido, política de privacidade, robots, sitemap e resposta 404.
7. Imagens visíveis carregadas, destinos das âncoras, erros JavaScript e responsividade.
8. Verificação axe nas três páginas representativas.

## Responsividade e revisão visual

Larguras verificadas: **320, 375, 390, 430, 768, 1024 e 1440 pixels**, sem rolagem horizontal indevida.

Foram salvas 24 capturas em `docs/screenshots/`: página completa e seções de início, serviços, portfólio, orçamento e contato em 320, 390, 768 e 1440 pixels. A revisão visual considerou todas as seções por meio das capturas completas; ajustes incluíram a aplicação das fontes, contrastes, resolução da Hero no recorte mobile e ocultação do contato flutuante junto aos formulários. Capturas de seções ocultam os elementos fixos para evitar artefatos da captura longa.

## Limites da validação

Não foram medidos Lighthouse, LCP, CLS ou INP. Nenhuma pontuação ou meta de performance é afirmada. A verificação utilizou Chromium; outros navegadores, aparelhos físicos e tecnologias assistivas precisam de validação adicional antes da versão definitiva.

Os testes verificam o link e a mensagem preparados. Não enviam mensagens reais nem confirmam recebimento no WhatsApp. Não houve deploy Vercel nem publicação automática do ambiente.

A logo não foi fornecida. As licenças e a autoria das fotografias secundárias não estão comprovadas individualmente, e algumas têm resolução limitada. Consulte `IMAGES.md`. A imagem principal é uma visualização arquitetônica gerada por IA; o comparador é um estudo SVG. Serviços, processo e projetos permanecem demonstrativos.

## Inicialização de desenvolvimento

`npm run dev` iniciou corretamente. Requisições funcionais à página inicial, `/projetos/casa-horizonte` e `/privacidade` retornaram HTTP 200 com o conteúdo esperado. O processo foi mantido na porta 3000 para esta sessão; ele deve ser reiniciado em uma nova instância.

Os campos `install_script` e `start_skill` foram salvos no rascunho da configuração do ambiente, com instalação pelo lockfile, build, inicialização e verificações. Isso não publica a configuração nem realiza deploy na Vercel. Para conservar essa versão reutilizável, revise e salve as alterações nas configurações do ambiente e publique-o pela interface.
