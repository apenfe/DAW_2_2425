document.addEventListener('DOMContentLoaded', () => {

    const btnAgregar = document.getElementById('btnAgregar');
    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');
    const tabla = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];

    btnAgregar.addEventListener('click', () => {

        const nombreValor = nombreInput.value.trim();
        const apellidoValor = apellidoInput.value.trim();

        if (nombreValor && apellidoValor) {

            const nuevaFila = tabla.insertRow();

            const celdaNombre = nuevaFila.insertCell(0);
            const celdaApellido = nuevaFila.insertCell(1);

            celdaNombre.textContent = nombreValor;
            celdaApellido.textContent = apellidoValor;

            nombreInput.value = '';
            apellidoInput.value = '';

            nombreInput.focus();
        }

    });

});
