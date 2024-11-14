/*
    Programa un script que cree una clase llamada Coche que se defina en un
    fichero independiente,   con   los   siguientes   componentes   y   requisitos   de
    funcionalidad:

        a. Tendrá dos propiedades: “marca” y “modelo”.
        b. Contará con dos métodos: “arrancar” y “parar”.
        c. El método “arrancar” visualizará por consola el mensaje “El coche de
            marca [marca] y modelo [modelo] ha arrancado”.
        d. Si ya está arrancado, visualizará por consola el mensaje “El coche de
            marca [marca] y modelo [modelo] ya está arrancado”.
        e. El método “parar” visualizará por consola el mensaje “El coche de
            marca [marca] y modelo [modelo] ha parado”.
        f. Si ya está parado, visualizará por consola el mensaje “El coche de
            marca [marca] y modelo [modelo] ya está parado”.

        Crear dos objetos a partir de la clase Coche, con diferentes valores para las
        propiedades “marca” y “modelo”. Llamar a los métodos arrancar()  parar() para
        cada   uno   de   los   objetos   y   comprobar   que   se   visualizan   los   mensajes
        adecuados en la consola.
    */

import Coche from './Coche.js';

const coche1 = new Coche('Seat', 'Ibiza');
const coche2 = new Coche('Renault', 'Clio');

coche1.arrancar();
coche1.arrancar();
coche1.parar();
coche1.parar();

coche2.arrancar();
coche2.parar();
coche2.parar();
coche2.arrancar();

