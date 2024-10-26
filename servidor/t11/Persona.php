<?php

abstract class Persona
{
    private $nombre;

    function __construct($nombre) {
        $this->nombre = $nombre;
    }

    public function saludar() {
        echo "Hola soy " . $this->nombre . "<br>";
    }

    public abstract function mear();

}

class Hombre
{
    public function mear() {
        echo "Estoy meando de pie<br>";
    }
}

class Mujer
{
    public function mear() {
        echo "Estoy meando sentada<br>";
    }

}

class Casa
{
    private $habitantes = [];

    public function habitar($persona) {
        $this->habitantes[] = $persona;
    }

    public function pasear() {
        foreach ($this->habitantes as $habitante) {
            $habitante->mear();
        }
    }
}