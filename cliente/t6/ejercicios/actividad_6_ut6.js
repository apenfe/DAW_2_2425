const lista = document.getElementById('lista');
const resultado = document.getElementById('resultado');

lista.addEventListener('click', (evento) => {

    if (evento.target.tagName === 'LI') {

        evento.target.classList.toggle('seleccionado');

        resultado.textContent = evento.target.classList.contains('seleccionado')
            ? `Has seleccionado: ${evento.target.textContent}`
            : '';
    }
});
