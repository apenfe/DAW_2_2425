<?php
/*
 * Confeccionar una clase Persona que tenga como atributos el nombre y la edad.
 * Definir como responsabilidades un método final que cargue los datos personales.
 * Otro método debe imprimir dichos datos personales.
 */

class Persona
{
    public $nombre;
    public $edad;

    final public function cargarDatos($nombre, $edad) {
        $this->nombre=$nombre;
        $this->edad=$edad;
    }

    public function imprimirDatos() {
        echo "Nombre: ". $this->nombre. "<br>";
        echo "Edad: ". $this->edad. "<br>";
    }
}

/*
 * Plantear una segunda clase Empleado que herede de la clase Persona.
 * Definir la clase Persona con el modificador Final.
 * Añadir un atributo sueldo y los métodos de cargar el sueldo e imprimir su sueldo.
 */

class Empleado extends Persona
{
    public $sueldo;

    public function cargarSueldo($sueldo) {
        $this->sueldo=$sueldo;
    }

    public function imprimirSueldo() {
        echo "Sueldo: ".$this->sueldo;
    }
}

/*
 * Definir un objeto de la clase Persona y llamar a sus métodos.
 * También crear un objeto de la clase Empleado y llamar a sus métodos.
 */

$persona = new Persona();
$persona->cargarDatos("juan", 23);
$persona->imprimirDatos();