<?php
$id = $_GET["id"];
//Conexion a la base de datos
$conn = new mysqli('localhost', 'root', '', 'dwec');
// Verificar si hubo un error en la conexión
if ($conn->connect_error) {
  die("Error de conexión: " . $conn->connect_error);
}
// Consulta para eliminar el registro con el ID recibido
$sql = "DELETE FROM usuarios WHERE id = '$id'";

if ($conn->query($sql) === TRUE) {
  echo "El registro con ID $id ha sido eliminado correctamente.";
} else {
  echo "Error al eliminar el registro: " . $conn->error;
}
// Cerrar la conexión
$conn->close();
