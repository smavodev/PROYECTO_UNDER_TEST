// **********     Curso JavaScript: 16. Arrow Function, If Ternario **********

// * Arrow Function
// ^^ Un arrow function (función flecha) es una forma concisa de escribir funciones en 
// ^^ JavaScript introducida en ES6. Tiene una sintaxis más corta que las funciones tradicionales

const suma1 = (a, b) => {
    let resultado = a + b
    return console.log(resultado);
};
suma1(15,20)

const suma2 = (a, b) => console.log(a + b);
suma2(15,15)

// * Funcion declarada
// function funcion1 (){
//   if (condition) {
//     (condicion) ? verdero : false
//   }
// }

// * Funcion expresada
// const funcio2 = function() {
//   if (condition) {
//     (condicion) ? verdero : false
//   }
// }

// * Arrow function [funcion fecla]
// const funcion3 = () => {
//   (condicion) ? verdero : false
// }

const funcion2 = (lado = 0) => {
  const area = lado * lado;
  return area;
};

console.log(funcion2(4));

const funcion3 = function (lado = 0) {
  const area = lado * lado;
  return area;
};
console.log(funcion3(5));

function funcion4(lado = 0) {
  const area = lado * lado;
  // return area
  console.log(area);
}
funcion4(7);


// * If ternario
// ^^ Un if ternario es una forma concisa de escribir una sentencia if-else en una sola línea. 
// ^^ Se utiliza el operador condicional (condición) ? expresiónSiVerdadero : expresiónSiFalso.
// (condicion) ? verdero : false

const cadenaInvertida2 = (cadena) => {
    if (!cadena) {
      console.log("No has ingresado una cadena");
    } else {
      if (typeof cadena !== "string") {
        console.log("No es una cadena");
      } else {
        console.log(cadena);
      }
    }
  };
  // cadenaInvertida2();
  // cadenaInvertida2("hola 1");
  // cadenaInvertida2(6);

  const cadenaInvertida1 = (cadena) => {
    !cadena
      ? console.log("No has ingresado una cadena")
      : typeof cadena !== "string"
      ? console.log("No es una cadena")
      : console.log(cadena);
  };
  // cadenaInvertida1();
  // cadenaInvertida1("hola");
  // cadenaInvertida1(5);
  
const cadenaInvertida0 = cadena => !cadena ? console.log("No has ingresado una cadena") : typeof cadena !== "string" ? console.log("No es una cadena") : console.log(cadena);
// cadenaInvertida0();
// cadenaInvertida0("hola 0");
// cadenaInvertida0(10);

