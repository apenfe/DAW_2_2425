<?php
require_once 'SRC/animals/Animal.php';
require_once 'SRC/animals/Mammal.php';
require_once 'SRC/animals/Bird.php';
require_once 'SRC/animals/interfaces/CanFly.php';
require_once 'SRC/animals/traits/Flyable.php';
require_once 'SRC/animals/Dog.php';
require_once 'SRC/animals/Eagle.php';
require_once 'SRC/zooManagement/ZooKeeper.php';

use chatgpt\SRC\animals\Dog;
use chatgpt\SRC\animals\Eagle;
use chatgpt\SRC\zooManagement\ZooKeeper;

$zoo = new ZooKeeper();

$zaira = new Dog("zaira", 10);
$laika = new Dog("laika", 4);

$pajaro_1 = new Eagle("Piolin", 20);

$zoo->addAnimal($zaira);
$zoo->addAnimal($laika);
$zoo->addAnimal($pajaro_1);

$zoo->showAnimals();

$pajaro_1->fly();