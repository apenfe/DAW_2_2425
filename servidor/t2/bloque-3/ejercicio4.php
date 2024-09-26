<?php
/*
 * Escribir un programa que calcule el número combinatorio M/N que era M!/(N!*(M-N)!).
 * Para ello hará uso de la función factorial.
 */

function factorial($number){
    $factorial = 1;
    for ($i = 1; $i <= $number; $i++) {
        $factorial *= $i;
    }
    return $factorial;
}

$n=8;
$m=3;

$denominador = factorial($m) * factorial(($n -$m));
$combinatorio = factorial($n) / $denominador;

echo $combinatorio;