window.addEventListener("DOMContentLoaded", () => {

    let text1 = document.getElementById("text1").textContent;
    let text2 = document.getElementById("text2").textContent;

    let resul = "";
    if (text1.localeCompare(text2) === 0) {
        alert("Los textos son iguales");
        resul = "Los textos son iguales";
    } else if (text1.localeCompare(text2) > 0) {
        alert("El texto 1 es mayor que el texto 2");
        resul = "El texto 1 es mayor que el texto 2";
    } else {
        alert("El texto 2 es mayor que el texto 1");
        resul = "El texto 2 es mayor que el texto 1";
    }

    document.getElementById("resultado").textContent = resul;

});
