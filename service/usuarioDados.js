function escolhermesorregiao(mesorregiao, profissao) {
	// parametros
	profissao = parseInt(profissao)
	console.log(profissao)
	localStorage.setItem("mesorregiaoSelecionada", mesorregiao) //chave
	localStorage.setItem("profissaoSelecionada", profissao) //chave
	// Redireciona para a página da ficha
	window.location.href = "../pages/ficha.html"
}
