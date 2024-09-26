<?php

    $duracion = time() + (60*60*24*365*2);

    setcookie("nombre", "Pepe");

    setcookie("edad", "30", 60);

    $datos = ['web' => 'iescierva.net', 'director' => 'Antonio'];

    setcookie('especial', serialize($datos),  $duracion);



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ejemplo de Cookies</title>
</head>
<body>
    <h1>Hola <?= $_COOKIE['nombre'] ?></h1>
    <h2>Tu edad es: <strong><?= $_COOKIE['edad'] ?></strong></h2>
    <h2>Datos: <strong>
        <?php
            var_dump(unserialize($_COOKIE['especial']));
        ?></strong></h2>
    <p><?php var_dump($_COOKIE) ?></p>

</body>
</html>