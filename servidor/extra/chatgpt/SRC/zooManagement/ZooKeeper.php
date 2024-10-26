<?php
namespace chatgpt\SRC\zooManagement;

use chatgpt\SRC\animals\Animal;

class ZooKeeper
{
    public $animals;

    public function addAnimal(Animal $animal) {
        $this->animals[]=$animal;
    }

    public function showAnimals() {

        foreach ($this->animals as $animal){
            $animal->describe();
            $animal->makeSound();
        }
    }

}
