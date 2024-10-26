<?php
/*
 * Escribir una función que tome el tiempo introducido por el usuario en el formato HH:MM:SS y lo convierta a segundos.
 *  El programa utilizará esta función para calcular la diferencia entre dos tiempos dados.
 */

function segundos($timestamp) {
    return strtotime($timestamp);
}

$time1="13:23:53";
$time2="13:25:53";

$inicio = segundos($time1);
$final = segundos($time2);

echo "la diferencia es de ". ($final-$inicio)." segundos.";