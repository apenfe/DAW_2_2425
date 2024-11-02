window.addEventListener("DOMContentLoaded", () => {

    let insertar = document.getElementById("insertar");
    let quitar = document.getElementById("quitar");
    let reiniciar = document.getElementById("reiniciar");
    let array = [];

    insertar.addEventListener("click", () => {

        array.push(document.getElementById("valor").value);
        document.getElementById("valor").value = "";
        document.getElementById("resultado").innerHTML = '';

        array.forEach((element) => {
            document.getElementById("resultado").innerHTML += `${element},`;
        });

    });

    quitar.addEventListener("click", () => {

        array.pop();

        document.getElementById("resultado").innerHTML = '';

        array.forEach((element) => {
            document.getElementById("resultado").innerHTML += `${element},`;
        });

    });

    reiniciar.addEventListener("click", () => {
        document.getElementById("valor").value = "";
        document.getElementById("resultado").innerHTML = "";
        array = [];
    });

});
