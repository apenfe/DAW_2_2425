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

        let salida = array.value.split(",");

        salida[posicion] = valor;

        array.value = salida;

    });

    reiniciar.addEventListener("click", () => {
        document.getElementById("valor").value = "";
        document.getElementById("posicion").value = "";
        array.value = "";
    });

});
