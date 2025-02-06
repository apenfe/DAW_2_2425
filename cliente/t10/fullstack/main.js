// Función para cargar usuarios en la tabla
async function loadUsers() {
    try {
        const response = await fetch('leer.php');
        const users = await response.json();
        const tbody = document.querySelector('#userTable tbody');
        tbody.innerHTML = '';

        users.forEach(user => {
            tbody.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.nombre}</td>
                    <td>${user.email}</td>
                    <td>${user.edad}</td>
                    <td>
                        <button onclick="editUser(${user.id})">Editar</button>
                        <button onclick="deleteUser(${user.id})">Eliminar</button>
                    </td>
                </tr>
            `;
        });
    } catch (error) {
        alert('Error al cargar usuarios: ' + error);
    }
}

// Función para cargar datos de un usuario en el formulario
async function editUser(id) {
    try {
        const response = await fetch(`leer.php?id=${id}`);
        const user = await response.json();

        document.getElementById('userId').value = user.id;
        document.getElementById('nombre').value = user.nombre;
        document.getElementById('email').value = user.email;
        document.getElementById('edad').value = user.edad;
    } catch (error) {
        alert('Error al cargar usuario: ' + error);
    }
}

// Función para eliminar un usuario
async function deleteUser(id) {
    if (!confirm('¿Está seguro de que desea eliminar este usuario?')) {
        return;
    }

    try {
        const response = await fetch(`borrar.php?id=${id}`);
        const result = await response.json();
        alert(result.message);
        loadUsers(); // Recargar la tabla
    } catch (error) {
        alert('Error al eliminar usuario: ' + error);
    }
}

// Manejar envío del formulario (crear/actualizar)
document.getElementById('userForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const id = document.getElementById('userId').value;
    const url = id ? 'actualizar.php' : 'insertar.php';

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const result = await response.json();
        alert(result.message);

        // Limpiar formulario y recargar tabla
        this.reset();
        document.getElementById('userId').value = '';
        loadUsers();
    } catch (error) {
        alert('Error al guardar usuario: ' + error);
    }
});

// Cargar usuarios al iniciar la página
document.addEventListener('DOMContentLoaded', loadUsers);
