window.addEventListener("DOMContentLoaded", () => {

    let numeros = document.getElementById("numeros");
    let calcular = document.getElementById("calcular");
    let reiniciar = document.getElementById("reiniciar");
    let resultado = document.getElementById("resultado");

    calcular.addEventListener("click", () => {
        let array = numeros.value.split(",");
        let suma = 0;
        let mayor = array[0];
        let menor = array[0];
        let promedio = 0;

        for (let i = 0; i < array.length; i++) {

            if (isNaN(array[i])) {
                resultado.innerHTML = "Por favor, ingrese solo números";
                return;
            }

            suma += parseInt(array[i]);
            if (parseInt(array[i]) > mayor) {
                mayor = parseInt(array[i]);
            }
            if (parseInt(array[i]) < menor) {
                menor = parseInt(array[i]);
            }
        }

        promedio = suma / array.length;

        resultado.innerHTML = `La suma de los números es: ${suma} <br>
        El número mayor es: ${mayor} <br>
        El número menor es: ${menor} <br>
        El promedio de los números es: ${promedio}`;

    });

    reiniciar.addEventListener("click", () => {
        numeros = document.getElementById("numeros").value = "";
        resultado.innerHTML = "";
    });

});
