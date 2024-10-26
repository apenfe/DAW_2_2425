<?php

/*
 * Plantear una clase Calculadora que contenga cuatro métodos estáticos
 * (sumar, restar, multiplicar y dividir) estos métodos reciben dos valores.
 */

class Calculadora
{

    public static function sumar($a, $b) {
        echo "Suma: ". $a + $b . "<br>";
    }

    public static function restar($a, $b) {
        echo "Resta: ". $a - $b . "<br>";
    }

    public static function multiplicar($a, $b) {
        echo "Multiplicacion: ". $a * $b . "<br>";
    }

    public static function dividir($a, $b) {
        echo "Division: ". $a / $b . "<br>";
    }
}

Calculadora::sumar(2,4);
Calculadora::restar(2,4);
Calculadora::multiplicar(2,4);
Calculadora::dividir(2,4);