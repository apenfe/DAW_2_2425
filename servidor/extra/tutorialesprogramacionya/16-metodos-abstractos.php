<?php

/*
 * Plantear una clase abstracta Trabajador. Definir como atributo su nombre y sueldo.
 * Declarar un método abstracto: calcularSueldo. Definir otro método para imprimir
 * el numbre y su sueldo.
 */

abstract class Trabajador
{
    public $nombre;
    public $sueldo;

    abstract public function calcularSueldo();

    public function imprimir(){
        echo "Nombre: ". $this->nombre;
        echo "Sueldo: ". $this->sueldo;
    }
}

/*
 * Plantear una subclase Empleado. Definir el atributo $horasTrabajadas, $valorHora.
 * Para calcular el sueldo tener en cuenta que se le paga 3.50 la hora
 */

class Empleado extends Trabajador
{
    public $horasTrabajadas;
    const VALOR_HORA = 3.5;

    public function __construct($nombre, $horasTrabajadas) {
        $this->nombre=$nombre;
        $this->horasTrabajadas=$horasTrabajadas;
    }

    public function calcularSueldo(){
        $this->sueldo= $this->horasTrabajadas * self::VALOR_HORA;
    }

}

/*
 * Plantear una clase Gerente que herede de la clase Trabajador.
 * Para calcular el sueldo tener en cuenta que se le abona un 10% de las utilidades de la empresa.
 */

class Gerente extends Trabajador
{
    public $utilidades;

    public function __construct($nombre, $utilidades) {
        $this->nombre=$nombre;
        $this->utilidades=$utilidades;
    }

    public function calcularSueldo(){
        $this->sueldo=$this->utilidades*0.10;
    }

}

$empleado1=new Empleado('Pablo Rodriguez',150);
$empleado1->calcularSueldo();
echo 'El sueldo del empleado<br>';
$empleado1->imprimir();

echo "<br>";
$gerente1=new Gerente('Marcos Herning',1000000);
$gerente1->calcularSueldo();
echo 'El sueldo del gerente<br>';
$gerente1->imprimir();