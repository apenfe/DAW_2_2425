window.addEventListener("DOMContentLoaded", () => {

    let array = document.getElementById("array");

    let insertar = document.getElementById("insertar");
    let reiniciar = document.getElementById("reiniciar");

    insertar.addEventListener("click", () => {

        let valor = document.getElementById("valor").value;
        let posicion = document.getElementById("posicion").value;

        if (valor === "" || posicion === "") {
            alert("Debes rellenar los campos");
            return;
        }

        // añadir elemento en posicion determinada del array, sin usar splice
        let salida = array.value.split(",");
        let resultado = [];

        if (posicion < 0 || posicion > salida.length) {
            alert("Posición no válida");
            return;
        }

        for (let i = 0; i < salida.length; i++) {
            if (i == posicion) {
                resultado.push(valor);
            }
            resultado.push(salida[i]);
        }

        if (posicion == salida.length) {
            resultado.push(valor);
        }

        array.value = resultado;

    });

    reiniciar.addEventListener("click", () => {
        document.getElementById("valor").value = "";
        document.getElementById("posicion").value = "";
        array.value = "";
    });

});
