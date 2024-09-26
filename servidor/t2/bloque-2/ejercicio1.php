<?php
/*
 * 1. Escribir un programa que dados tres números, si el primero es negativo, calcule el producto de los tres y, en caso contrario, calcular la suma.
 */

if(isset($_GET["num1"], $_GET["num2"], $_GET["num3"])) {

    $num1 = $_GET["num1"];
    $num2 = $_GET["num2"];
    $num3 = $_GET["num3"];

    if($num1 < 0) {
        echo "El producto de los tres números es: ".($num1 * $num2 * $num3);
    } else {
        echo "La suma de los tres números es: ".($num1 + $num2 + $num3);
    }

}