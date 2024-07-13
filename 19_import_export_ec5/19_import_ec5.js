

// * export  --> exportas variables, constantes, funciones etc 
// * import --> llamar a variables constantes funciones. etc que han sido exportas, para usarloa en el archivo en donde los estas importanto

// * ES5 --> FORMA ANTIGUA
// * modulos common.js

const {restar, sumar} = require('./es5_example.js')

const resultado1 = sumar(5,8);
console.log(resultado1)

const resultado2 = restar(10,6);
console.log(resultado2)


