function tablaMultiplicarFor0(numero, limite) {
  for (let contador = 1; contador <= limite; contador++) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
  }
}
// tablaMultiplicarFor0(6, 12);

// * FUNCION DECLARADA
function tablaMultiplicarFor() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Introduce el número para la tabla de multiplicar (for): ",
    (numero) => {
      readline.question(
        "Introduce el límite para la tabla de multiplicar (for): ",
        (limite) => {
          numero = parseInt(numero);
          limite = parseInt(limite);

          for (let contador = 1; contador <= limite; contador++) {
            console.log(`${numero} x ${contador} = ${numero * contador}`);
          }

          readline.close();
        }
      );
    }
  );
}
// tablaMultiplicarFor();


// * FUNCION EXPRESADA
const tablaMultiplicarFor3 = function () {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Introduce el número para la tabla de multiplicar (for): ",
    (numero) => {
      readline.question(
        "Introduce el límite para la tabla de multiplicar (for): ",
        (limite) => {
          numero = parseInt(numero);
          limite = parseInt(limite);

          for (let contador = 1; contador <= limite; contador++) {
            console.log(`${numero} x ${contador} = ${numero * contador}`);
          }

          readline.close();
        }
      );
    }
  );
};
//tablaMultiplicarFor3();


// * FUNCION DE FECHA --> ARROW FUNCTION
const tablaMultiplicarFor4 = () => {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Introduce el número para la tabla de multiplicar (for): ",
    (numero) => {
      readline.question(
        "Introduce el límite para la tabla de multiplicar (for): ",
        (limite) => {
          numero = parseInt(numero);
          limite = parseInt(limite);

          for (let contador = 1; contador <= limite; contador++) {
            console.log(`${numero} x ${contador} = ${numero * contador}`);
          }

          readline.close();
        }
      );
    }
  );
};
//tablaMultiplicarFor4();
