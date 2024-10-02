// importa a função de d20
import { rolarDados } from "../../utils/d20script.js";

async function carregarDados() {
  //importa a profissao selecionada pelo usuario
  const { profissaoSelecionada } = await import(
    "../../service/usuarioDados.js"
  );
  // usa a profissao selecionada para importar as perguntas da profissao
  switch (profissaoSelecionada) {
    case "medicoPerguntas":
      const { medicoPerguntas } = await import("../../utils/perguntas.js");
      console.log(medicoPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(medicoPerguntas)
      );
      break;
    case "agricultorPerguntas":
      const { agricultorPerguntas } = await import("../../utils/perguntas.js");
      console.log(agricultorPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(agricultorPerguntas)
      );
      break;
    case "biologoPerguntas":
      const { biologoPerguntas } = await import("../../utils/perguntas.js");
      console.log(biologoPerguntas);
      localStorage.setItem(
        "perguntaSelecionada",
        JSON.stringify(biologoPerguntas)
      );
      break;
  }
}

async function carregarPergunta(numPergunta = 0) {
  // pega o objeto das perguntas da profissão selecionada
  const perguntaSelecionada = await JSON.parse(
    localStorage.getItem("perguntaSelecionada")
  );
  // pega o elemento html onde as perguntas serão inseridas
  const pergunta = document.querySelector("#pergunta");
  const alternativas = document.querySelector("#alternativas");
  const resposta = document.querySelector("#resposta");
  // object.entries transforma o objeto em uma matriz para usar o foreach
  Object.entries(perguntaSelecionada[numPergunta].pergunta).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });
}

async function executarJogo() {
  // carrega os dados
  await carregarDados();
  carregarPergunta();
}

executarJogo();
