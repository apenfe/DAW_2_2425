<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sesion nº 2</title>
</head>
<body>
    <h1>Página nº 2 de Sesiones</h1>
    Tu id de sesión es <?= session_id() ?>
    <pre>
        <?php var_dump($_SESSION) ?>
    </pre>

    <?php $_SESSION['user']['nombre'] = 'Heriberto'; ?>

    <a href="sesion_1.php">Volver a la página nº 1</a>

</body>
</html>