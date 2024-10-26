<?php

/*
 * Confeccionar una clase Persona que tenga como atributos protegidos,
 * el nombre y la edad. Definir como responsabilidades un método que
 * cargue los datos personales y otro que los imprima.
 */

class Persona
{
    protected $nombre;
    protected $edad;

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

/*
 * Plantear una segunda clase Empleado que herede de la clase Persona.
 * Añadir un atributo sueldo y los métodos de cargar el sueldo e imprimir
 * su sueldo.
 */

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

echo "<br>";

$empleado = new Empleado();
$empleado->meterSueldo(2345);
$empleado->cargar("matias",43);
$empleado->imprimir();
