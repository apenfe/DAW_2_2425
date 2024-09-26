<?php session_start(); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Inicio de Sesión</title>
</head>
<body>

    <?php if(isset($_SESSION['user']['name'])) echo 'Eres '.$_SESSION['user']['name'];
       else echo 'No estas logueado'; ?>
    <br>
    <a href="loguearme.php">Quiero loguearme</a>
    <br>
    <a href="logout.php">Cerrar sesion</a>

</body>
</html>