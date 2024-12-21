// Obtener la tabla y el elemento resultado
const tabla = document.querySelector('table');
const resultado = document.getElementById('resultado');

// Limpiar el resaltado anterior
function limpiarResaltado() {
    const celdas = document.querySelectorAll('td');
    celdas.forEach(celda => {
        celda.style.backgroundColor = '';
    });
}

// Agregar evento click a la tabla
tabla.addEventListener('click', function (e) {
    // Verificar que se hizo clic en una celda
    if (e.target.tagName === 'TD') {
        // Limpiar resaltado anterior
        limpiarResaltado();

        // Resaltar la celda clicada
        e.target.style.backgroundColor = 'lightgray';

        // Obtener índices de fila y columna
        const fila = e.target.parentElement.rowIndex;
        const columna = e.target.cellIndex;

        // Mostrar índices en el elemento resultado
        resultado.textContent = `Fila: ${fila + 1}, Columna: ${columna + 1}`;
    }
});
