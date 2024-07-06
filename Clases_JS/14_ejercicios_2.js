/**
 * Esta función imprime la tabla de multiplicar de un número dado desde un inicio hasta un límite.
 * @param {number} multi - El número para el cual se va a generar la tabla de multiplicar.
 * @param {number} init - El número inicial desde donde comenzar a multiplicar.
 * @param {number} limite - El número límite hasta donde se va a multiplicar.
 */
function funciontabla7(multi, init, limite) {
  try {
    let multiplicador = multi;

    if (typeof multiplicador !== "number") {
      throw new Error(`El valor "${multiplicador}" ingresado no es un numero`);
    }
    for (let operador = init; operador <= limite; operador++) {
      console.log(
        `${multiplicador} x ${operador} = ${multiplicador * operador}`
      );
    }
  } catch (error) {
    console.log("No es un numero: ", error.message);
  }
}
// funciontabla7("true", 10, 15);

// **************************************************

function funciontabla3(multi, init, limite) {
  let multiplicador = multi;
  for (let operador = init; operador <= limite; operador++) {
    console.log(`${multiplicador} x ${operador} = ${multiplicador * operador}`);
  }
}

// funciontabla3("true", 10, 15);

// **************************************************

// let multiplicador = 10;
// for (let operador = 1; operador <= 11; operador++) {
//   console.log(`${multiplicador} x ${operador} = ${multiplicador * operador}`);
// }

// **************************************************

let num2 = 2,
  num1 = 4,
  resultado = num1 * num2;

// * Crear un codigo que me permita realizar la multiplicacion de 2 numeros = 2x10 = 100

//*************************************** */

// * FUNCION DECLARADA
function funciontabla4(multi, init, limite) {
  try {
    let multiplicador = multi;

    if (typeof multiplicador !== "number") {
      throw new Error(`El valor "${multiplicador}" ingresado no es un numero`);
    }
    for (let operador = init; operador <= limite; operador++) {
      console.log(
        `${multiplicador} x ${operador} = ${multiplicador * operador}`
      );
    }
  } catch (error) {
    console.log("No es un numero: ", error.message);
  }
}
funciontabla4(8, 8, 9);

// * FUNCION EXPRESADA
const funciontabla5 = function (multi, init, limite) {
  try {
    let multiplicador = multi;

    if (typeof multiplicador !== "number") {
      throw new Error(`El valor "${multiplicador}" ingresado no es un numero`);
    }
    for (let operador = init; operador <= limite; operador++) {
      console.log(
        `${multiplicador} x ${operador} = ${multiplicador * operador}`
      );
    }
  } catch (error) {
    console.log("No es un numero: ", error.message);
  }
};
// funciontabla5(8, 8, 9);

//* ARROW FUNCTION
const funciontabla9 = (multi, init, limite) => {
  try {
    let multiplicador = multi;

    if (typeof multiplicador !== "number") {
      throw new Error(`El valor "${multiplicador}" ingresado no es un numero`);
    }
    for (let operador = init; operador <= limite; operador++) {
      console.log(
        `${multiplicador} x ${operador} = ${multiplicador * operador}`
      );
    }
  } catch (error) {
    console.log("No es un numero: ", error.message);
  }
};

funciontabla9(9, 8, 12);
