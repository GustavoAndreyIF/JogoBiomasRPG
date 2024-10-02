// Essa função usa o math.ramdom para gerar um número aleatório entre 1 e 20, simulando um dado de 20 lados.
export function rolarDado() {
    return Math.floor(Math.random() * 20) + 1;
}