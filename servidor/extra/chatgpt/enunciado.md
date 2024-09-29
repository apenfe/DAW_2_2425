# ENUNCIADO

Aquí tienes un ejercicio completo en PHP que abarca los principales conceptos de la Programación Orientada a Objetos (POO), como herencia, clases abstractas, interfaces, polimorfismo, sobrecarga, namespaces, y traits.

Supongamos que estamos creando una pequeña aplicación para gestionar un zoológico, y queremos organizar a los animales en diferentes tipos y acciones. Este ejercicio también incluirá traits para compartir comportamiento entre clases, y usaremos namespaces para estructurar el código.

## Contexto
Se te ha encargado el desarrollo de un sistema de gestión para un zoológico. El zoológico alberga diferentes tipos de animales, como mamíferos y aves, que tienen distintas características y comportamientos. Tu objetivo es crear una aplicación que estructure y organice estos animales de forma lógica utilizando conceptos avanzados de Programación Orientada a Objetos (POO) en PHP.

Deberás aplicar conceptos como herencia, clases abstractas, interfaces, traits, namespaces, polimorfismo y sobrecarga de métodos para modelar los comportamientos y características de los diferentes tipos de animales. Además, se debe incluir un encargado del zoológico (zoo keeper) que gestione y muestre información de los animales.

## Requisitos del Sistema

1. Organización del Código:

El sistema debe estar organizado usando namespaces que permitan separar las responsabilidades de cada módulo.

Se deben agrupar las clases relacionadas en directorios separados:

    Animals: Contendrá todas las clases relacionadas con animales.
    Interfaces: Contendrá todas las interfaces relacionadas con los animales.
    Traits: Contendrá todos los traits compartidos por las clases.
    ZooManagement: Contendrá las clases relacionadas con la gestión del zoológico.

2. Clases y Herencia:

Crear una clase abstracta Animal que sirva como clase base para todos los animales del zoológico. La clase debe contener al menos los siguientes métodos y propiedades:

Propiedades:

    name: Nombre del animal.
    age: Edad del animal.

Métodos:

    Un constructor que acepte el nombre y la edad del animal.
    Un método describe() que imprima el nombre y la edad del animal.
    Un método abstracto makeSound(), que cada subclase debe implementar para producir un sonido 
    característico del animal.

3. Clases Concretas de Animales:

Crear las siguientes clases concretas de animales:

    Mammal: Extiende la clase Animal y actúa como clase base para todos los mamíferos.
    Bird: Extiende la clase Animal y actúa como clase base para todas las aves.

Crear las siguientes subclases:

    Dog: Clase concreta que hereda de Mammal. Debe implementar el método makeSound()
    para imprimir “Guau Guau”.
    Eagle: Clase concreta que hereda de Bird. Debe implementar el método makeSound()
    para imprimir “Screeech”.

4. Interfaces:

Crear una interfaz CanFly que declare el método fly(). Todas las clases que implementen esta interfaz deben definir su propio método fly().

5. Traits:

Crear un trait Flyable que implemente el método fly() para describir cómo vuela el animal.

El método fly() debe imprimir un mensaje indicando que el animal (usando su nombre) está volando.

Incluir el trait Flyable en la clase Bird para permitir que todas las subclases de Bird tengan la capacidad de volar.

6. Polimorfismo y Sobrecarga:

La clase ZooKeeper debe ser capaz de manejar cualquier tipo de Animal utilizando polimorfismo.

Implementar sobrecarga de métodos (method overriding) para redefinir el método makeSound() en cada subclase (Dog y Eagle).

7. Clases de Gestión del Zoológico:

Crear la clase ZooKeeper bajo el namespace App\ZooManagement. Esta clase debe cumplir con las siguientes funciones:

    Mantener un registro de todos los animales en el zoológico.
    Proveer un método addAnimal(Animal $animal) para agregar un animal al zoológico.
    Proveer un método showAnimals() que recorra todos los animales y muestre información básica (describe()) 
    y el sonido característico (makeSound()) de cada animal.

8. Interacciones del Sistema:

Crear un archivo index.php que actúe como punto de entrada de la aplicación y cumpla con las siguientes condiciones:
Crear una instancia de ZooKeeper.

    Crear instancias de Dog y Eagle con diferentes nombres y edades.
    Agregar estos animales a la lista gestionada por ZooKeeper.
    Imprimir la información de todos los animales en el zoológico utilizando el método showAnimals() de ZooKeeper.
    Llamar al método fly() en la instancia de Eagle para demostrar el uso del trait Flyable y la interfaz CanFly.

9. Organización con Namespaces:

Todas las clases y archivos deben estar organizados con los siguientes namespaces:

    Clases de animales (Mammal, Bird, Dog, Eagle, Animal) deben estar bajo App\Animals.
    La interfaz CanFly debe estar bajo App\Animals\Interfaces.
    El trait Flyable debe estar bajo App\Animals\Traits.
    La clase ZooKeeper debe estar bajo App\ZooManagement.

10. Ejecución del Proyecto:

Asegúrate de que cada archivo PHP incluya correctamente las dependencias necesarias usando require_once o un autoloading para facilitar la gestión de archivos.

Al ejecutar index.php, la salida esperada debe mostrar información detallada de los animales en el zoológico y sus comportamientos característicos.

## SALIDA ESPERADA
```
Bobby tiene 3 años.
Bobby ladra: ¡Guau Guau!
Aquila tiene 5 años.
Aquila grita como un águila: ¡Screeech!
Aquila está volando.
```

# ESTRUCTURA DEL PROYECTO
```
zoo/
│
└── src/
    ├── Animals/
    │   ├── Animal.php          // Clase abstracta y base de animales
    │   ├── Mammal.php          // Clase base para mamíferos
    │   ├── Bird.php            // Clase base para aves
    │   ├── Interfaces/
    │   │   ├── CanFly.php      // Interfaz para animales que pueden volar
    │   └── Traits/
    │       ├── Flyable.php     // Trait para compartir comportamiento de volar
    ├── ZooManagement/
    │   └── ZooKeeper.php       // Clase para el manejo del zoológico
    └── index.php               // Punto de entrada de la aplicación
```