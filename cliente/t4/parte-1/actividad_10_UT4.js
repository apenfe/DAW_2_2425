window.addEventListener("DOMContentLoaded", () => {

    let pares = document.getElementById("pares");
    let reiniciar = document.getElementById("reiniciar");

    pares.addEventListener("click", () => {

        let numeros = document.getElementById("numeros").value.split(",");

        numeros.forEach((numero, index) => {
            if (numero % 2 === 0) {
                document.getElementById("resultado1").innerHTML += "Pos: " + index + " Elemento: " + numero + "<br>";
            }
        });

        numeros.forEach((numero, index) => {
            document.getElementById("resultado2").innerHTML += "Pos: " + index + " Elemento: " + numero + "<br>";
        });

    });

    reiniciar.addEventListener("click", () => {
        document.getElementById("numeros").value = "";
        document.getElementById("resultado").innerHTML = "";
    });

});
