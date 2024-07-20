

// * export  --> exportas variables, constantes, funciones etc 
// * import --> llamar a variables constantes funciones. etc que han sido exportas, para usarloa en el archivo en donde los estas importanto

// * ES5 --> FORMA ANTIGUA
// * modulos common.js
/**
 * Esta funcion hace la operacion matematica de la suma.
 * @param {number} num1 - El primer numero.
 * @param {number} num2 - El segundo numero.
 */
function sumar(num1,num2) {
    return num1 + num2
}

const restar = function(a = 0, b = 0){
    return a - b
}


const resultado1 = sumar(5,8);
console.log(resultado1)

const resultado2 = restar(10,6);
console.log(resultado2)


