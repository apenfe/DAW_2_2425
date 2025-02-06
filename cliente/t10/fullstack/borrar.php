<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = $_GET['id'];

$sql = "DELETE FROM clientes WHERE id=$id";

$response = array();
if ($conn->query($sql) === TRUE) {
    $response['message'] = "Usuario eliminado exitosamente";
} else {
    $response['message'] = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
echo json_encode($response);
