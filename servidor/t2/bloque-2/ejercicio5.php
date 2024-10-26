<?php
/*
 * 5. La fecha de cualquier Domingo de Pascua se calcula de la siguiente forma:
 * Sea X el año para el que quiere calcularse la fecha.
 * Sea A el resto de la división de X entre 19
 * Sea B el resto de la división de X entre 4
 * Sea C el resto de la división de X entre 7
 * Sea D el resto de la división de (19*A+24) entre 30
 * Sea E el resto de la división de (2B+4C+6D+5) entre 7
 * La fecha para el Domingo de Pascua es el día (22+D+E) de Marzo (tener en cuenta que puede ser de Abril).
 * Escribir un programa que dado un año obtenga por pantalla la fecha del Domingo de Pascua de ese año.
 */

if(isset($_GET["year"])) {
    $year = $_GET["year"];
    $a = $year % 19;
    $b = $year % 4;
    $c = $year % 7;
    $d = ((19 * $a) + 24) % 30;
    $e = ((2 * $b) + (4 * $c) + (6 * $d) + 5) % 7;

    $day = 22 + $d + $e;
    if ($day > 31) {
        // Si el día excede 31, pasa a abril
        $day -= 31;
        $month = 4; // Abril
    } else {
        $month = 3; // Marzo
    }

    echo "La fecha del Domingo de Pascua de $year es ". $day. "-". $month. "-". $year. "\n";
}