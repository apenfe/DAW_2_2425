<?php

/*
 * Realizar un programa que escriba todos los números enteros menores que cierto entero N y que a su vez sean
 * múltiplos de dos números A y B conocidos. Utilizar para ello una función que admita dos parámetros I y J e
 * indique si I es múltiplo de J.
 */

$num=200;

function multiplos($i, $j){
    if($i%$j == 0){
        return true;
    }

    return false;
}

for($i=1; $i<=$num; $i++){
    if(multiplos($i,2) && multiplos($i,8) ){
        echo $i. " ";
    }
}

