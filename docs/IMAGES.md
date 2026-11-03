# Direção fotográfica — construção de verdade

A revisão substitui a direção de arquitetura de luxo por execução de obras. O manifesto `src/data/images.ts` contém 17 fotografias de referência, com origem fixada no commit, dimensões originais e otimizadas, seção, texto alternativo e ponto focal desktop/mobile. Não há imagens geradas por IA na biblioteca ativa.

## Seleção e enquadramento

- Hero: profissionais com capacetes e coletes diante de estrutura de concreto em execução; imagem original 2000 × 1333. No celular, uma faixa fotográfica própria mantém trabalhadores visíveis acima do texto e dos botões.
- Sobre: preservada a mesma fotografia de profissional com capacete analisando uma planta em uma obra.
- Serviços: execução de estruturas, renovação com pintura, alvenaria residencial em andamento, assentamento de blocos, aplicação de pintura com luvas e roupa de proteção e canteiro com guindastes.
- Portfólio: obras em andamento, etapas construtivas, acabamentos e resultados finais. As seis rotas e galerias foram mantidas. Fotografias independentes não são apresentadas como evolução do mesmo imóvel.
- Processo e apresentação institucional: plantas, ferramentas e profissionais com EPIs em um canteiro.

O recorte utiliza CSS sem deformar as proporções. As fotografias principais agora partem dos **JPEGs originais, copiados sem recompressão**, e recebem uma única otimização pelo Next/Image com qualidade 90. Os WebP anteriores ficam como fallback. A escolha de resolução considera a largura, a altura do recorte, a proporção original e a densidade de pixels da tela. Novos caminhos de imagem evitam reutilizar as versões antigas do cache.

A foto de 400 × 400 foi retirada da galeria. A referência de acompanhamento de execução comercial foi substituída por um original de 2000 × 1054, e a de movimentação de materiais por um original de 1609 × 1206. Os originais de alvenaria agora preservam os 3024 × 4032 pixels disponíveis, sem a redução anterior. A seção Sobre mantém a fotografia e o layout dividido, com um quadro menos vertical para evitar esticar o recorte. A galeria usa `scale-down` para não ampliar arquivos pequenos além do tamanho disponível.

As fontes menores ainda têm 750 ou 800 pixels; nenhum processamento foi apresentado como recuperação de detalhes inexistentes. Para obter nitidez de alta densidade em ampliações grandes dessas referências, será necessário substituí-las por originais maiores e autorizados. Não houve ampliação artificial.

## Origem e direitos

Fontes: `Orion56/Construction-Company-Site-Template`, `litonsarker369/buildream-Constructor`, `Arplight/Builderz_Construction`, `Alex-Programming/PAINTER-Website-Template`, `iani-garfalski/Olympia-Brickwork`, além das fontes já utilizadas nas imagens preservadas de Sobre e resultados finais. Nenhum código, layout, marca ou depoimento dessas fontes foi incorporado. As URLs completas e commits constam no manifesto.

**A disponibilidade pública de um arquivo não comprova licença comercial.** A autoria e os direitos fotográficos individuais continuam pendentes; obtenha autorização ou substitua por fotos próprias autorizadas/licenciadas antes da divulgação comercial. Essas imagens não representam a equipe ou obras da Silvestre. A licença MIT de código de Constra foi preservada por transparência, sem tratá-la como comprovação dos direitos fotográficos.

A imagem de luxo gerada por IA e os arquivos sem uso da versão anterior foram removidos da biblioteca do projeto. As capturas enviadas pelo usuário continuam sendo apenas referências. O comparador permanece como estudo SVG original, claramente conceitual.

## Marca e fontes

A logo original ainda não foi fornecida. A interface utiliza o nome da empresa em texto, sem símbolo inventado. Configure `company.logo` com o arquivo autorizado, preservando suas proporções. Inter e Space Grotesk permanecem locais em WOFF2, com licenças SIL Open Font License em `public/fonts/OFL-*.txt`.
