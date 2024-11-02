window.addEventListener("DOMContentLoaded", () => {

    let ordenar = document.getElementById("ordenar");
    let reiniciar = document.getElementById("reiniciar");

    ordenar.addEventListener("click", () => {

        let palabras = document.getElementById("valor").value.split(",");

        palabras.sort();

        palabras.forEach((palabra, index) => {
            document.getElementById("resultado").innerHTML += "Pos: " + index + " Elemnto: " + palabra + "<br>";
        });

    });

    reiniciar.addEventListener("click", () => {
        document.getElementById("valor").value = "";
        document.getElementById("resultado").innerHTML = "";
    });

});
