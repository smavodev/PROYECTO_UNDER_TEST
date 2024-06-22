// * WHILE
// * Bucle While:
// ^^ El bucle while ejecuta un bloque de código mientras una condición especificada sea verdadera.
// ^^ Mientras se cumpla la condicion
// ^^ Esto podria producir un ciclo infinito: contador > 10
// while (condition) {

// }

let contador0 = 0;
while (contador0 < 10) {
  console.log(`While ---> ${contador0}`);
  contador0++;
}

// ! Bucle Infinito --> no ejecutarlo
// let contador1 = 0
// while (true) {
//     console.log(`While ---> ${contador1}`)
//     contador1++;
// }

// * DO WHILE
// * Bucle Do While:
// ^^ El bucle do...while es similar al while, pero la condición se evalúa después de ejecutar el bloque de código.
// ^^ Esto garantiza que el bloque de código se ejecute al menos una vez.
// ^^ La primera vez se ejecuta todo el codigo, la segunda ejecucion lo realiza de lo que esta dentro de las llaves { }
let contador = 0;

do {
  console.log(`do While ---> ${contador}`);
  contador++;
} while (contador < 10);

// * FOR
// * Bucle For:
// ^^ El bucle for es más comúnmente utilizado cuando sabes cuántas veces quieres ejecutar un bloque de código.
// ^^ Tiene una estructura específica con una inicialización, una condición y un incremento.
// for (let index = 0; index < array.length; index++) {
//  const element = array[index];
// }
for (let contador10 = 10; contador10 <= 20; contador10++) {
  console.log(`FOR ---> ${contador10}`);
}

// [] = array
// {} = objeto

// * FOR IN
// * FOR IN: Recorrer o iterar las propiedades de un objeto
// ^^ El bucle for...in recorre todas las propiedades enumerables de un objeto
// ^^ (o elementos indexados de un array). Es útil para iterar sobre las propiedades de un objeto.
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];

//     }
// }

const objeto = {
  titulo: "Jon",
  descripcion: "Doe",
  valor: 28,
};

for (const propiedad in objeto) {
  console.log(`Id: ${propiedad}, Value: ${objeto[propiedad]}`);
}

let cadenas = "Hola Mundo UNDER TEST";
for (const elementos in cadenas) {
  console.log(`Id: ${elementos}, Value: ${cadenas[elementos]}`);
}

// * FOR OF
// * FOR OF: Te permite recorrer un objeto , arrays
// ^^ El bucle for...of recorre los valores de un objeto iterable (como arrays, strings, mapas,
// ^^ conjuntos, etc.). Es útil para iterar sobre los elementos de una colección.
// for (const iterator of object) {
//     // LOGICA
// }

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, "10"];
for (const elemento of numeros) {
  console.log(elemento);
}

let cadena = "1200";
for (const caracter of cadena) {
  console.log(caracter);
}

// * EJERCICIOS

// * TABLA DE MULTIPLICAR DEL 4 (1 AL 12)

// * WHILE
let contador1 = 1;
while (contador1 <= 12) {
  console.log(`4 x ${contador1} = ${4 * contador1}`);
  contador1++;
}

// * DO DHILE
let contador2 = 1;
do {
  console.log(`5 x ${contador2} = ${5 * contador2}`);
  contador2++;
} while (contador2 <= 12);

// *  FOR
for (let multi = 1; multi < 13; multi++) {
  console.log(`6 x ${multi} = ${6 * multi}`);
}

// * FOR IN
const numeros_multi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let posic in numeros_multi) {
  console.log(`7 x ${numeros_multi[posic]} = ${7 * numeros_multi[posic]}`);
}

// * FOR OF
const numeros0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

for (let numero of numeros0) {
  console.log(`8 x ${numero} = ${8 * numero}`);
}
