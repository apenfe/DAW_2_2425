<?php

/*
 * Confeccionar una clase Persona que tenga como atributos el nombre y la edad.
 * El constructor recibe los datos para inicializar dichos atributos.
 * Otro método imprime los datos.
 */

class Persona
{
    protected $nombre;
    protected $edad;

    public function __construct($nombre, $edad)
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
 * Añadir un atributo sueldo. El constructor recibe los tres atributos
 * de la clase Empleado. Llamar al constructor de la clase padre para
 * inicializar los atributos nombre y edad del Empleado.
 */

class Empleado extends Persona
{
    public $sueldo;

    public function __construct($nombre, $edad, $sueldo) {
        parent::__construct($nombre, $edad);
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

$persona = new Persona("adrian",23);
$persona->imprimir();

echo "<br>";

$empleado = new Empleado("adrian",23, 2345);
$empleado->imprimir();
