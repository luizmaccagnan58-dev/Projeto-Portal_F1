document.addEventListener("DOMContentLoaded", () => {
  const botoes = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("#pilotos-grid [data-category]");
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      const filtro = botao.dataset.filter;
      botoes.forEach((item) => item.classList.toggle("active", item === botao));
      cards.forEach((card) => {
        const categorias = card.dataset.category.split(/\s+/);
        const exibir = filtro === "all" || categorias.includes(filtro);
        card.closest(".col-md-4")?.classList.toggle("d-none", !exibir);
        card.hidden = !exibir;
      });
    });
  });
});
