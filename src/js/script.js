// 1 Criar o balao
// 2 Estourar o balao
// 3 Carregar o jogo
var total = 0;

function criarBalao(){
	
	let balao = document.createElement("img");
	balao.setAttribute("src", "img/balloon.png");
	
	let x = Math.floor(Math.random() * 1260);
	let y = Math.floor(Math.random() * 600);
	
	balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
	balao.setAttribute("onclick", "estourar(this)");
	
	document.body.appendChild(balao);
}

function estourar(objeto){
	document.body.removeChild(objeto);
	
	total++;
	let score = document.getElementById('total');
	score.innerHTML = "Baloes estourados: " + total;
}

function carregarJogo(){
	setInterval(criarBalao, 1000);
}