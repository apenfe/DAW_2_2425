window.addEventListener("DOMContentLoaded", function () {
    /* 
    Implementa una página Web que utilizando código JavaScript, 
    concatene dos Strings, y que muestre tanto los Strings originales
     por separado como el String final en el documento del navegador.
    */

    // Variables
    var string1 = "Hola";
    var string2 = "Mundo";
    var stringFinal = string1 + " " + string2;

    // Mostrar en el documento
    document.write("String 1: " + string1 + "<br>");
    document.write("String 2: " + string2 + "<br>");
    document.write("String final: " + stringFinal + "<br>");

});