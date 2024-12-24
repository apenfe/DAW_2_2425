document.addEventListener('DOMContentLoaded', () => {

    const btnAgregar = document.getElementById('btnAgregar');
    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');
    const tabla = document.getElementById('tablaUsuarios').getElementsByTagName('tbody')[0];

    btnAgregar.addEventListener('click', () => {
        // Obtener valores de los campos
        const nombreValor = nombreInput.value.trim();
        const apellidoValor = apellidoInput.value.trim();

        // Verificar que los campos no estén vacíos
        if (nombreValor && apellidoValor) {
            // Crear nueva fila
            const nuevaFila = tabla.insertRow();

            // Insertar celdas con los valores
            const celdaNombre = nuevaFila.insertCell(0);
            const celdaApellido = nuevaFila.insertCell(1);

            celdaNombre.textContent = nombreValor;
            celdaApellido.textContent = apellidoValor;

            // Limpiar los campos
            nombreInput.value = '';
            apellidoInput.value = '';

            // Volver el foco al campo nombre
            nombreInput.focus();
        }

    });

});
