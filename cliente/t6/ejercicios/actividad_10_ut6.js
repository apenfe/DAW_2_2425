function anadir() {
    // Get input values
    const codigo = document.getElementById('codigo').value.trim();
    const nombre = document.getElementById('nombre').value.trim();

    if (codigo && nombre) {
        // Get table reference
        const tabla = document.getElementById('tabla');

        // Create new row
        const newRow = document.createElement('tr');

        // Create checkbox cell
        const checkCell = document.createElement('td');
        checkCell.className = 'check';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkCell.appendChild(checkbox);

        // Create code cell
        const codeCell = document.createElement('td');
        codeCell.className = 'codigo';
        codeCell.textContent = codigo;

        // Create name cell
        const nameCell = document.createElement('td');
        nameCell.className = 'nombre';
        nameCell.textContent = nombre;

        // Add cells to row
        newRow.appendChild(checkCell);
        newRow.appendChild(codeCell);
        newRow.appendChild(nameCell);

        // Add row to table
        tabla.appendChild(newRow);

        // Clear inputs
        document.getElementById('codigo').value = '';
        document.getElementById('nombre').value = '';
        document.getElementById('codigo').focus();
    }
}

function borrar() {
    const tabla = document.getElementById('tabla');
    const rows = tabla.getElementsByTagName('tr');

    // Start from the end to avoid index issues when removing elements
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
