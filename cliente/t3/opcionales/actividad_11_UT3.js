window.addEventListener("DOMContentLoaded", () => {

    let boton = document.getElementById("boton");
    let texto = document.getElementById("texto");

    boton.addEventListener("click", () => {
        let contenido = texto.value;

        let palabras = contenido.split("\n");
        let inverso = "";

        for (let i = 0; i < palabras.length; i++) {
            inverso = palabras[i] + "\n" + inverso;
        }

        texto.value = inverso;

    });

});
