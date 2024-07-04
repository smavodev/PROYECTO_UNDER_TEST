

/**
 * Esta función imprime la tabla de multiplicar de un número dado desde un inicio hasta un límite usando un ciclo while.
 * @param {number} contador - El número para el cual se va a generar la tabla de multiplicar.
 * @param {number} inicio - El número inicial desde donde comenzar a multiplicar.
 * @param {number} fin - El número límite hasta donde se va a multiplicar.
 */
function tablaWhile(contador, inicio, fin) {
  let operador = inicio;
  while (operador <= fin) {
    console.log(`${contador} x ${operador} = ${contador * operador}`);
    operador++;
  }
}
tablaWhile(11, 1, 12);
tablaWhile(11, 1, 12);


/**
 * Esta función imprime la tabla de multiplicar de un número dado desde un inicio hasta un límite usando un ciclo do while.
 * @param {number} contador - El número para el cual se va a generar la tabla de multiplicar.
 * @param {number} inicio - El número inicial desde donde comenzar a multiplicar.
 * @param {number} fin - El número límite hasta donde se va a multiplicar.
 */
function tablaDoWhile(contador, inicio, fin) {
  let operador = inicio;
  do {
    console.log(`${contador} x ${operador} = ${contador * operador}`);
    operador++;
  } while (operador <= fin);
}
tablaDoWhile(3, 1, 12);


/**
 * Esta función imprime la tabla de multiplicar de un número dado desde un inicio hasta un límite.
 * @param {number} multi - El número para el cual se va a generar la tabla de multiplicar.
 * @param {number} init - El número inicial desde donde comenzar a multiplicar.
 * @param {number} limite - El número límite hasta donde se va a multiplicar.
 */
function funciontabla3(multi, init, limite) {
  let multiplicador = multi;
  for (let operador = init; operador <= limite; operador++) {
    console.log(`${multiplicador} x ${operador} = ${multiplicador * operador}`);
  }
}
funciontabla3(5, 10, 25)

/**
 * Esta función imprime la tabla de multiplicar de un número dado usando un arreglo de múltiplos específicos.
 * @param {number} numeros - El número para el cual se va a generar la tabla de multiplicar.
 */
function funcionTabla1(numeros) {
  const multiplos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; //1, 2, 3
  for (const num of multiplos) {
    console.log(`${numeros} x ${num}  es = ${numeros * num}`);
  }
}
funcionTabla1(7);


/**
 * Esta función imprime la tabla de multiplicar de un número dado.
 * @param {number} numeros - El número para el cual se va a generar la tabla de multiplicar.
 */
function funcionTabla2(numeros) {
  const multiplos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]; // [0] = 2, [1] = 1, [2] = 3
  for (let num in multiplos) {
    console.log(`${numeros} x ${multiplos[num]} = ${numeros * multiplos[num]}`);
  }
}
funcionTabla2(9);

