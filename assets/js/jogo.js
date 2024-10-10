// importa a função de d20
import { rolarDados } from "../../utils/d20script.js";
let profissaoAtributos = localStorage.getItem("atributosUsuario");
let erros = 0;

async function carregarDados() {
  //importa a mesoregiao selecionada pelo usuario.
  const profissaoSelecionada = localStorage.getItem("mesorregiaoSelecionada");

  // usa a profissao selecionada para importar as perguntas da profissao
  switch (profissaoSelecionada) {
    case "centralPotiguar":
      const { medicoPerguntas } = await import("../../utils/perguntas.js");
      console.log(medicoPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(medicoPerguntas)
      );
      break;
    case "lestePotiguar":
      const { pedreiroPerguntas } = await import("../../utils/perguntas.js");
      console.log(pedreiroPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(pedreiroPerguntas)
      );
      break;
    case "agrestePotiguar":
      const { artesaoPerguntas } = await import("../../utils/perguntas.js");
      console.log(artesaoPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(artesaoPerguntas)
      );
    case "oestePotiguar":
      const { agricultorPerguntas } = await import("../../utils/perguntas.js");
      console.log(agricultorPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(agricultorPerguntas)
      );
      break;
  }
}
// as perguntas sempre começam no zero, e vai aumentando toda vez que for executada denovo pelo botao
async function carregarPergunta(numPergunta = 0) {
  // pega o objeto das perguntas da profissão selecionada
  const perguntaSelecionada = await JSON.parse(
    localStorage.getItem("perguntaSelecionada")
  );
  // pega o elemento html onde as perguntas serão inseridas
  const pergunta = document.querySelector("#pergunta");
  const alternativas = document.querySelector("#alternativas");
  const resposta = document.querySelector("#resposta");
  // object.entries transforma o objeto em uma matriz para usar o
  // esse foreach e so para as perguntas
  Object.entries(perguntaSelecionada[numPergunta].pergunta).forEach(
    ([key, value]) => {
      // se a chave do objeto comeca com p, cria um elemento p e insere o valor
      if (key.indexOf("p") === 0) {
        const pElement = document.createElement("p");
        pElement.textContent = value;
        pergunta.appendChild(pElement);
      }
      // se a chave do objeto for img, cria um elemento img e insere o valor
      if (key === "img") {
        const imgElement = document.createElement("img");
        imgElement.src = `./assets/img/${value}.png`; // se a gente quiser pode colocar imagens da web ao inves de imagens locais
        pergunta.appendChild(imgElement);
      }
    }
  );

  Object.entries(perguntaSelecionada[numPergunta].alternativas).forEach(
    ([key, value]) => {
      const alternativabtn = document.createElement("button");
      alternativabtn.textContent = value;

      alternativabtn.addEventListener("click", () => {
        const resultado = document.createElement("p");
        // pega o valor string que a alternativa usa de dtbonus do bonus da profissao
        const dtBonus = perguntaSelecionada[numPergunta].dtbonus;
        // usa o valor string para pegar o valor numerico do bonus da profissao
        const bonusAplicado = profissaoAtributos[dtBonus[key]];
        // se a chave da alternativa escolhida for igual a chave do valor da dt, a resposta e exibida
        if (
          rolarDados() + bonusAplicado >=
          perguntaSelecionada[numPergunta].dt[key]
        ) {
          // se der bom acontece isso, se não acontece aquilo (else)
          resultado.textContent =
            perguntaSelecionada[numPergunta].resultado[key].true;
          console.log("Você acertou!");
        } else {
          resultado.textContent =
            perguntaSelecionada[numPergunta].resultado[key].false;
          erros++;
          console.log("Você errou!");
          console.log(erros);
        }
        resposta.appendChild(resultado);
        // esconde os botoes apos a escolha
        alternativas.style.display = "none";
        // cria o botao da proxima pergunta
        botaoProximaPergunta(numPergunta + 1);
      });
      alternativas.appendChild(alternativabtn);
    }
  );
}

// recebe de parametro o numero da pergunta anterior e adciona mais um
function botaoProximaPergunta(numPergunta) {
  const respostabtn = document.querySelector("#resposta");
  const proximaPergunta = document.createElement("button");
  proximaPergunta.textContent = "Avançar";
  proximaPergunta.addEventListener("click", () => {
    // limpa tudo e coloca a proxima pergunta
    document.querySelector("#pergunta").innerHTML = "";
    document.querySelector("#alternativas").innerHTML = "";
    document.querySelector("#resposta").innerHTML = "";
    // exibi os botoes das alternativas
    alternativas.style.display = "block";
    carregarPergunta(numPergunta);
  });
  respostabtn.appendChild(proximaPergunta);
  perdeuJogo();
}

async function executarJogo() {
  // carrega os dados
  await carregarDados();
  // carrega a primeira pergunta
  carregarPergunta();
}

function perdeuJogo() {
  if (erros >= 3) {
    // isso aqui apaga tudo quando perde, futuramente adicionar uma tela de game over
    document.querySelector("#pergunta").innerHTML = "";
    document.querySelector("#alternativas").innerHTML = "";
    document.querySelector("#resposta").innerHTML = "";
    console.log("Você perdeu o jogo!");
    const respostabtn = document.querySelector("#resposta");
    const jogarNovamentebtn = document.createElement("button");
    jogarNovamentebtn.textContent = "Jogar Novamente";
    jogarNovamentebtn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
    respostabtn.appendChild(jogarNovamentebtn);
  }
}

executarJogo();
