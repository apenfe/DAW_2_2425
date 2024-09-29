<?php

class Fecha
{
    public $timestamp;
    public static $idioma = 'es';

    public function __construct( DateTime $timestamp = new DateTime()) {
        $this->timestamp = $timestamp;
    }

    public function mostrarFormatoSpanish() {

        if(self::$idioma == 'es') {
            echo "La fecha es: ".$this->timestamp->format('d/m/Y') . "<br>";
        }else{
            echo "The date is: ".$this->timestamp->format('d/m/Y') . "<br>";
        }

    }

    public function mostrarFormatoEnglish() {
        if(self::$idioma == 'es') {
            echo "La fecha es: ".$this->timestamp->format('Y-m-d') . "<br>";
        }else{
            echo "The date is: ".$this->timestamp->format('Y-m-d') . "<br>";
        }
    }
}

$fecha = new Fecha();
echo $fecha->mostrarFormatoSpanish();
echo $fecha->mostrarFormatoEnglish();

echo "<br>";

$fecha = new Fecha(new DateTime('2020-12-25'));
echo $fecha->mostrarFormatoSpanish();
echo $fecha->mostrarFormatoEnglish();

