document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('[data-bs-toggle="collapse"]').forEach((botao) => {
    const alvo = document.querySelector(botao.getAttribute("data-bs-target"));
    if (!alvo) return;
    botao.addEventListener("click", () => {
      const aberto = alvo.classList.toggle("show");
      botao.setAttribute("aria-expanded", String(aberto));
    });
  });
});
