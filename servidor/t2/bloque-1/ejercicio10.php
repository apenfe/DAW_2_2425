<?php
/*
 * 10 Calcular la edad de una persona introduciendo la fecha actual y su fecha de nacimiento.
 */

$currentDate = date('Y-m-d');
$birthDate = '1995-11-05';

$diff = strtotime($currentDate) - strtotime($birthDate);

// Convertir la diferencia en segundos a años.
$age = ceil($diff / (365 * 24 * 60 * 60));

echo "Tu edad es: $age años\n";