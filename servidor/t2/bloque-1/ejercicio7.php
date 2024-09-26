<?php
/*
 * 7 Crear un programa que pida un número real y muestre la tabla de multiplicar correspondiente a dicho número perfectamente formateada y con una precisión de dos dígitos.
 */

if (isset($_GET['number'])) {

    $number = $_GET['number'];

    for($i=1; $i<=10;$i++) {
        echo $i." x ".$number." = ". number_format($number * ($i), 2). "\n";
        echo "<br>";
    }

}