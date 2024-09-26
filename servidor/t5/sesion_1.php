<?php

    session_start();

    if(!isset($_SESSION['user'])){
        $_SESSION['user'] = ['nombre' => 'Juan',
                             'password' => '1234'];
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Sesión 1</title>
</head>
<body>
    <h1>Pagina nº 1</h1>
    Tu id de sesión es <?= session_id() ?>
    <pre>
        <?php var_dump($_SESSION) ?>
    </pre>

    <a href="sesion_2.php">Ir a la página nº 2</a>

</body>
</html>