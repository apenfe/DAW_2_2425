window.addEventListener("DOMContentLoaded", () => {

    let numero = document.getElementById("numero");
    let boton = document.getElementById("boton");

    let introducido = document.getElementById("introducido");

    boton.addEventListener("click", () => {
        introducido.textContent = "Número introducido: " + numero.value;

        let num = parseInt(numero.value);
        document.getElementById("parseint").innerHTML = num;

        let num2 = Math.ceil(numero.value);
        document.getElementById("ceil").innerHTML = num2;

        let num3 = Math.floor(numero.value);
        document.getElementById("floor").innerHTML = num3;

        let num4 = Math.round(numero.value);
        document.getElementById("round").innerHTML = num4;

    });



});
