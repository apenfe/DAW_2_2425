const tabla = document.querySelector('table');
const resultado = document.getElementById('resultado');

function limpiarResaltado() {
    const celdas = document.querySelectorAll('td');
    celdas.forEach(celda => {
        celda.style.backgroundColor = '';
    });
}

tabla.addEventListener('click', function (e) {

    if (e.target.tagName === 'TD') {

        limpiarResaltado();

        e.target.style.backgroundColor = 'lightgray';

        const fila = e.target.parentElement.rowIndex;
        const columna = e.target.cellIndex;

        resultado.textContent = `Fila: ${fila + 1}, Columna: ${columna + 1}`;
    }
});
