// * Por consola y solo parametro

function tablaMultiplicarWhile(numero) {
  let contador = 1;
  while (contador <= 12) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
  }
}

// Ejemplo de uso para la tabla del número 4
tablaMultiplicarWhile(4);

function tablaMultiplicarDoWhile(numero) {
  let contador = 1;
  do {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
  } while (contador <= 12);
}

// Ejemplo de uso para la tabla del número 5
tablaMultiplicarDoWhile(5);

function tablaMultiplicarFor(numero) {
  for (let contador = 1; contador <= 12; contador++) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
  }
}

// Ejemplo de uso para la tabla del número 6
tablaMultiplicarFor(6);



// * Por consola + 1 parametro
function tablaMultiplicarWhile(numero, limite) {
  let contador = 1;
  while (contador <= limite) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
  }
}

// Ejemplo de uso para la tabla del número 4 hasta el límite 12
tablaMultiplicarWhile(4, 12);

function tablaMultiplicarDoWhile(numero, limite) {
  let contador = 1;
  do {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
    contador++;
  } while (contador <= limite);
}

// Ejemplo de uso para la tabla del número 5 hasta el límite 12
tablaMultiplicarDoWhile(5, 12);

function tablaMultiplicarFor(numero, limite) {
  for (let contador = 1; contador <= limite; contador++) {
    console.log(`${numero} x ${contador} = ${numero * contador}`);
  }
}

// Ejemplo de uso para la tabla del número 6 hasta el límite 12
tablaMultiplicarFor(6, 12);
