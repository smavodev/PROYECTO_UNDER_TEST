// * Por consola y salida por consola de valores

function tablaMultiplicarWhile() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Introduce el número para la tabla de multiplicar (while): ",
    (numero) => {
      readline.question(
        "Introduce el límite para la tabla de multiplicar (while): ",
        (limite) => {
          numero = parseInt(numero);
          limite = parseInt(limite);

          let contador = 1;
          while (contador <= limite) {
            console.log(`${numero} x ${contador} = ${numero * contador}`);
            contador++;
          }

          readline.close();
        }
      );
    }
  );
}

// Llamada a la función para tabla de multiplicar usando while
tablaMultiplicarWhile();

function tablaMultiplicarDoWhile() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(
    "Introduce el número para la tabla de multiplicar (do-while): ",
    (numero) => {
      readline.question(
        "Introduce el límite para la tabla de multiplicar (do-while): ",
        (limite) => {
          numero = parseInt(numero);
          limite = parseInt(limite);

          let contador = 1;
          do {
            console.log(`${numero} x ${contador} = ${numero * contador}`);
            contador++;
          } while (contador <= limite);

          readline.close();
        }
      );
    }
  );
}

// Llamada a la función para tabla de multiplicar usando do-while
tablaMultiplicarDoWhile();

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

// Llamada a la función para tabla de multiplicar usando for
tablaMultiplicarFor();
