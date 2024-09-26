<?php

/*
 * Escribir un programa que genere una matriz 4x7 con la suma de sus índices y la muestre por pantalla.
 */

$matriz = array(); // Creamos un array vacío

// Rellenamos la matriz
for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 7; $j++) {
        $matriz[$i][$j] = $i + $j;
    }
}

// Mostramos la matriz
for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 7; $j++) {
        echo $matriz[$i][$j] . " ";
    }
    echo "<br>";
}

?>











