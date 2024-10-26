<?php

require_once 'MigasPan.php';
require_once 'MigasPanContenedor.php';
require_once 'Etiqueta.php';
require_once 'Enlace.php';

$migas = new MigasPanContenedor('>', 'div');
$migas->addMiga('Inicio', 'https://www.google.es');
$migas->addMiga('Productos', 'https://www.google.es');
$migas->addMiga('Producto 1', 'https://www.google.es');
$migas->addMiga('Producto 2', 'https://www.google.es');

echo $migas->mostrar();