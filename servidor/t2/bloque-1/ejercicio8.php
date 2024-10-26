<?php
/*
 * Mostrar en una tabla el cuadrado y el cubo de los cinco primeros números enteros que siguen
 *  a uno previamente introducido. Los datos deben aparecer encolumnados.
 */

if (isset($_GET['number'])) {

    $number = $_GET['number'];

    echo "<table>\n";
    echo "<tr>";
    echo "<td>Cuadrado</td>";
    echo "<td>Cubo</td>";
    echo "</tr>";

    for($i=1; $i<=5;$i++) {
        echo "<tr>";
        echo "<td>". pow(($number + $i), 2). "</td>";
        echo "<td>". pow(($number + $i), 3). "</td>";
        echo "</tr>";
    }

    echo "</table>\n";

}
