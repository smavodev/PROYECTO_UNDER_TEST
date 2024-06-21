
// **********     Curso JavaScript: 12. Condicionales **********

// ^^ Estructuras condicionales:
// ^^ Es una estructura que me permite tomar una decision y en base a ello realizar una accion
// Su cumples 18 años eres mayor de edad
// si tienes entre 0 y 17 años eres menor de edad 

// ^^ La estructura if...else ejecuta bloques de código basados en una o más condiciones.

// if (condition) {
//   // codigo tomar la desicion
// }
// * if */
let color = 2
if (color === 1) {
  console.log("Amarillo")
}

if (color === 2) {
  console.log("Verde")
}

// * if - else */
let edad = 20
const mayorEdad = 18

if (edad > mayorEdad) {
  console.log("Eres mayor de edad")
} else {
  console.log("Eres Menor de edad")
}

// if (edad < 17) {
//   console.log("Eres Menor de edad")
// }

// * if - else if - else */
let estacion_1 = 5

if (estacion_1 === 1) {
  console.log("Es primavera")
} else if (estacion_1 === 2) {
  console.log("Es Otoño")
} else if (estacion_1 === 3) {
  console.log("Es Invierno")
} else if (estacion_1 === 4) {
  console.log("Es Verano")
} else {
  console.log("No es una estación")
}
console.log(estacion_1)

// Ejemplo de uso
determinarEstacion(20);

function determinarEstacion(estacion_1) {
  if (estacion_1 === 1) {
      console.log("Es primavera");
  } else if (estacion_1 === 2) {
      console.log("Es Otoño");
  } else if (estacion_1 === 3) {
      console.log("Es Invierno");
  } else if (estacion_1 === 4) {
      console.log("Es Verano");
  } else {
      console.log("No es una estación válida");
  }
}



// * Indicar que dia de la semana es a a partir de los numeros del 1 al 7

