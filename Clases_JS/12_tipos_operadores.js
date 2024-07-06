// **********     Curso JavaScript: 11. Tipos de Operadores - **********

// Operadores Aritmeticos : + - * /

let nombre1 = "Lizeth";
let nombre2 = "Sergio";
let resultado = nombre1 + " " + nombre2;
// console.log(resultado);

let number2 = 3;
let number1 = 7;
let resultado2 = number1 + number2;
// console.log(resultado2);

// ! No es lo mismo =, ==, ===
// ! = 1 igual es asignación de variable     let nombre1 = 'lizeth'
// ! == 2 iguales es comparacion de valores  (7 == 7) ("7" == 7)
// ! === 3 iguales es comparación de tipo de dato y de valor

// console.log(7 == 7);
// console.log("7" == 7); // Comparando valores
// console.log(0 == false);

// console.log(7 === 7);
// console.log("7" === 7); // Tido de dato y valor
// console.log(0 === false);
// console.log(Boolean(0) === false);

// * ==============================================================

// ^^ Aritméticos:  + - * / % ()  */
let number01 = 3;
let number02 = 7;
// console.log(number01 + number02);
// console.log(number01 - number02);
// console.log(number01 / number02);
// console.log(number01 * number02);

let resul = number01 % number02;
// console.log(resul);

// ^^ Relacionales
/*  Relacionales: 
        >,    **** Mayor que
        <,    **** Menor que
        >=,   **** Mayor o igual que 
        <=,   **** Menor o igual que 
        ==,   **** compara el valor
        ===,  **** compara tipo y valor 
        !=,   **** Diferente al valor
        !==   **** Diferente al valor y tipo
*/

// console.log(8 > 9);
// console.log(9 > 8);
// console.log(8 >= 9);
// console.log(9 >= 8);
// console.log(7 < 7);
// console.log(7 <= 7);

// ^^ Incremento Decremento
let i = 5;

console.log(i++); // pos-incremento
console.log(i)

console.log(++i); // pre-incremento
console.log(i)

console.log(i--); // post-decremento
console.log(i)

console.log(--i); // pre-decremento
console.log(i)

// ^^ Lógicos
// ! - Not : Niega, es decir lo que es verdadero lo vuelve falso y viceversa
// * || - Or: Cuando tengo 2 o más condiciones, con que una se cumpla, es decir sea verdadera, el OR será verdadero.
// && - And: Cuando tengo 2 o más condiciones, todas tienen que cumplirse, es decir ser verdaderas, para que AND se valide 

console.log(!true);
console.log(!false);
console.log((9 === 9) || ("9" === 9));
console.log((9 === 9) && ("9" === 9));
console.log((9 === 9) && ("9" === "9")); 
