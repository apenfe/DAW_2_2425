<?php

abstract class Animal
{
    public $name;
    public $age;

    public function __construct($name, $age) {
        $this->name=$name;
        $this->age=$age;
    }

    public function describe() {
        echo $this->name . " tiene ". $this->age . " años.<br>";
    }

    public abstract function makeSound();

}
