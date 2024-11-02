window.addEventListener("DOMContentLoaded", () => {

    let filtrar = document.getElementById("filtrar");
    let reiniciar = document.getElementById("reiniciar");

    filtrar.addEventListener("click", () => {

        let palabras = document.getElementById("palabras").value.split(",");
        let busqueda = document.getElementById("busqueda").value;

        let salida = [];

        palabras.forEach((palabra) => {
            if (palabra.includes(busqueda)) {
                salida.push(palabra);
            }
        });

        salida.forEach((palabra, index) => {
            document.getElementById("resultado").innerHTML += "Pos: " + index + " Elemento: " + palabra + "<br>";
        });

    });

    reiniciar.addEventListener("click", () => {
        document.getElementById("palabras").value = "";
        document.getElementById("busqueda").value = "";
        document.getElementById("resultado").innerHTML = "";
    });

});
