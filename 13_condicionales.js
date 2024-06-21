
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

dias_semana(1);

function dias_semana(dia_semana) {
  if (dia_semana === 1) {
    console.log("Lunes");
  } else if (dia_semana === 2) {
    console.log("Martes");
  } else if (dia_semana === 3) {
    console.log("Miércoles");
  } else if (dia_semana === 4) {
    console.log("Jueves");
  } else if (dia_semana === 5) {
    console.log("Viernes");
  } else if (dia_semana === 6) {
    console.log("Sábado");
  } else if (dia_semana === 7) {
    console.log("Domingo");
  } else {
    console.log(
      "No es una día de semana, prueba con un número entre el 1 y el 7"
    );
  }
}

dias_semana(120);

// * Switch
// let key = 1

// switch (key) {
//   case value:
    
//     break;

//   default:
//     break;
// }

let dia = 2;

switch (dia) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log( "No es una día de semana, prueba con un número entre el 1 y el 7")
    break;
}




function puedeVotarYConducir(edad, tieneLicencia, pais) {
    
    if (pais === 'USA' && edad >= 18 && tieneLicencia) {
        return 'Puede votar y manejar en USA';
    } else if (pais === 'México' && edad >= 18 && tieneLicencia) {
        return 'Puede votar y manejar en México';
    } else if (edad >= 18) {
        return 'Puede votar pero no manejar';
    } else {
        return 'No puede votar ni manejar';
    }

}

console.log(puedeVotarYConducir(19, true, 'USA')); 
console.log(puedeVotarYConducir(17, true, 'México'));
console.log(puedeVotarYConducir(30, true, 'Perú'));
console.log(puedeVotarYConducir('USA',true, 30));



// Planificacion de su desarrollo (DESARRROLLAR SOFTWARE, AUTOMATIZACIONES)
// * PRUEBA 
// * Crear una funcion, al ingresar el nombre de un alumno y que el promedio sea mayor a 18 (Excelente), 15 (Bueno), 10 (Malo)

// ^^ variables = promedio y alumno
// ^^ condiciones: 
// * si es mayor 18 y menor o igual 20 (excelente) 
// * si es mayor 15 y menor o igual 18 (Bueno)  
// * si es mayor 10 y menor o igual 15 (regular)
// * si es mayor 1 y menor o igual 10 (Malo)
// ^^ Consideracion: La nota va de 1 a 20, si ingresa un numero mayor o menor al rango (1 al 20) Promedio Invalido


function evaluarDesempeno(nombre, promedio) {
  if (promedio >= 18 && promedio <= 20) {
      console.log(`${nombre} tiene un desempeño Excelente`);
  } else if (promedio >= 15 && promedio < 18) {
      console.log(`${nombre} tiene un desempeño Bueno`);
  } else if (promedio >= 10 && promedio < 15) {
      console.log(`${nombre} tiene un desempeño Regular`);
  } else if (promedio >= 1 && promedio < 10) {
      console.log(`${nombre} tiene un desempeño Malo`);
  } else {
      console.log("Promedio inválido. El promedio debe estar entre 1 y 20.");
  }
}

// Ejemplos de uso
evaluarDesempeno("Juan", 19); // "Juan tiene un desempeño Excelente"
evaluarDesempeno("Ana", 16); // "Ana tiene un desempeño Bueno"
evaluarDesempeno("Pedro", 13); // "Pedro tiene un desempeño Regular"
evaluarDesempeno("Lucía", 5); // "Lucía tiene un desempeño Malo"
evaluarDesempeno("Luis", 20); // "Luis tiene un desempeño Excelente"
evaluarDesempeno("Mario", 0); // "Promedio inválido. El promedio debe estar entre 1 y 20."
