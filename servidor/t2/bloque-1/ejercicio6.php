<?php
/*
 * 6 Escribir un programa que calcule el número de billetes de 500, 200, 100, 50, 20, 10 y 5
 * así como de monedas de 2, 1, 0'5, 0'20, 0'10, 0'05, 0'02 y 0'01 para desglosar una cantidad C
 * de forma que se necesite la menor cantidad de cada tipo.
 */

$cantidad = 1000.25;

$billetes = [500, 200, 100, 50, 20, 10, 5];
$monedas = [2, 1, 0.5, 0.20, 0.10, 0.05, 0.02, 0.01];

foreach ($billetes as $billete) {
    if ($cantidad >= $billete) {
        $numeroDeBilletes = floor($cantidad / $billete);
        $cantidad -= $numeroDeBilletes * $billete;
        echo "Billetes de $billete: $numeroDeBilletes\n"."<br>";
    }
}

// Convertimos la cantidad restante a centavos para mayor precisión
$cantidad = round($cantidad, 2); // Aseguramos que solo tenga dos decimales
$cantidadCentavos = $cantidad * 100; // Convertimos a centavos

// Procesamos ahora las monedas
foreach ($monedas as $moneda) {
    $monedaCentavos = $moneda * 100; // Convertimos la moneda a centavos
    if ($cantidadCentavos >= $monedaCentavos) {
        $numeroDeMonedas = floor($cantidadCentavos / $monedaCentavos);
        $cantidadCentavos -= $numeroDeMonedas * $monedaCentavos;
        echo "Monedas de $moneda: $numeroDeMonedas\n<br>";
    }
}

