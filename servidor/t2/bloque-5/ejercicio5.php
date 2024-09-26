<?php

/*
 * Escribir un programa que genere dos matrices de tamaño 3x3 con números aleatorios entre 0 y 9 y las muestre
 * por pantalla. Después calculará el producto de ambas matrices.
 */

$matriz1 = array(); // Creamos un array vacío
$matriz2 = array(); // Creamos un array vacío

// Rellenamos la matriz

for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        $matriz1[$i][$j] = rand(0, 9);
        $matriz2[$i][$j] = rand(0, 9);
    }
}

// Mostramos la matriz 1
echo "Matriz 1:<br>";
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        echo $matriz1[$i][$j] . " ";
    }
    echo "<br>";
}

// Mostramos la matriz 2
echo "<br>Matriz 2:<br>";
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        echo $matriz2[$i][$j] . " ";
    }
    echo "<br>";
}

// Calculamos el producto de ambas matrices
$producto = array();

for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        $producto[$i][$j] = 0;
        for ($k = 0; $k < 3; $k++) {
            $producto[$i][$j] += $matriz1[$i][$k] * $matriz2[$k][$j];
        }
    }
}

// Mostramos el producto
echo "<br>Producto:<br>";
for ($i = 0; $i < 3; $i++) {
    for ($j = 0; $j < 3; $j++) {
        echo $producto[$i][$j] . " ";
    }
    echo "<br>";
}
