<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Uso de POST</title>
</head>
<body>
<?php
    if(!$_POST){
        include "formulario.php";
    }else{
        if(isset($_POST["registrarse"]) && $_POST["registrarse"] == "Enviar"){
            echo "Muchas gracias por registrarte";
        }elseif(isset($_POST["registrarse"]) && $_POST["registrarse"] == "Cancelar"){
            echo "uy q pena";
            exit();
        }else{
            echo "Operación no permitida";
        }

        if(isset($_POST["nombre"])){
            echo $_POST["nombre"];
        }
        if(isset($_POST["email"])){
            echo "<br>" . $_POST["email"];
        }
        if($_POST["clave"]["original"] == $_POST["clave"]["repetida"]){
            echo "<br>Tu clave es correcta";
        }else{
            echo "<br>Las claves no son iguales";
        }
    }


?>
</body>
</html>