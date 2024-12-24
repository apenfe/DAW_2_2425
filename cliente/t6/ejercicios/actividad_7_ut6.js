document.addEventListener('DOMContentLoaded', function () {

    const selectElement = document.getElementById('selectOptions');
    const btnAgregar = document.getElementById('btnAgregar');
    const lista = document.getElementById('lista');

    btnAgregar.addEventListener('click', function () {

        const textoSeleccionado = selectElement.options[selectElement.selectedIndex].text;

        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = textoSeleccionado;

        lista.appendChild(nuevoElemento);

    });
});
