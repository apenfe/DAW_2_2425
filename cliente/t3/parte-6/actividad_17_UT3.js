window.addEventListener("DOMContentLoaded", () => {

    let btn = document.getElementById("invertir");
    let input = document.getElementById("cadena");

    btn.addEventListener("click", () => {
        let cadena = input.value;
        let invertida = "";
        for (let i = cadena.length - 1; i >= 0; i--) {
            invertida += cadena[i];
        }

        input.value = invertida;
    });

});
