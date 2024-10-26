<?php

/*
 * Escribir un programa que genere una matriz de tamaño 4x4 con números aleatorios entre 0 y 9 y calcule su traspuesta.
 */

$matriz = array(); // Creamos un array vacío

// Rellenamos la matriz
for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 4; $j++) {
        $matriz[$i][$j] = rand(0, 9);
    }
}

// Mostramos la matriz
echo "Matriz original:<br>";
for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 4; $j++) {
        echo $matriz[$i][$j] . " ";
    }
    echo "<br>";
}

// Calculamos la traspuesta
$traspuesta = array();

for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 4; $j++) {
        $traspuesta[$j][$i] = $matriz[$i][$j];
    }
}

// Mostramos la traspuesta

echo "<br>Traspuesta:<br>";
for ($i = 0; $i < 4; $i++) {
    for ($j = 0; $j < 4; $j++) {
        echo $traspuesta[$i][$j] . " ";
    }
    echo "<br>";
}