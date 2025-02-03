<?php
    $id=$_GET["id"];
   //Conexion a la base de datos
   $conn = new mysqli('localhost', 'usuariodwec', 'dwecpwd', 'dwec');
   if ($conn ->connect_errno) {
       echo "Falló la conexión con MySQL: " . $conn ->connect_error;
   }
    //Consulta SQL para obtener los registros
    $sql = "SELECT * FROM `usuarios` WHERE id= $id";
    $result = $conn->query($sql);
    //Crear un array para almacenar los resultados
    $data = array();
    while($row = $result->fetch_assoc()){
        $data[] = $row;
    }
    //Devolver los resultados en formato JSON
    header('Content-Type: application/json');
    echo json_encode($data);
?>
