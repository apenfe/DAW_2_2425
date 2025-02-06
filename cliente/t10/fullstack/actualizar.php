<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$email = $_POST['email'];
$edad = $_POST['edad'];

$sql = "UPDATE clientes SET nombre='$nombre', email='$email', edad=$edad WHERE id=$id";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['message'] = "Usuario actualizado exitosamente";
} else {
    $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
echo json_encode($response);
