<?php
/*
 * Escribir un programa que use una función que indique si un texto pasado como parámetro es un palíndromo o no.
 */

function reversa($palabra){
    $out = "";

    for ($i = strlen($palabra)-1; $i >=0; $i--) {
        $out .= $palabra[$i];
    }

    return $out;

}

$palabra = "otto";

if($palabra == reversa($palabra)){
    echo "es un palindromo";
}else{
    echo "no es un palindromo";
}