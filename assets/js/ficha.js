export function rolarDados() {
    let valor = Math.floor(Math.random() * 20) + 1;
    console.log(valor);
    return valor;
}

/* if (valor >= 1 && valor <= 3) {
        resultado = -5;
    } else if (valor >= 2 && valor <= 5) {
        resultado = -3;
    } else if (valor >= 4 && valor <= 7) {
        resultado = -2;
    } else if (valor >= 6 && valor <= 9) {
        resultado = -1;
    } else if (valor >= 8 && valor <= 11) {
        resultado = 0;
    } else if (valor >= 10 && valor <= 13) {
        resultado = 1;
    } else if (valor >= 12 && valor <= 15) {
        resultado = 2;
    } else if (valor >= 14 && valor <= 17) {
        resultado = 3;
    } else if (valor >= 16 && valor <= 19) {
        resultado = 4;
    } else if (valor >= 18 && valor <= 21) {
        resultado = 5;
    }

    console.log(Valor gerado: ${valor}, Resultado: ${resultado});
    return resultado; resuma o codigo*/

/*// Array de resultados baseado no valor gerado (1 a 20)
    const resultados = [-5, -5, -3, -3, -2, -2, -1, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 5, 5];

    // O valor gerado é usado como índice para o array de resultados
    resultado = resultados[valor - 1]; // valor - 1 porque os índices do array começam em 0

    console.log(`Valor gerado: ${valor}, Resultado: ${resultado}`);
    return resultado;
}*/