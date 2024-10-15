let regiaoSelecionada = localStorage.getItem("mesorregiaoSelecionada")
// objetos contendo todas as perguntas
export const pedreiroPerguntas = {}
export const agricultorPerguntas = {}
export const medicoPerguntas = {
	0: {
		pergunta: {
			p1: `1`,
			p2: "2",
			img: "assets/img/",
		},
		alternativas: {
			0: "1",
			1: "2",
		},
		dt: {
			0: 0,
			1: 16,
			2: 20,
		},
		dtbonus: {
			0: "carisma",
			1: "carisma",
			2: "carisma",
		},
		resultado: {
			0: {
				true: "1",
				false: "0",
			},
			1: {
				true: "1",
				false: "0",
			},
			2: {
				true: "1",
				false: "0",
			},
		},
	}, 
}

export const artesaoPerguntas = {}
