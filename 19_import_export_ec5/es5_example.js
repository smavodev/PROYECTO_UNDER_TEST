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

module.exports = {sumar, restar};