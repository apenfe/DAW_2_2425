window.addEventListener("DOMContentLoaded", () => {

    let texto = document.getElementById("text");
    let second = document.getElementById("segunda");

    let contenido = texto.textContent.trim();

    let longitud = contenido.length;
    let segunda = "";

    if (longitud >= 2) {

        segunda = contenido.charAt(1);
        second.textContent = segunda;

    }

    contenido = contenido.toLocaleUpperCase();
    contenido = contenido.toLocaleLowerCase();

    document.getElementById("resultado").textContent = contenido;



});
