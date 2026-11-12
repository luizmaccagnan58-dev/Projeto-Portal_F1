# Documentação do Projeto — Portal Fórmula 1

## 1. Identificação
**Curso:** Engenharia de Software  
**Disciplina:** Desenvolvimento Front-End para Web  
**Projeto:** Portal Fórmula 1  
**Integrantes:** Luiz Maccagnan e Maria Luiza Machado  
**Instituição:** Universidade Positivo  

## 2. Tema e objetivo
O Portal Fórmula 1 é um site informativo desenvolvido para apresentar a história da categoria, seus pilotos marcantes e equipes relevantes. O objetivo é organizar o conteúdo em páginas navegáveis, com interface responsiva, recursos multimídia e interações implementadas com JavaScript.

## 3. Público-alvo
Pessoas interessadas em automobilismo, fãs de Fórmula 1 e visitantes que desejam conhecer a evolução da categoria, pilotos e equipes.

## 4. Ferramentas e tecnologias
- Visual Studio Code para edição dos arquivos.
- HTML5 para estrutura semântica.
- CSS3 para identidade visual, Flexbox, Grid Layout e media queries.
- JavaScript para eventos, manipulação do DOM, validação complementar e persistência local.
- Bootstrap 5 para componentes e classes utilitárias nas páginas que o importam.
- Git e GitHub para versionamento e disponibilização pública (inserir o endereço real do repositório antes da entrega).

## 5. Estrutura e mapa do site
A página inicial (`index.html`) direciona para História, Pilotos, Equipes, páginas individuais das equipes e Contato & Quiz. As páginas compartilham navegação e rodapé.

**Mapa:** Início → História; Início → Pilotos; Início → Equipes → Ferrari / McLaren / Mercedes / Red Bull / Williams; Início → Contato & Quiz.

## 6. UX — Experiência do Usuário
A organização em páginas temáticas reduz a quantidade de informação por tela e facilita a exploração. A navegação persistente permite trocar de seção sem retornar à página inicial. Os filtros de pilotos e a busca na tabela ajudam a localizar informações.

## 7. UI — Interface do Usuário
A interface utiliza fundo escuro, textos claros e vermelho como cor de destaque, remetendo à identidade visual associada às corridas. Cards, títulos hierárquicos, imagens e espaçamentos ajudam a separar os conteúdos.

## 8. Usabilidade e acessibilidade
Foram utilizados rótulos associados aos campos, textos alternativos nas imagens, controles nativos de áudio e vídeo, foco visível nos campos, mensagens de retorno e navegação adaptável para telas menores.

## 9. Paleta de cores e tipografia
A paleta principal utiliza preto/grafite (`#101010`, `#1C1C1C`), vermelho (`#E10600`), branco (`#FFFFFF`) e cinza (`#A5A5A5`). A tipografia prioriza fontes sem serifa, com títulos em estilo esportivo e corpo de texto legível. Fontes locais de sistema são utilizadas como alternativa quando fontes remotas não estiverem disponíveis.

## 10. Responsividade e layout
O projeto combina Flexbox para alinhamentos e CSS Grid para a galeria e a grade de pilotos. Media queries reorganizam os elementos em larguras menores, com colunas reduzidas e menu recolhível.

## 11. Recursos multimídia
A página inicial contém um player de áudio com controles nativos. A página História contém um player de vídeo com controles nativos. Os arquivos de mídia estão armazenados nas pastas `audio` e `video`.

## 12. Aplicações de JavaScript
- `main.js`: adiciona comportamento ao menu em telas pequenas e rolagem suave para âncoras.
- `pilotos.js`: filtra os cards por categoria (históricos, atuais e brasileiros), utilizando eventos e manipulação do DOM.
- `equipes.js`: cria campo de pesquisa e permite ordenar a tabela por coluna.
- `formulario.js`: utiliza validação nativa (`required`, `minlength`, `pattern`, `type=email`) e registra os envios no `localStorage` do navegador.
- `quiz.js`: apresenta 10 questões, percorre respostas, aplica condições para corrigir, calcula pontuação e salva a melhor pontuação com `localStorage`.
- `bootstrap-local.js`: controla a expansão do menu em modo local.

As quatro estruturas fundamentais estão presentes: sequencial (execução das etapas de eventos), condicional (`if` na correção e validação), repetição (`for` e iteração de listas) e dados (vetores e objetos das perguntas e registros).

## 13. Formulário e persistência
O formulário de contato exige nome, e-mail, equipe e mensagem. Os registros são salvos localmente no navegador e não são enviados para um servidor. O quiz armazena somente a melhor pontuação no navegador atual. A limpeza dos dados do navegador pode apagar esses registros.

## 14. Organização de arquivos
Os HTMLs ficam na raiz; CSS em `css`; JavaScript em `js`; imagens em `img`; áudio em `audio`; vídeo em `video`; documentação em `doc`.

## 15. Divisão de tarefas
Preencher com a divisão real acordada pela equipe antes da entrega. A documentação não deve atribuir atividades que não tenham sido efetivamente realizadas por cada integrante.

## 16. Dificuldades encontradas e melhorias
Preencher com as dificuldades reais enfrentadas durante o desenvolvimento e os testes realizados pela equipe.

## 17. Referências e inspiração
- Fórmula 1 — site oficial: https://www.formula1.com/
- MDN Web Docs — HTML: https://developer.mozilla.org/pt-BR/docs/Web/HTML
- MDN Web Docs — CSS: https://developer.mozilla.org/pt-BR/docs/Web/CSS
- MDN Web Docs — JavaScript: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
- Bootstrap 5 — documentação: https://getbootstrap.com/docs/5.3/

## 18. Testes finais necessários
Antes da entrega, a equipe deve testar cada link, abrir todas as páginas em desktop e smartphone, verificar o formulário e o quiz em navegador, testar o áudio e o vídeo, conferir a execução offline e publicar o repositório no GitHub. Inserir na versão final o link real do repositório e evidências das telas.
