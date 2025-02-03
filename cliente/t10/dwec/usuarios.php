<?php
    $nom=$_GET["nombre"];
    $apel1=$_GET["apel1"];
    $apel2=$_GET["apel2"];
   //Conexion a la base de datos
   $conn = new mysqli('localhost', 'usuariodwec', 'dwecpwd', 'dwec');
   if ($conn ->connect_errno) {
       echo "Falló la conexión con MySQL: " . $conn ->connect_error;
   }
    //Consulta SQL para obtener los registros
    $sql = "SELECT * FROM `usuarios` WHERE UCASE(nombre) like '%$nom%' AND UCASE(apellido1) like '%$apel1%'AND UCASE(apellido2) like '%$apel2%'";
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
