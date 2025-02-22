document.addEventListener("DOMContentLoaded", () => {

    let formulario = document.getElementById('myForm');

    formulario.addEventListener('submit', (event) => {

        var checkbox = document.getElementById('agree');
        var errorMessage = document.getElementById('error-message');

        if (!checkbox.checked) {
            errorMessage.style.display = 'block';
            event.preventDefault()
        } else {
            errorMessage.style.display = 'none';
        }

    });

});


