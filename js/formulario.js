document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");
  if (!form || !feedback) return;
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    if (!form.reportValidity()) return;
    const registro = {
      nome: form.elements.nome.value.trim(),
      email: form.elements.email.value.trim(),
      equipe: form.elements.equipe.value,
      mensagem: form.elements.mensagem.value.trim(),
      enviadoEm: new Date().toISOString()
    };
    const historico = JSON.parse(localStorage.getItem("portalF1-contatos") || "[]");
    historico.push(registro);
    localStorage.setItem("portalF1-contatos", JSON.stringify(historico));
    feedback.textContent = "Mensagem registrada neste navegador com sucesso. Obrigado pelo contato!";
    feedback.className = "mt-3 alert alert-success";
    form.reset();
  });
});
