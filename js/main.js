document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (evento) => {
      const destino = document.querySelector(link.getAttribute("href"));
      if (destino) {
        evento.preventDefault();
        destino.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
