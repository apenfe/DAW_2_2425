<?php
/*
 * 9 Escribir un programa que lea el valor de un ángulo en radianes y muestre su valor en grados, minutos y segundos.
 */

if(isset($_GET["radianes"])) {

    $radianes = $_GET["radianes"];
    $grados = rad2deg($radianes);
    $minutos = ($grados - floor($grados)) * 60;
    $segundos = ($minutos - floor($minutos)) * 60;
    $grados = floor($grados);
    $minutos = floor($minutos);
    $segundos = floor($segundos);
    echo "El ángulo $radianes radianes equivale a $grados grados, $minutos minutos y $segundos segundos.\n";
}