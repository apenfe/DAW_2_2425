window.addEventListener("DOMContentLoaded", () => {

    let primera = document.getElementById("primera");
    let segunda = document.getElementById("segunda");

    let buscar = document.getElementById("buscar");
    let reiniciar = document.getElementById("reiniciar");
    let resultado = document.getElementById("resultado");

    buscar.addEventListener("click", () => {
        let palabras = primera.value.split(",");
        let palabra = segunda.value;

        let indice = palabras.indexOf(palabra);

        if (indice >= 0) {
            resultado.innerHTML = "La palabra " + palabra + " se encuentra en la posición " + indice + " del array";
        } else {
            resultado.innerHTML = "La palabra " + palabra + " no se encuentra en el array";
        }

    });

    reiniciar.addEventListener("click", () => {
        primera = document.getElementById("primera").value = "";
        segunda = document.getElementById("segunda").value = "";
        resultado.innerHTML = "";
    });

});
