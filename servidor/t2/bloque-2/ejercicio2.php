<?php
/*
 * 2. Sea un sistema de ecuaciones de la forma:
 * ax+by=c
 * dx+ey=f
 * que puede resolverse usando las siguientes fórmulas
 * x=(ce-bf)/(ae-bd)      ---       y=(af-cd)/(ae-bd)
 * Escribir un programa que dados los coeficientes resuelva el sistema.
 * El programa deberá indicar los casos en los que el sistema de ecuaciones no tenga solución.
 */
if(isset($_POST['a']) && isset($_POST['b']) && isset($_POST['c']) && isset($_POST['d']) && isset($_POST['e']) && isset($_POST['f'])){

    $a = $_POST['a'];
    $b = $_POST['b'];
    $c = $_POST['c'];
    $d = $_POST['d'];
    $e = $_POST['e'];
    $f = $_POST['f'];

    if($a*$d-$b*$c!=0){
        $x = ($c*$e-$b*$f)/($a*$d-$b*$c);
        $y = ($a*$f-$c*$e)/($a*$d-$b*$c);
        echo "La solución al sistema es: x = $x, y = $y";
    }else{
        echo "El sistema de ecuaciones no tiene solución.";
    }

}