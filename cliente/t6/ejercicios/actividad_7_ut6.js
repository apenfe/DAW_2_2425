document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos
    const selectElement = document.getElementById('selectOptions');
    const btnAgregar = document.getElementById('btnAgregar');
    const lista = document.getElementById('lista');

    // Agregar evento click al botón
    btnAgregar.addEventListener('click', function () {
        // Obtener el valor seleccionado
        const valorSeleccionado = selectElement.value;
        const textoSeleccionado = selectElement.options[selectElement.selectedIndex].text;

        // Crear nuevo elemento li
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = textoSeleccionado;

        // Agregar el elemento a la lista
        lista.appendChild(nuevoElemento);

    });
});
