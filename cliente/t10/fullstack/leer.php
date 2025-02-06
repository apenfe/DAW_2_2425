<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "crud";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$id = isset($_GET['id']) ? $_GET['id'] : '';

if ($id) {
    $sql = "SELECT * FROM clientes WHERE id = $id";
    $result = $conn->query($sql);
    $user = $result->fetch_assoc();
    echo json_encode($user);
} else {
    $sql = "SELECT * FROM clientes";
    $result = $conn->query($sql);
    $users = array();
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users);
}

$conn->close();
