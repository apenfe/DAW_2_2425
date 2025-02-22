document.addEventListener("DOMContentLoaded", () => {

    let formulario = document.getElementById('myForm');

    formulario.addEventListener('submit', (event) => {

        var select = document.getElementById('options');

        if (select.selectedOptions.length === 0) {
            alert('Por favor, selecciona al menos una opción.');
            event.preventDefault();
            return false;
        }

        return true;

    });

});


