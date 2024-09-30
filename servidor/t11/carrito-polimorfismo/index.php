<?php

include "Carrito.php";
include "Producto.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Carrito de la compra</title>
</head>

<body>

    <?php

    $carrito = new Carrito();

    $producto1 = new Producto("Espuma afeitar", 3.5);
    $producto2 = new Producto("Cereales de chocolate", 5.99);
    $producto3 = new Producto("Servilletas", 1.2);

    $carrito->meter($producto1);
    $carrito->meter($producto2);
    $carrito->meter($producto3);

    $carrito->mostrar();

    ?>

</body>

</html>