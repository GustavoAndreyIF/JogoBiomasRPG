let atributos = [
  "forca",
  "agilidade",
  "inteligencia",
  "carisma",
  "constituicao",
];
let indiceAtual = 0;

function rolarDadosAtributos() {
  let valor = Math.floor(Math.random() * 20) + 1;

  const resultados = [
    -5, -5, -3, -3, -2, -2, -1, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5,
  ];
  resultado = resultados[valor - 1];

  return resultado;
}

function rolarAtributo() {
  if (indiceAtual < atributos.length) {
    let pericia = atributos[indiceAtual];
    let valor = rolarDadosAtributos();
    document.getElementById(pericia).value = valor;
    // pericia se torna o indice de algum atributo
    /*Ex: o indice é 1, agilidade, então no HTML onde está o id agilidade, vai se tornar o valor que o dado tirou*/
    indiceAtual++;
  } else {
    alert("Todos os atributos já foram preenchidos!");
  }
}

function profissaoAtributos(){
    // pega o valor dos atributos e coloca em um objeto
    const atributosUsuario = {
      forca: document.querySelector("#forca").value,
      agilidade: document.querySelector("#agilidade").value,
      inteligencia: document.querySelector("#inteligencia").value,
      carisma: document.querySelector("#carisma").value,
      constituicao: document.querySelector("#constituicao").value
    }   

    localStorage.setItem('atributosUsuario', atributosUsuario);
}