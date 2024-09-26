<?php
/*
 * gual que el ejercicio anterior, pero también añadiremos a la codificación las letras minúsculas.
 * El resto de caracteres no alfabéticos serán eliminados y el resultado será totalmente en mayúsculas.
 * Ejemplo "UN TEXTO, y algo MAS” será "VOUFYUPZBMHPNBT”
 */

function cifrado($cadena, $numero){

    $out = "";
    $cadena = strtoupper($cadena);

    for($i = 0; $i < strlen($cadena); $i++){

        if(esMayuscula($cadena[$i])){
            // Obtener el valor ASCII del carácter actual
            $ascii = ord($cadena[$i]);

            // Aplicar el desplazamiento manteniendo el alfabeto circular
            $nuevoAscii = (($ascii - 65 + $numero) % 26) + 65;

            // Convertir el nuevo código ASCII de vuelta a carácter y añadirlo a la salida
            $out .= chr($nuevoAscii);

        }else{
            $out .= "";
        }

    }
    return $out;
}

function esMayuscula($char) {
    return preg_match("/^[A-Z]$/", $char);
}

echo cifrado("UN TEXTO, y algo MAS", 1);
