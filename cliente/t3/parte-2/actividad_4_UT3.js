/*
Programa un JavaScript que cuente los caracteres, palabras, caracteres sin 
espacios y los números que aparecen en una frase escrita dentro de un área 
de texto, del navegador:
*/

window.addEventListener("DOMContentLoaded", () => {

    let boton = document.getElementById("boton");
    let texto = document.getElementById("texto");
    let caracteres = document.getElementById("caracteres");
    let palabras = document.getElementById("palabras");
    let caracteresSinEspacios = document.getElementById("caracteressinespacios");
    let numeros = document.getElementById("numeros");

    boton.addEventListener("click", () => {

        let textoIntroducido = texto.value;

        caracteres.innerHTML = textoIntroducido.length;

        palabras.innerHTML = textoIntroducido.split(" ").length;

        caracteresSinEspacios.innerHTML = textoIntroducido.replaceAll(" ", "").length;

        let cantidadNumeros = textoIntroducido.length - textoIntroducido.replaceAll(/[0-9]/g, "").length;
        numeros.innerHTML = cantidadNumeros;

    });

});
