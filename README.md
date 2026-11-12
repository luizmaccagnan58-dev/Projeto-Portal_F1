# Portal F1 — Tudo sobre a Fórmula 1

Portal informativo sobre a Fórmula 1 desenvolvido para a disciplina Desenvolvimento Front-End para Web da Universidade Positivo.

**Integrantes:** Maria Luiza Machado ([@marialuizamachado](https://github.com/marialuizamachado)) e Luiz Maccagnan ([@luizmaccagnan58-dev](https://github.com/luizmaccagnan58-dev))

## Como abrir

**Site publicado:** *(inserir aqui o endereço do GitHub Pages, caso seja ativado)*

Basta abrir o arquivo `index.html` em um navegador moderno, sem servidor e sem instalação. Para usar a extensão Live Server do Visual Studio Code, abra a pasta do projeto e inicie o servidor a partir do `index.html`.

O conteúdo local (imagens, áudio, vídeo, CSS e scripts) funciona sem internet. As páginas que carregam o Bootstrap por CDN (todas, exceto `historia.html` e `pilotos.html`) dependem de conexão para o estilo completo do framework, e o link para o site oficial da Fórmula 1 também exige internet.

## Tecnologias

- HTML5 semântico
- CSS3 (Grid, Flexbox, variáveis CSS, media queries)
- JavaScript puro
- Bootstrap 5.3.2 (via CDN, nas páginas que o utilizam)
- Armazenamento local com `localStorage`

## Estrutura de pastas

```
Projeto-Portal_F1/
├── index.html, historia.html, pilotos.html, equipes.html, ferrari.html,
│   mclaren.html, mercedes.html, redbull.html, williams.html, contato.html
├── css/    style.css · responsivo.css · bootstrap-compat.css ·
│           historia.css · pilotos.css · equipes.css
├── js/     main.js · bootstrap-local.js · pilotos.js · equipes.js ·
│           formulario.js · quiz.js
├── img/    imagens de capa, pilotos, equipes e logotipos
├── video/  evolucao-formula-1.mp4
├── audio/  monza-track-side (freesound_community)
└── doc/    documentação acadêmica (ABNT)
```

## Páginas

| Página                  | Arquivo         | Tecnologia                | JavaScript                         |
| ----------------------- | --------------- | ------------------------- | ---------------------------------- |
| Início                  | `index.html`    | Bootstrap + JS            | `main.js`, `bootstrap-local.js`    |
| História da Fórmula 1   | `historia.html` | **HTML, CSS e JS puros**  | `main.js`, `bootstrap-local.js`    |
| Grandes pilotos         | `pilotos.html`  | **HTML, CSS e JS puros**  | `pilotos.js`, `bootstrap-local.js` |
| Equipes (comparação)    | `equipes.html`  | Bootstrap + JS            | `equipes.js`, `bootstrap-local.js` |
| Ferrari                 | `ferrari.html`  | Bootstrap + JS            | `main.js`, `bootstrap-local.js`    |
| McLaren                 | `mclaren.html`  | Bootstrap + JS            | `main.js`, `bootstrap-local.js`    |
| Mercedes-AMG Petronas   | `mercedes.html` | Bootstrap + JS            | `main.js`, `bootstrap-local.js`    |
| Red Bull Racing         | `redbull.html`  | Bootstrap + JS            | `main.js`, `bootstrap-local.js`    |
| Williams Racing         | `williams.html` | Bootstrap + JS            | `main.js`, `bootstrap-local.js`    |
| Contato e quiz          | `contato.html`  | Bootstrap + JS            | `formulario.js`, `quiz.js`, `bootstrap-local.js` |

## Chaves usadas no localStorage

| Chave                      | Conteúdo                           |
| -------------------------- | ---------------------------------- |
| `portalF1-contatos`        | mensagens do formulário de contato |
| `portalF1-melhorPontuacao` | melhor pontuação do quiz           |

## Matriz de rastreabilidade dos requisitos

| #  | Requisito do professor                                              | Onde foi implementado |
| -- | ------------------------------------------------------------------- | --------------------- |
| 1  | Estruturação e organização da pasta raiz                            | Pastas `css`, `js`, `img`, `video`, `audio`, `doc`; arquivos HTML na raiz |
| 2  | HTML5 semântico                                                     | `header`, `nav`, `main`, `section`, `article`, `footer` e `figure` nas páginas |
| 3  | CSS com seletores TAG, CLASSE e ID                                  | `css/style.css` (`body`, `h1` a `h6`, `.nav-link`, `.card-f1`, `#galeria-f1`, `#pilotos-grid`), `css/equipes.css` (`#busca-equipe`) |
| 3  | CSS em linha, incorporado e externo                                 | Em linha: atributo `style` em `index.html` e `equipes.html`; incorporado: `<style>` em `index.html` e nas páginas das equipes; externo: arquivos da pasta `css` |
| 4  | HTML, CSS e JS puros em pelo menos 2 páginas                        | `historia.html` e `pilotos.html` (não importam o Bootstrap) |
| 5  | Menu com links internos e externos e efeito hover                   | Navbar de todas as páginas, com o link externo "Site oficial" (formula1.com); `.nav-link:hover` em `css/style.css` |
| 6  | Navbar, container responsivo e rodapé em todas as páginas           | `nav.navbar`, `main` com `.container` e `footer` em todas as páginas |
| 7  | Player de vídeo e áudio com controles nativos                       | `historia.html`: `<video controls>`; `index.html`: `<audio controls>` |
| 8  | CSS Grid                                                            | `#pilotos-grid` (`pilotos.html`) e galeria `.galeria-f1` (`index.html`) |
| 9  | CSS Flexbox                                                         | Navbar, `.card-body` e utilitários `d-flex` do Bootstrap; regras em `style.css` e `bootstrap-compat.css` |
| 10 | Cards com título, imagem, texto e link distribuídos horizontalmente | `index.html`: cards Bootstrap lado a lado (`row g-4`); `pilotos.html`: cartões de pilotos |
| 11 | Interface responsiva (smartphone e desktop)                         | Media queries em `responsivo.css`, `style.css`, `historia.css`, `pilotos.css` e `bootstrap-compat.css` (pontos de quebra em 600, 767/768, 900 e 992 px) |
| 12 | Tabela de dados mínima 4 × 4 com títulos                            | `equipes.html`: tabela de 4 colunas × 5 linhas com `thead` |
| 13 | Formulário de contato com text, email, select, submit e textarea    | `contato.html` |
| 14 | Validações nativas: required, minlength, pattern, placeholder       | `contato.html`: nome com `pattern` e `minlength`, e-mail, equipe, mensagem com `minlength` |
| 15 | Estados :focus, :hover e :invalid estilizados                       | `css/style.css`: `.form-control:focus`, `.form-control:hover` e `.form-control:invalid` |
| 16 | Bootstrap para menus, botões, formulários, alertas e cards          | Navbar com `collapse`, `.btn`, `.form-control`, `.alert` e `.card` |
| 17 | Eventos JavaScript para manipular o DOM                             | `click`, `input`, `submit` e `keydown` em `js/` |
| 18 | Estruturas sequencial, condicional, repetição e dados               | `js/quiz.js` (vetor de objetos, `for`, `if`, `map`), `js/equipes.js` (`forEach`, ordenação) |
| 19 | localStorage                                                        | `js/formulario.js` (mensagens) e `js/quiz.js` (melhor pontuação) |
| 20 | GitHub                                                              | Repositório público: *(inserir o endereço do repositório)* |

## Créditos

- Inspiração temática: [site oficial da Fórmula 1](https://www.formula1.com/)
- Áudio: arquivo "monza-track-side" da comunidade [Freesound](https://freesound.org/)
- Bootstrap 5.3.2 (licença MIT)
- Imagens e vídeo: *(informar a fonte e a licença de uso)*

Projeto acadêmico, sem fins comerciais.
