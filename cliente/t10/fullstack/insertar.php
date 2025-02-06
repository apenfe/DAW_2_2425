<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$edad = $_POST['edad'];

$sql = "INSERT INTO clientes (nombre, email, edad) VALUES ('$nombre', '$email', $edad)";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['message'] = "Usuario creado exitosamente";
} else {
    $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
echo json_encode($response);
