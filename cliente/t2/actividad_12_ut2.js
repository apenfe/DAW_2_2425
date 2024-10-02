window.addEventListener("DOMContentLoaded", function () {

    let numero = prompt("Introduce un número de DNI");
    let letra = prompt("Introduce la letra de tu DNI");

    // Comprobamos que el número introducido es un número

    if (isNaN(numero)) {
        alert("El número introducido no es válido");
    } else {
        // Comprobamos que la letra introducida es una letra

        if (isNaN(letra)) {
            // Comprobamos que la letra introducida es correcta

            let letras = "TRWAGMYFPDXBNJZSQVHLCKE";
            let letraCorrecta = letras.charAt(numero % 23);

            if (letraCorrecta === letra.toUpperCase()) {
                alert("El DNI introducido es correcto");
            } else {
                alert("La letra introducida no es correcta");
            }
        } else {
            alert("La letra introducida no es válida");
        }
    }

});

