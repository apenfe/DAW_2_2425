let primero = document.getElementById("1");
let segundo = document.getElementById("2");
let tercero = document.getElementById("3");
let cuarto = document.getElementById("4");

// 80/4
// 80 >> 2
let resultado = 80 >> 2;
console.log(resultado);
primero.innerHTML = "80 >> 2 =" + resultado;

// 20*2
// 20 << 1
resultado = 20 << 1;
console.log(resultado);
segundo.innerHTML = "20 << 1 =" + resultado;

// 120/16
// 120 >> 4
resultado = 120 >> 4;
console.log(resultado);
tercero.innerHTML = "120 >> 4 =" + resultado;

// 4*8
// 4 << 3
resultado = 4 << 3;
console.log(resultado);
cuarto.innerHTML = "4 << 3 =" + resultado;