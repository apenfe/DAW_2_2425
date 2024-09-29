<?php

namespace chatgpt\SRC\animals;

class Mammal extends Animal{

    public function makeSound() {
        echo "{$this->name} hace un sonido de mamífero.\n";
    }

}
