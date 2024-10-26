<?php
/*
 * Escribir un programa que cuente de un texto dado:
 * Nº de caracteres en blanco.
 * Nº de dígitos
 * Nº de letras
 * Nº de líneas
 * Nº de otros caracteres
 * Se deben crear funciones para comprobar si un carácter es numérico, alfanumérico u otra cosa.
 */

// Función para verificar si es un espacio en blanco
function esEspacioBlanco($char) {
    return preg_match("/\s/", $char) && $char !== "\n"; // Incluye espacios, tabs, etc., pero excluye el salto de línea
}

// Función para verificar si es un dígito
function esDigito($char) {
    return preg_match("/^[[:digit:]]$/", $char);
}

// Función para verificar si es una letra (mayúscula o minúscula)
function esLetra($char) {
    return preg_match("/^[A-Za-z]$/", $char);
}

// Función para verificar si es un salto de línea
function esSaltoDeLinea($char) {
    return $char === "\n"; // Detectar saltos de línea explícitamente
}

// Función principal para clasificar el carácter
function tipo($char, $resultados) {

    if (esEspacioBlanco($char)) {
        $resultados[0] += 1; // Contar espacios en blanco
    } else if (esDigito($char)) {
        $resultados[1] += 1; // Contar dígitos
    } else if (esLetra($char)) {
        $resultados[2] += 1; // Contar letras
    } else if (esSaltoDeLinea($char)) {
        $resultados[3] += 1; // Contar saltos de línea
    } else {
        $resultados[4] += 1; // Contar otros caracteres
    }

    return $resultados;
}

// Texto de prueba
$texto = "esto es un texto con dígitos 1234 espacios en blanco\nsaltos de linea y otros simbolos como * o _";

// Inicializar array para almacenar los resultados: [espacios, dígitos, letras, saltos de línea, otros]
$resultado = [0, 0, 0, 0, 0];

// Recorrer el texto y clasificar cada carácter
for ($i = 0; $i < mb_strlen($texto); $i++) {
    $resultado = tipo($texto[$i], $resultado);
}

// Mostrar los resultados
echo "Espacios en blanco: " . $resultado[0] . "<br>";
echo "Dígitos: " . $resultado[1] . "<br>";
echo "Letras: " . $resultado[2] . "<br>";
echo "Saltos de línea: " . $resultado[3] . "<br>";
echo "Otros: " . $resultado[4] . "<br>";

