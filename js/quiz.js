document.addEventListener("DOMContentLoaded", () => {
  const area = document.getElementById("quiz-container");
  const botao = document.getElementById("submit-quiz");
  const resultado = document.getElementById("quiz-result");
  const placar = document.querySelector("#best-score-display strong");
  if (!area || !botao || !resultado) return;

  const perguntas = [
    { pergunta:"Em que ano começou o Campeonato Mundial de Fórmula 1?", opcoes:["1948","1950","1952","1955"], correta:1 },
    { pergunta:"Qual piloto brasileiro conquistou três títulos mundiais?", opcoes:["Rubens Barrichello","Felipe Massa","Ayrton Senna","Emerson Fittipaldi"], correta:2 },
    { pergunta:"Qual equipe é conhecida pelo tradicional carro vermelho?", opcoes:["Ferrari","Williams","McLaren","Mercedes"], correta:0 },
    { pergunta:"O que significa a bandeira quadriculada?", opcoes:["Safety Car","Fim da sessão/corrida","Pista escorregadia","Desclassificação"], correta:1 },
    { pergunta:"Qual é a função principal do pit stop?", opcoes:["Trocar pneus e realizar ajustes","Aumentar a velocidade máxima","Mudar o circuito","Encerrar a corrida"], correta:0 },
    { pergunta:"Qual equipe teve forte domínio na era híbrida iniciada em 2014?", opcoes:["Lotus","Jordan","Mercedes","Minardi"], correta:2 },
    { pergunta:"Quantos pilotos largam em cada carro de uma equipe durante a corrida?", opcoes:["Um","Dois","Três","Quatro"], correta:0 },
    { pergunta:"Qual destes é um circuito de rua famoso da F1?", opcoes:["Monza","Silverstone","Mônaco","Spa-Francorchamps"], correta:2 },
    { pergunta:"Qual componente gera carga aerodinâmica no carro?", opcoes:["Asas","Volante","Banco","Capacete"], correta:0 },
    { pergunta:"Qual equipe venceu o campeonato de construtores em 2024?", opcoes:["Ferrari","McLaren","Red Bull","Mercedes"], correta:1 }
  ];
  const chave = "portalF1-melhorPontuacao";
  let melhor = Number(localStorage.getItem(chave) || 0);
  placar.textContent = `${melhor}/${perguntas.length}`;
  
area.innerHTML = perguntas.map((item, indice) => `
    <fieldset class="quiz-question card-f1 p-3 mb-3"
              style="color: #ffffff !important;">

        <legend class="h5"
                style="color: #ffffff !important;">
            ${indice + 1}. ${item.pergunta}
        </legend>

        <div class="quiz-options">
            ${item.opcoes.map((opcao, posicao) => `
                <label class="d-block mb-2"
                       style="color: #ffffff !important;">

                    <input type="radio"
                           name="pergunta-${indice}"
                           value="${posicao}">

                    ${opcao}
                </label>
            `).join("")}
        </div>

    </fieldset>
`).join("");


  botao.addEventListener("click", () => {
    let pontuacao = 0;
    let respondidas = 0;
    for (let i = 0; i < perguntas.length; i += 1) {
      const selecionada = area.querySelector(`input[name="pergunta-${i}"]:checked`);
      if (selecionada) {
        respondidas += 1;
        if (Number(selecionada.value) === perguntas[i].correta) pontuacao += 1;
      }
    }
    if (respondidas < perguntas.length) {
      resultado.textContent = `Responda às ${perguntas.length} perguntas antes de finalizar. Você respondeu ${respondidas}.`;
      resultado.className = "mt-3 alert alert-warning";
      return;
    }
    resultado.textContent = `Você acertou ${pontuacao} de ${perguntas.length} questões!`;
    resultado.className = "mt-3 alert alert-success";
    if (pontuacao > melhor) {
      melhor = pontuacao;
      localStorage.setItem(chave, String(melhor));
      placar.textContent = `${melhor}/${perguntas.length}`;
      resultado.textContent += " Nova melhor pontuação salva!";
    }
    botao.disabled = true;
    botao.textContent = "Quiz finalizado";
  });
});