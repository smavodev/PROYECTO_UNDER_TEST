// * Planificar la solucion
// 1 parametro = gravedad
// 2 parametro = peso

//   gravedad_mercurio = 0.38
//   gravedad_marte    = 0.38
//   gravedad_pluton = 0.06

// resultado = peso * gravedad

// ************** Primera solucion **************

function calcularPesoEnPlaneta(numeroPlaneta, pesoTierra) {
  let gravedad;
  let nombrePlaneta;

  switch (numeroPlaneta) {
    case 1:
      gravedad = 0.38;
      nombrePlaneta = "Mercurio";
      break;
    case 2:
      gravedad = 0.91;
      nombrePlaneta = "Venus";
      break;
    case 3:
      gravedad = 0.38;
      nombrePlaneta = "Marte";
      break;
    case 4:
      gravedad = 2.34;
      nombrePlaneta = "Júpiter";
      break;
    case 5:
      gravedad = 1.06;
      nombrePlaneta = "Saturno";
      break;
    case 6:
      gravedad = 0.92;
      nombrePlaneta = "Urano";
      break;
    case 7:
      gravedad = 1.19;
      nombrePlaneta = "Neptuno";
      break;
    case 8:
      gravedad = 0.06;
      nombrePlaneta = "Plutón";
      break;
    default:
      console.log(
        "Número de planeta no válido. Por favor elige un número entre 1 y 8."
      );
      return;
  }

  const pesoEnPlaneta = pesoTierra * gravedad;
  console.log(
    `Tu peso en ${nombrePlaneta} sería de ${pesoEnPlaneta.toFixed(2)} kilos.`
  );
}

// Ejemplo de uso
//   calcularPesoEnPlaneta(1, 70); // Peso en Mercurio
//   calcularPesoEnPlaneta(4, 70); // Peso en Marte


// ************** Segunda solucion **************

function calcularPesoEnPlaneta2(numeroPlaneta = 0, pesoTierra = 0) {
    if (numeroPlaneta === 1) {
      console.log(`Tu peso en "Mercurio" sería de ${pesoTierra * 0.38} kilos`);
    } else if (numeroPlaneta === 2) {
      console.log(`Tu peso en "Venus" sería de ${pesoTierra * 0.91} kilos`);
    } else if (numeroPlaneta === 3) {
      console.log(`Tu peso en "Marte" sería de ${pesoTierra * 0.38} kilos`);
    } else if (numeroPlaneta === 4) {
      console.log(`Tu peso en "Júpiter" sería de ${pesoTierra * 2.34} kilos`);
    } else if (numeroPlaneta === 5) {
      console.log(`Tu peso en "Saturno" sería de ${pesoTierra * 1.06} kilos`);
    } else if (numeroPlaneta === 6) {
      console.log(`Tu peso en "Urano" sería de ${pesoTierra * 0.92} kilos`);
    } else if (numeroPlaneta === 7) {
      console.log(`Tu peso en "Neptuno" sería de ${pesoTierra * 1.19} kilos`);
    } else if (numeroPlaneta === 8) {
      console.log(`Tu peso en "Plutón" sería de ${pesoTierra * 0.06} kilos`);
    } else {
      console.log("Número de planeta no válido. Por favor elige un número entre 1 y 8.");
    }
  }
// calcularPesoEnPlaneta2(1, 70);


// ************** Tercera solucion **************

const planetas = {
    1: { nombre: "Mercurio", gravedad: 0.38 },
    2: { nombre: "Venus", gravedad: 0.91 },
    3: { nombre: "Marte", gravedad: 0.38 },
    4: { nombre: "Júpiter", gravedad: 2.34 },
    5: { nombre: "Saturno", gravedad: 1.06 },
    6: { nombre: "Urano", gravedad: 0.92 },
    7: { nombre: "Neptuno", gravedad: 1.19 },
    8: { nombre: "Plutón", gravedad: 0.06 },
  };

// console.log(planetas);

function calcularPesoEnPlaneta3(numeroPlaneta, pesoTierra) {

  const planeta = planetas[numeroPlaneta];

  if (planeta) {
    const pesoEnPlaneta = pesoTierra * planeta.gravedad;
    return `Tu peso en ${planeta.nombre} sería de ${pesoEnPlaneta.toFixed(2)} kilos.`;
  } else {
    return "Número de planeta no válido. Por favor elige un número entre 1 y 8.";
  }
}

// Ejemplo de uso
// console.log(calcularPesoEnPlaneta3(1, 70)); // Peso en Mercurio
// console.log(calcularPesoEnPlaneta3(8, 70)); // Peso en Marte
// console.log(calcularPesoEnPlaneta3(9, 70)); // Número de planeta no válido


// * Ejericio 2: Convertir grados a Celsius y Fahrenheit

// Crea una función que convierta temperaturas de grados Celsius a Fahrenheit y viceversa. 
// La función debe aceptar dos parámetros: 
// la temperatura y la unidad de conversión ("C" para Celsius a Fahrenheit y "F" para Fahrenheit a Celsius).

const UNIDAD_CELSIUS = "C";
const UNIDAD_FAHRENHEIT = "F";

function convertirTemperatura(temperatura, unidad) {
  unidad = unidad.toUpperCase(); // Convertir a mayúsculas para asegurar comparaciones insensibles a mayúsculas/minúsculas
  
  if (unidad === UNIDAD_CELSIUS) {
    return (temperatura * 9/5) + 32; // Celsius a Fahrenheit
  } else if (unidad === UNIDAD_FAHRENHEIT) {
    return (temperatura - 32) * 5/9; // Fahrenheit a Celsius
  } else {
    return "Unidad no válida. Use 'C' para Celsius o 'F' para Fahrenheit.";
  }
}

// Ejemplos de uso
console.log(convertirTemperatura(25, "c")); // 77
console.log(convertirTemperatura(77, "F")); // 25
console.log(convertirTemperatura(77, "C")); // 170.6
console.log(convertirTemperatura(25, "f")); // -3.888888888888889
console.log(convertirTemperatura(100, "X")); // Unidad no válida

