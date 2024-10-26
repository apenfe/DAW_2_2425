<?php

namespace chatgpt\SRC\animals;


use chatgpt\SRC\animals\interfaces\CanFly;
use chatgpt\SRC\animals\traits\Flyable AS FlyableTrait;

class Bird extends Animal implements CanFly
{
    use FlyableTrait;

    public function makeSound(): void {
        echo "{$this->name} hace un sonido de pájaro.\n";
    }

}