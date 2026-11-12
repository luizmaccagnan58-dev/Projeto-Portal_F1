# Portal F1 — Projeto Front-End

Projeto acadêmico de portal informativo sobre Fórmula 1.
Integrantes: Luiz Fernando Maccagnan (@luizmaccagnan58-dev) E Maria Luiza Machado (@marialuizamachado).

## Abrir no Visual Studio Code
1. Extraia ou abra a pasta `Portal_F1` no VS Code.
2. Abra `index.html` no navegador (duplo clique) ou utilize a extensão Live Server.
3. Para testar o modo offline, desligue a internet e abra `index.html`. O CSS local de compatibilidade mantém o layout essencial e os scripts do projeto funcionam localmente.

## Páginas
`index.html`, `historia.html`, `pilotos.html`, `equipes.html`, `ferrari.html`, `mclaren.html`, `mercedes.html`, `redbull.html`, `williams.html` e `contato.html`.

## Tecnologias e recursos
HTML5 semântico, CSS3, CSS Grid, Flexbox, JavaScript puro, Bootstrap 5 (nas páginas que carregam a folha CDN quando há internet; `historia.html` e `pilotos.html` foram mantidas sem framework), formulários HTML, validação nativa e `localStorage`.

## Funcionalidades JavaScript
- `main.js`: navegação mobile e rolagem suave.
- `pilotos.js`: filtros por categoria.
- `equipes.js`: busca e ordenação da tabela.
- `formulario.js`: validação e armazenamento local de mensagens.
- `quiz.js`: quiz de 10 perguntas, pontuação e melhor resultado persistido.
- `bootstrap-local.js`: comportamento local do menu responsivo.

## Observação sobre serviços externos
O link para o site oficial da Fórmula 1 abre a internet. O conteúdo local, imagens, áudio, vídeo, CSS e scripts do portal permanecem no projeto. O uso do Bootstrap CDN nas páginas que o incluem depende de conexão; a folha `css/bootstrap-compat.css` fornece estilos locais de contingência para o layout.
