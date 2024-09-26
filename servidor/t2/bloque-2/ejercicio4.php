<?php
/*
 * 4. Escribir un programa que diga si un año es bisiesto.
 */

$year = $_GET["year"];

if ($year % 4 == 0 && $year % 100 != 0 || $year % 400 == 0) {
    echo "$year es un año bisiesto.";
} else {
    echo "$year no es un año bisiesto.";
}
