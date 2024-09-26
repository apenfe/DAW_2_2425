<?php

/*
 * Escribir una función (y el programa que la use) que tome un valor entero y devuelva el número con sus dígitos
 * en reversa. Por ejemplo, dado el número 7631 la función deberá devolver el 1367
 */

function reversa($numero)
{
    $salida = "". $numero;
    $out = "";

    for ($i = strlen($salida)-1; $i >=0; $i--) {
        $out .= $salida[$i];
    }

    return $out;

}

echo reversa(7631);