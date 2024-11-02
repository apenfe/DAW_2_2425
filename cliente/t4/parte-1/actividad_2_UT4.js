window.addEventListener("DOMContentLoaded", () => {

    let primera = document.getElementById("primera");
    let segunda = document.getElementById("segunda");
    let calcular = document.getElementById("unir");
    let reiniciar = document.getElementById("reiniciar");
    let resultado = document.getElementById("resultado");

    calcular.addEventListener("click", () => {
        let salida = [];

        salida.push(primera.value);
        salida.push(segunda.value);

        resultado.innerHTML = "La salida es: " + salida;

    });

    reiniciar.addEventListener("click", () => {
        numeros = document.getElementById("numeros").value = "";
        resultado.innerHTML = "";
    });

});
