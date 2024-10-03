// Essa função usa o math.ramdom para gerar um número aleatório entre 1 e 20, simulando um dado de 20 lados.
export function rolarDados() {
  let valor = Math.floor(Math.random() * 20) + 1;
  console.log(valor);
  return valor;
}