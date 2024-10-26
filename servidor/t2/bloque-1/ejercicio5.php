<?php

/*
 * 5 Escribir un programa que pregunte el año actual y la edad de una persona y calcule la edad de esa persona en el año 2020.
 */

$currentYear = date('Y'); // Obtiene el año actual
$age = $_GET["age"];

$ageIn2020 = $age - ($currentYear - 2020);

echo "Tu edad en el 2020 era: $ageIn2020\n";
