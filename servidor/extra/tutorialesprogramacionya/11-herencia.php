<?php

class Persona
{
    public $nombre;
    public $edad;

    public function cargar($nombre, $edad)
    {
        $this->nombre = $nombre;
        $this->edad = $edad;
    }

    public function imprimir()
    {
        echo 'Nombre: '.$this->nombre.'<br>';
        echo 'Edad: '.$this->edad.'<br>';
    }

}

class Empleado extends Persona
{
    public $sueldo;

    public function meterSueldo($sueldo) {
        $this->sueldo=$sueldo;
    }

    private function imprimirSueldo() {
        echo "Sueldo: ".$this->sueldo. "<br>";
    }

    public function imprimir()
    {
        parent::imprimir();
        $this->imprimirSueldo();
    }
}

$persona = new Persona();
$persona->cargar("adrian",23);
$persona->imprimir();

$empleado = new Empleado();
$empleado->meterSueldo(2345);
$empleado->cargar("matias",43);
$empleado->imprimir();
