<?php

namespace SRC\animals;

use SRC\animals\interfaces\CanFly;
use SRC\animals\traits\Flyable;

class Bird extends Animal implements CanFly
{
    use Flyable;

    public function makeSound() {
        echo "{$this->name} hace un sonido de pájaro.\n";
    }

}