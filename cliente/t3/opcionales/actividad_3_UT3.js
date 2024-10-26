window.addEventListener("DOMContentLoaded", () => {

    let btn = document.getElementById("boton");

    btn.addEventListener("click", () => {
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
        let resultado = document.getElementById("resultado");

        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = "Por favor, ingrese números válidos.";
            return;
        }

        // Validar que num1 sea mayor que num2 para evitar raíz cuadrada de un número negativo
        if (num1 <= num2) {
            resultado.textContent = "El primer número debe ser mayor que el segundo.";
            return;
        }

        resultado.textContent = parseFloat((Math.sqrt((num1 * num1) - (num2 * num2))) / 2.54);
    });

});
