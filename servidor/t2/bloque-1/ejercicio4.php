<?php

/* 4 Crear un programa que calcule la fuerza de atracción gravitacional
entre dos masas M1 y M2 situadas a una distancia R, donde las masas se expresan
en kilogramos y la distancia en metros y la constante de gravitación universal
 es G=6.67x10^(-11) Nw*m^2/Kg^2
*/

$M1 = 500;  // Masa 1 en kilogramos
$M2 = 200;  // Masa 2 en kilogramos
$R = 10000;  // Distancia en metros

$G = 6.67e-11;  // Constante de gravitación universal en Nw*m^2/Kg^2

// Fuerza de atracción gravitacional
$F = $G * ($M1 * $M2) / ($R ** 2);

echo "La fuerza de atracción gravitacional entre las masas $M1 y $M2 es $F Newtons.";