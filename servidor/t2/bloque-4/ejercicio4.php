<?php
/*
 * Realizar un programa que permita localizar todas las apariciones de una subcadena dentro de otra.
 */
$patron = "/\badrian\b/";
preg_match_all($patron,
    "adrian esta dos veces adrian aqui",
    $salida, PREG_PATTERN_ORDER);

echo implode(", ", $salida[0]);
echo count($salida[0]);
