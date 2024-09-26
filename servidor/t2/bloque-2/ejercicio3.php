<?php
/*
 * 3. Escribir un programa que calcule las raíces, bien reales o imaginarias, de una ecuación de segundo grado.
 *  El programa también debe ser capaz de operar con valores nulos para el coeficiente de orden 2.
 */

$a = 0;
$b = -7;
$c = 8;

// Cálculo de discriminante
$discriminante = ($b ** 2) - (4 * $a * $c);

// Caso especial: coeficiente de orden 2 nulo
if ($a == 0) {
    if ($b == 0) {
        if ($c == 0) {
            echo "Todas las soluciones son cero.";
        } else {
            echo "No hay soluciones reales.";
        }
    } else {
        $solucion = -$c / $b;
        echo "Solución: x = $solucion";
    }
} else {
    if ($discriminante > 0) {
        // Dos soluciones reales
        $x1 = (-$b + sqrt($discriminante)) / (2 * $a);
        $x2 = (-$b - sqrt($discriminante)) / (2 * $a);
        echo "Soluciones reales: x1 = $x1 y x2 = $x2";
    } elseif ($discriminante == 0) {
        // Una solución real
        $x1 = -$b / (2 * $a);
        echo "Solución real: x = $x1";
    } else {
        // Soluciones complejas (imaginarias)
        $parteReal = -$b / (2 * $a);
        $parteImaginaria = sqrt(-$discriminante) / (2 * $a);
        echo "Soluciones imaginarias: x1 = $parteReal + {$parteImaginaria}i y x2 = $parteReal - {$parteImaginaria}i";
    }
}
?>
