// HOISTING
//* ¿Qué es el Hoisting?
//^ El hoisting es un comportamiento en JavaScript donde las declaraciones de variables y funciones se elevan
//^ (o se "mueven") al inicio de su contexto de ejecución antes de que se ejecute el código.
//^ Esto significa que puedes usar funciones y variables antes de su declaración en el código,
//^ pero con ciertas reglas y limitaciones.


pepito_mulpli(7, 54);

// funcion expresada
let pepito1 = function (num1, num2) {
  return console.log(num1 * num2);
};
pepito1(2, 3);


// Arrow function
let pepito2 = (num1, num2) => console.log(num1 * num2);
pepito2(3, 5);

// funcion declarada
function pepito_mulpli(num1, num2) {
  return console.log(num1 * num2);
}
