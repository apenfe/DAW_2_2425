<?php

/*
 * Confeccionar una clase abstracta Persona que tenga como atributos el nombre y la edad.
 * Definir como responsabilidades un método que cargue los datos personales y otro que los imprima.
 */

abstract class Persona
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
 * Añadir un atributo sueldo y los métodos de cargar el sueldo e imprimir su sueldo.
 */

class Empleado extends Persona
{
    public $sueldo;

    public function __construct($nombre, $edad, $sueldo) {
        parent::cargar($nombre,$edad);
        $this->sueldo=$sueldo;
    }

    public function imprimirSueldo() {
        echo "Sueldo: ".$this->sueldo. "<br>";
    }

    public function cargarSueldo($sueldo) {
        $this->sueldo = $sueldo;
    }

    public function imprimir()
    {
        parent::imprimir();
        $this->imprimirSueldo();
    }
}

/*
 * Definir un objeto de la clase Persona y ver que error produce.
 * También crear un objeto de la clase Empleado y llamar a sus métodos.
 */

$empleado = new Empleado("adrian",23, 2345);
$empleado->imprimir();
