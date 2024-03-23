
// Adiciona um evento de clique para cada seção
document.querySelectorAll('section').forEach(function(section) {
	section.addEventListener('click', function() {
		alert('Você clicou em ' + this.querySelector('h2').innerText);
	});
});

// Adiciona a funcionalidade do botão "Ler Mais"
document.querySelectorAll('.botao').forEach(function(botao) {
	botao.addEventListener('click', function(evento) {
		evento.preventDefault();
		alert('Botão "Ler Mais" clicado para a seção "' + this.parentNode.querySelector('h2').innerText + '"');
	});
});
