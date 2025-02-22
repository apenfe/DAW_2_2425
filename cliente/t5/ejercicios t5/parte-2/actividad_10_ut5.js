document.addEventListener("DOMContentLoaded", () => {

    document.getElementById('formulario').addEventListener('submit', function (event) {

        var nombre = document.getElementById('nombre').value;
        var apellidos = document.getElementById('apellidos').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var errorMessage = document.getElementById('error-message');

        if (!nombre || !apellidos || !email || !password) {
            errorMessage.textContent = 'Todos los campos son obligatorios.';
            event.preventDefault();
        } else {
            errorMessage.textContent = '';
        }

    });

});


