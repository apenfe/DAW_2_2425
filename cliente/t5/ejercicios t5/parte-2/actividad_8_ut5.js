document.addEventListener('DOMContentLoaded', function () {

    /*
    Implementa un JavaScript que dado un array de cadenas de texto, utilice una
expresión regular que identifique todas las palabras que empiezan con la letra “s” y
terminan con la letra “o”.
Ejemplo: const palabras = [“saludo”, “silla”, “mesa”, “oso”, “tren”, “sol”, “sabroso”];
Resultado: [“saludo”, “sabroso
    */
    const palabras = ["saludo", "silla", "mesa", "oso", "tren", "sol", "sabroso"];
    const regex = /^s.*o$/;
    const resultado = palabras.filter(palabra => regex.test(palabra));
    console.log(resultado);

});

