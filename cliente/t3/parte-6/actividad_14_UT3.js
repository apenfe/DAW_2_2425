window.addEventListener("DOMContentLoaded", () => {

    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let operacion = document.getElementById("operacion");
    let btn = document.getElementById("calcular");

    btn.addEventListener("click", () => {
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "Resultado: ";
        let n1 = parseFloat(num1.value);
        let n2 = parseFloat(num2.value);
        let op = operacion.value;

        if (isNaN(n1) || isNaN(n2)) {
            resultado.innerHTML = "Introduce dos números";
        } else {
            switch (op) {
                case "suma":
                    resultado.innerHTML += n1 + n2;
                    break;
                case "resta":
                    resultado.innerHTML += n1 - n2;
                    break;
                case "multiplicacion":
                    resultado.innerHTML += n1 * n2;
                    break;
                case "division":
                    resultado.innerHTML += n1 / n2;
                    break;
                default:
                    resultado.innerHTML += "Operación no válida";
            }
        }
    });

});
