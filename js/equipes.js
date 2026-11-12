document.addEventListener("DOMContentLoaded", () => {
  const tabela = document.querySelector(".table-responsive table");
  if (!tabela) return;
  const cabecalho = tabela.querySelector("thead");
  const corpo = tabela.querySelector("tbody");
  const controles = document.createElement("div");
  controles.className = "d-flex flex-wrap gap-2 align-items-center mb-3";
  controles.innerHTML = '<label for="busca-equipe" class="form-label mb-0">Pesquisar equipe:</label><input id="busca-equipe" class="form-control" type="search" placeholder="Digite o nome da equipe" style="max-width:320px">';
  tabela.parentElement.before(controles);
  const busca = controles.querySelector("input");
  busca.addEventListener("input", () => {
    const termo = busca.value.trim().toLocaleLowerCase("pt-BR");
    [...corpo.rows].forEach((linha) => { linha.hidden = !linha.textContent.toLocaleLowerCase("pt-BR").includes(termo); });
  });
  cabecalho.querySelectorAll("th").forEach((th, indice) => {
    th.tabIndex = 0; th.setAttribute("role", "button"); th.title = "Clique para ordenar esta coluna";
    const ordenar = () => {
      const linhas = [...corpo.rows];
      const asc = th.dataset.order !== "asc";
      linhas.sort((a,b) => a.cells[indice].textContent.localeCompare(b.cells[indice].textContent,"pt-BR",{numeric:true}) * (asc ? 1 : -1));
      linhas.forEach((linha) => corpo.appendChild(linha)); th.dataset.order = asc ? "asc" : "desc";
    };
    th.addEventListener("click", ordenar); th.addEventListener("keydown", (e) => { if(e.key === "Enter" || e.key === " "){e.preventDefault(); ordenar();} });
  });
});
