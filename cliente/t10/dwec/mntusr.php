<?php
    $id=$_GET["id"];
    $nom=$_GET["nombre"];
    $apel1=$_GET["apel1"];
    $apel2=$_GET["apel2"];
   //Conexion a la base de datos
   $conn = new mysqli('localhost', 'usuariodwec', 'dwecpwd', 'dwec');
   // Verificar si hubo un error en la conexión
   if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}
// Consulta para modificar el registro con el ID recibido
$sql = "UPDATE usuarios SET nombre='$nom', apellido1='$apel1', apellido2='$apel2', fecha=current_timestamp() WHERE ID = $id";
if ($conn->query($sql) === TRUE) {
    echo "El registro con ID $nom ha sido insertado correctamente.";
} else {
    echo "Error al eliminar el registro: " . $conn->error;
}
// Cerrar la conexión
$conn->close();
?>
