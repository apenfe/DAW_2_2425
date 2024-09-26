<?php
/*
 * Escribir un programa que calcule la descomposición en factores primos de un número introducido por teclado.
 *  Se deberá utilizar una función que devuelva si un número es primo o no.
 */

function esPrimo($numero){

    if ($numero <= 1) {
        return false;
    }
    for ($i = 2; $i <= sqrt($numero); $i++) {
        if ($numero % $i == 0) {
            return false;
        }
    }
    return true;
}

if(isset($_GET["numero"])){
    $numero = $_GET["numero"];
    $divisor=2;

    while ($numero>1){

        if($numero % $divisor==0){
            $numero = $numero / $divisor;
            echo $divisor."<br>";
        }else{

            while(true){
                $divisor++;
                if(esPrimo($divisor)){
                    break;
                }
            }
        }

    }

}else{
    echo "inserte un numero por get como numero=...";
}