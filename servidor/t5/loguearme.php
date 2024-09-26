<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Página de Autenticación</title>
</head>
<body>

    <h1> Ya estas logueado! </h1>

    <?php $_SESSION['user']['name'] = 'Carlos'; ?>

    <h2> Con el nombre <?php echo $_SESSION['user']['name'] ?></h2>

    <a href="inicio.php">Regresar al inicio</a>
    <a href="logout.php">Cerrar sesion</a>

</body>
</html>