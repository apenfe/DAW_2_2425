document.getElementById('btnAgregar').addEventListener('click', function () {
    const texto = document.getElementById('texto').value.trim();

    if (texto !== '') {
        const lista = document.getElementById('lista');
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = texto;
        lista.appendChild(nuevoElemento);

        document.getElementById('texto').value = '';
    }
});