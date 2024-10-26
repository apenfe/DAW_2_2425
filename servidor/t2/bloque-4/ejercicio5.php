<?php
/*
 * Dada una cadena, en la que cada vez que aparece la palabra número a continuación, y tras un espacio en blanco,
 * se encuentra un dígito, construir un programa que calcule el doble de cada dígito que aparece en la cadena y los
 * muestre en orden inverso al que se introdujeron.
 */
$cadena = "numero 3 numero 4 numero 5 numero 6 numero 7";

function dobleInvertido($cadena){

    $exit = [];
    $patron = "/\bnumero [1-9]+\b/";
    preg_match_all($patron, $cadena, $salida, PREG_PATTERN_ORDER);

    foreach ($salida[0] as $key => $value) {

        $exit[] = $value[strlen($value)-1] * 2;

    }

    $out = "";
    for($i = count($exit) - 1; $i >= 0; $i--){
        $out.= $exit[$i] ." ";
    }

    return $out;

}

echo dobleInvertido($cadena);