<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Formularios usables</title>
	<link rel="stylesheet" href="estilos.css">
</head>
<body>
	<h1>Formularios Usables</h1>

	<?php 
		include "funciones.php";
		$errores = [];

		if ( ! $_POST) {
			include "formulario.php";
		} else {

			if ( ! isset($_POST["nombre"])) {
				$errores['nombre'] = "No he recibido el nombre";
			} else if (strlen($_POST["nombre"]) < 3) {
				$errores['nombre'] = "Campo nombre demasiado corto";
			}

			if ( ! isset($_POST["email"])) {
				$errores['email'] = "No he recibido el email";
			} else if (strlen($_POST["email"]) < 6) {
				$errores['email'] = "El email no puede ser valido";
			}

			if ( ! isset($_POST["clave1"]) || ! isset($_POST["clave2"])) {
				$errores['clave1'] = "No he recibido ambas claves";
			} else {
				$errores['clave1'] = '';
				if ( $_POST["clave1"] != $_POST["clave2"]) {
					$errores['clave1'] .= "Las claves tienen que ser iguales";
				}
				if ( strlen($_POST["clave1"]) < 4) {
					$errores['clave1'] .= "<br>La clave ha tener al menos 4 caracteres";
				}
			}

			if ($errores) {

				//mostrar_errores($errores);
				include "formulario.php";

			} else {

				echo "Todo bien, registramos al nuevo usuario";
			
			}
		}

	?>

</body>
</html>

