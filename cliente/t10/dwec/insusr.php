<?php
$nom = $_GET["nombre"];
$apel1 = $_GET["apel1"];
$apel2 = $_GET["apel2"];
//Conexion a la base de datos
$conn = new mysqli('localhost', 'root', '', 'dwec');
// Verificar si hubo un error en la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
// Consulta para eliminar el registro con el ID recibido
$sql = "INSERT INTO usuarios (id, nombre, apellido1, apellido2, fecha) VALUES (NULL,  '$nom', '$apel1', '$apel2', current_timestamp())";
if ($conn->query($sql) === TRUE) {
    echo "El registro con ID $nom ha sido insertado correctamente.";
} else {
    echo "Error al eliminar el registro: " . $conn->error;
}
// Cerrar la conexión
$conn->close();
