window.addEventListener("DOMContentLoaded", () => {

    let numero = document.getElementById("numero");
    let adivinar = document.getElementById("adivinar");
    let pista = document.getElementById("pista");

    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    pista.textContent = "Pista: ";

    adivinar.addEventListener("click", () => {

        if (numero.value == "" || isNaN(numero.value)) {
            alert("Debes ingresar un número");
            return;
        }

        if (numero.value == numeroAleatorio) {
            pista.textContent = "¡Has acertado!";
        } else if (numero.value < numeroAleatorio) {
            pista.textContent = "Pista: El número es mayor";
        } else {
            pista.textContent = "Pista: El número es menor";
        }
    });

});
