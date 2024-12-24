function anadir() {

    const codigo = document.getElementById('codigo').value.trim();
    const nombre = document.getElementById('nombre').value.trim();

    if (codigo && nombre) {

        const tabla = document.getElementById('tabla');
        const newRow = document.createElement('tr');

        const checkCell = document.createElement('td');
        checkCell.className = 'check';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkCell.appendChild(checkbox);

        const codeCell = document.createElement('td');
        codeCell.className = 'codigo';
        codeCell.textContent = codigo;

        const nameCell = document.createElement('td');
        nameCell.className = 'nombre';
        nameCell.textContent = nombre;

        newRow.appendChild(checkCell);
        newRow.appendChild(codeCell);
        newRow.appendChild(nameCell);

        tabla.appendChild(newRow);

        document.getElementById('codigo').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('codigo').focus();
    }
}

function borrar() {
    const tabla = document.getElementById('tabla');
    const rows = tabla.getElementsByTagName('tr');

    for (let i = rows.length - 1; i > 0; i--) {
        const checkbox = rows[i].getElementsByTagName('input')[0];
        if (checkbox && checkbox.checked) {
            tabla.removeChild(rows[i]);
        }
    }
}

function mostrar() {
    const tabla = document.getElementById('tabla');
    const rows = tabla.getElementsByTagName('tr');

    for (let i = 1; i < rows.length; i++) {
        const checkbox = rows[i].getElementsByTagName('input')[0];
        if (checkbox && checkbox.checked) {
            const codigo = rows[i].getElementsByTagName('td')[1].textContent;
            const nombre = rows[i].getElementsByTagName('td')[2].textContent;
            alert(`Código: ${codigo}\nNombre: ${nombre}`);
        }
    }
}
