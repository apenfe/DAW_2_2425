<?php
/*
 * 8. Programa que calcule el factorial de un número.
 */

$number = 5;
$factorial = 1;

for ($i = 1; $i <= $number; $i++) {
    $factorial *= $i;
}

echo "El factorial de $number es: $factorial";