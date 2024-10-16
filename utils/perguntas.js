let regiaoSelecionada = localStorage.getItem("mesorregiaoSelecionada")
// objetos contendo todas as perguntas
export const pedreiroPerguntas = {}
export const agricultorPerguntas = {}
export const medicoPerguntas = {
	0: {
		pergunta: {
			p1: `Bem vindo à cidade, soube que você é médico certo? A população vem reclamando de sentir muitas dores e estresse nos ultimos dias, o que podemos fazer?`,
		},
		alternativas: {
			0: "O que acha de organizar um grupo de apoio?",
			1: "E se implementarmos atividades de lazer na comunidade?",
		},
		dt: {
			0: 16,
			1: 10,
		},
		dtbonus: {
			0: "carisma",
			1: "forca",
		},
		resultado: {
			0: {
				true: "a população se apoiou nos seus desafios e vemos agora uma luta na comunidade por melhor qualidade de vida",
				false: "a população pelo seu conservadorismo achou isso uma palhaçada",
			},
			1: {
				true: "apesar da má infraestrutura a população procurou incentivar o lazer e agora possuimos um centro de incentivo a esportes",
				false: "infraestrutura atrapalhou o processo e a população não achou tempo;",
			},
		},
	},

	1: {
		pergunta: {
			p1: `doutor, ta tendo surto de doenças aqui, o que fazemos?`,
		},
		alternativas: {
			0: "definitivamente é uma zoonose, vamos observar os animais primeiro",
			1: "vamos focar em cuidar da população e aumentar sua imunidade",
		},
		dt: {
			0: 15,
			1: 15,
		},
		dtbonus: {
			0: "inteligencia",
			1: "agilidade",
		},
		resultado: {
			0: {
				true: "transmissão da zoonose, agora descobrimos ser leishmaniose visceral, é reduzida e trás alívio à comunidade",
				false: "O programa não é bem aceito ou há resistência, e a taxa de infecção continua a crescer, levando a mais doenças",
			},
			1: {
				true: "conseguimos verba para a cidade e os moradores apresentam melhora. a confiança na medicina local aumenta.",
				false: "não foi possivel conseguir verba para medicamentos e infraestrutura, casos mais graves aparecem",
			},
		},
	},

	2: {
		pergunta: {
			p1: `muito bom! a população está protegida da leishmaniose, mas ainda assim é importante uma campanha para prevenir eventos futuros. o que fazer?
a população é prejudicada pela doença, mas ainda dá tempo de previnir piora. o que fazer?
`,
		},
		alternativas: {
			0: "fazer campanha educativa",
			1: "Organizar reuniões com donos de fazendas e agricultores",
		},
		dt: {
			0: 15,
			1: 15,
		},
		dtbonus: {
			0: "carisma",
			1: "carisma",
		},
		resultado: {
			0: {
				true: "As pessoas começam a adotar medidas preventivas em casa, como o uso de repelentes e a manutenção de áreas limpas, resultando em uma redução significativa no risco de novos casos",
				false: "A campanha não atrai o interesse da comunidade, e muitos moradores permanecem desinformados sobre a leishmaniose",
			},
			1: {
				true: "Os agricultores se mostram receptivos e adotam práticas de manejo que reduzem a população de vetores",
				false: "Os agricultores não veem a necessidade das medidas propostas, levando à continuidade das práticas que favorecem a transmissão da doença",
			},
		},
	},

	3: {
		pergunta: {
			p1: `Muitas minas estão desabando trazendo prejuizos catastroficos. O que fazemos?`,
		},
		alternativas: {
			0: "Fazer uma equipe de resgate ",
			1: "fazer uma equipe de segurança das minas",
		},
		dt: {
			0: 0,
			1: 16,
		},
		dtbonus: {
			0: "inteligencia",
			1: "carisma",
		},
		resultado: {
			0: {
				true: "conseguimos boas pessoas e os trabalhadores começam a ser resgatados com segurança, trazendo alivio  apopulação",
				false: "Os esforços são mal planejados e alguns trabalhadores não são encontrados, gerando frustração e desconfiança",
			},
			1: {
				true: "é descoberto problemas estruturais e conseguimos evitar novos desabamentos, garantindo a segurança dos trabalhadores",
				false: "A equipe não identifica os problemas estruturais devido a uma inspeção inadequada ou falta de recursos. Um novo desabamento ocorre, resultando em ferimentos ou até mesmo mortes de trabalhadores, gerando descontentamento e medo na comunidade, além de comprometer a credibilidade da equipe.",
			},
		},
	},

}

export const artesaoPerguntas = {}
