<?php
class Dao
{
    private $host;
    private $user;
    private $password;
    private $dbname;
    private $port;
    public $conn;
    private $status;

    public function __construct($host, $user, $password, $dbname, $port )
    {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->dbname = $dbname;
        $this->port = $port;
    }

    public function closeConn()
    {
        mysqli_close($this->conn);
        $this->status  = false;
        echo "Conexión cerrada";
    }

    public function openConn()
    {
        $this->conn=mysqli_connect($this->host, $this->user, $this->password, $this->dbname, $this->port);
        $this->status  = true;
        echo "Conexión abierta";
    }

    public function __destruct()
    {
        if($this->status){
            $this->closeConn();
        }

    }
}

$db = new Dao('localhost', 'root', '1234','cursophp', 3306);
$db->openConn();
$db->closeConn();
?>