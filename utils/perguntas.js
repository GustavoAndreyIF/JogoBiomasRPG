import { regiaoSelecionada } from "../service/usuarioDados.js";
// objetos contendo todas as perguntas
export const medicoPerguntas = {};
export const agricultorPerguntas = {
  0: {
    pergunta: {
      str1: `Você está trabalhando em uma fazenda localizada no ${regiaoSelecionada}.`,
      img: "404",
      str2: "Durante a estação seca, você percebe que a produtividade das suas plantações está diminuindo drasticamente. Qual seria a melhor estratégia para lidar com essa situação?",
    },
    alternativas: {
      0: "Implementar um sistema de irrigação por gotejamento",
      1: "Mudar para culturas mais resistentes à secas",
      2: "Aumentar a frequência de fertilização",
    },
    dt: 10,
    resultado: {
      0: {
        true: "Durante a estação seca, você percebe que a produtividade das suas plantações está diminuindo drasticamente. Qual seria a melhor estratégia para lidar com essa situação?",
        false:
          "Infelizmente, o sistema de irrigação por gotejamento não foi suficiente para compensar a severidade da seca. A produtividade das plantações continuou a diminuir.",
      },
      1: {
        true: "A mudança para culturas mais resistentes à seca foi uma excelente decisão. As novas plantas se adaptaram bem às condições áridas, e a produtividade se manteve estável durante a estação seca.",
        false:
          "As novas culturas não se adaptaram tão bem quanto esperado. A produtividade não melhorou e você enfrentou perdas significativas.",
      },
      2: {
        true: "Aumentar a frequência de fertilização ajudou a manter as plantas saudáveis e produtivas, mesmo com a falta de água. A colheita foi melhor do que o esperado.",
        false:
          "Apesar da fertilização adicional, a falta de água foi um fator limitante. As plantas não conseguiram absorver os nutrientes adequadamente, resultando em uma baixa produtividade.",
      },
    },
  },
};
export const biologoPerguntas = {};
