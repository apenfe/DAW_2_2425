<?php

require_once "PlantillaHTML.php";
require_once "PlantillaEmial.php";

$html = '<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Mi plantilla</title>
</head>
<body>
    <h1>%nombre%</h1>
    <p>%animo%</p>
    <p>%ciudad%</p>
</body>
</html>';

$diccionario = [
    "nombre" => "Pepe",
    "animo" => "Feliz",
    "ciudad" => "Madrid"
];

$plantilla = new PlantillaHTML($html);
$plantilla->renderData($diccionario);

$cuerpoEmail = "Hola gracias por registrarte en nuestra web
sus datos son: Nombre: %nombre% Ciudad: %ciudad% Animo: %animo%";

$plantillaEmail = new PlantillaEmail("adri@h.es", "Bienvenido", $cuerpoEmail);
$plantillaEmail->renderData($diccionario);



