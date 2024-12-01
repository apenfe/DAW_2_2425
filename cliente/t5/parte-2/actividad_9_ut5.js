document.addEventListener('DOMContentLoaded', function () {

    /*
    Implementa un JavaScript que dada una cadena de texto, use una expresión
regular que encuentre todas las palabras que empiezan con la letra “a” y tienen
una longitud de exactamente 4 caracteres.
Ejemplo: const texto = “Estas palabras cumplen abcd, aabc, aefg, ante, asia pero
no aa, abcde o ab. adios”;
Resultado: [“abcd”, “aabc”, “aefg”, “ante”, “asia”
    */

    const texto = "Estas palabras cumplen abcd, aabc, aefg, ante, asia pero no aa, abcde o ab. adios";
    const regex = /\ba\w{3}\b/g;
    const resultado = texto.match(regex);
    console.log(resultado);

});

