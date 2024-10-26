<?php
/*
 * El cifrado César, también conocido como cifrado por desplazamiento, es una de las técnicas de codificación
 *  más simples y usadas. Es un tipo de cifrado por sustitución en el que una letra en el texto original es
 *  reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el alfabeto.
 *  Por ejemplo, con un desplazamiento de tres posiciones la A sería reemplazada por D, la B por E y así
 * sucesivamente. Se supone que el alfabeto es circular de modo que, a todos los efectos, la continuación
 * de la Z comienza de nuevo la A. Hay que hacer un programa que utilice una función que, pasados como argumento
 *  una cadena y un entero, devuelva una cadena codificada. Debemos tener en cuenta que sólo se codificarán los
 *  caracteres correspondientes a las letras mayúsculas del alfabeto. El resto del texto quedará inalterado.
 *  Ejemplo: "UN TEXTO, y algo MAS” debe devolver con clave 1 "VO UFYUP, y algo NBT”
 */

function cifrado($cadena, $numero){

    $out = "";


    for($i = 0; $i < strlen($cadena); $i++){

        if(esMayuscula($cadena[$i])){
            // Obtener el valor ASCII del carácter actual
            $ascii = ord($cadena[$i]);

            // Aplicar el desplazamiento manteniendo el alfabeto circular
            $nuevoAscii = (($ascii - 65 + $numero) % 26) + 65;

            // Convertir el nuevo código ASCII de vuelta a carácter y añadirlo a la salida
            $out .= chr($nuevoAscii);

        }else{
            $out .= $cadena[$i];
        }

    }
    return $out;
}

function esMayuscula($char) {
    return preg_match("/^[A-Z]$/", $char);
}

echo cifrado("UN TEXTO, y algo MAS", 1);
