<?php session_start();

    echo "Vas a salir de la página " . $_SESSION['user']['name'];

    session_destroy();

    echo '<a href="inicio.php">Regresar al inicio</a>';
