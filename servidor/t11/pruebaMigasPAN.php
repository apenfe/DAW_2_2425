<?php

include 'MigasPan.php';
include 'MigasPanContenedor.php';
include 'Etiqueta.php';
include "Enlace.php";

$migas = new MigasPanContenedor('>', 'nav');
$migas->addMiga('Inicio', 'index.php');
$migas->addMiga('Productos', 'productos.php');
$migas->addMiga('Producto 1', 'producto1.php');
$migas->addMiga('Producto 2', 'producto2.php');

echo $migas->mostrar();