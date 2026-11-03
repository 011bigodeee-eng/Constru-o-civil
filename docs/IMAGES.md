# Imagens de construção civil geradas por IA

A biblioteca ativa foi substituída por 17 imagens fotorrealistas geradas com OpenAI em 3 de novembro de 2026, a pedido do responsável pelo site. São cenas ilustrativas de construção civil brasileira: equipe com EPIs, planejamento, estrutura de concreto, alvenaria, reformas, revestimentos, preparação do terreno e residências finalizadas.

As imagens não documentam funcionários, clientes ou obras executadas pela Silvestre. A capa, o portfólio, as páginas de projetos e o rodapé identificam a geração por IA. As galerias não devem ser apresentadas como registros da evolução de um mesmo imóvel.

## Arquivos e qualidade

Os arquivos ativos ficam em `public/images/ai/`. Cada cena possui um JPEG em qualidade 96 e um fallback WebP em qualidade 92, codificados diretamente a partir do PNG gerado, sem ampliação artificial. Os caminhos novos evitam o cache das fotografias anteriores. Dimensões reais, proporção, descrição acessível e ponto focal estão no manifesto `src/data/images.ts`.

Next/Image entrega versões responsivas com qualidade 90. O componente considera também a altura do quadro e a densidade da tela ao escolher a resolução. O recorte mantém as proporções; a galeria usa `scale-down` para evitar ampliar a imagem além do tamanho disponível. Os PNGs de geração ficam fora do checkout em `/workspace/generated_images`; a aplicação usa os arquivos codificados que estão no repositório.

## Procedência

Origem: geração por IA com OpenAI para este site. As imagens são sintéticas e não têm um repositório fotográfico de terceiros como fonte. Os arquivos fotográficos antigos permanecem fora da biblioteca ativa; suas referências de licença não se aplicam às novas imagens. Não há alegação de fotografia documental ou de obras reais da empresa.

## Marca e fontes

A logo original ainda não foi fornecida. A interface utiliza o nome da empresa em texto. Configure `company.logo` com o arquivo autorizado, preservando suas proporções. Inter e Space Grotesk permanecem locais em WOFF2, com licenças SIL Open Font License em `public/fonts/OFL-*.txt`.
