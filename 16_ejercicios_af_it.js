// * 1. Quiero que me ingresen una cadena de texto y que me indiquen el numero de caracteres que tiene la cadena "Hola mentis" =11
// * hagando en una funcion
function contarCaracteres(cadena = "") {
  if (!cadena) {
    console.warn("No haz ingresado una cadena de texto");
  } else {
    if (typeof cadena !== "string") {
      console.log(`El valor ${cadena} no es una cadena de texto`);
    } else {
      console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`);
    }
  }
}

// contarCaracteres();
// contarCaracteres(132)
// contarCaracteres("Aprendiendo Javascript")

// * 2. Necesito que me creen una funcion para calcular el area de un cuadrado
const calcularAreaCuadrado = function (lado = 0) {
  try {
    if (!lado) {
      console.warn("No has ingresado la longitud del lado");
    } else if (typeof lado !== "number") {
      console.error(`El valor "${lado}" ingresado no es un número`);
    } else if (lado <= 0) {
      console.error(
        `El valor "${lado}" ingresado no es válido para un lado de cuadrado`
      );
    } else {
      const area = lado * lado;
      console.log(`El área del cuadrado con lado ${lado} es: ${area}`);
    }
  } catch (error) {
    console.error("Error al calcular el área del cuadrado:", error.message);
  }
};

// calcularAreaCuadrado(); // No tiene longitud del lado
// calcularAreaCuadrado("cinco"); // No es un número
// calcularAreaCuadrado(-3); // Valor no válido para un lado de cuadrado
// calcularAreaCuadrado(5); // Calcula el área del cuadrado con lado 5

// * 3. Realizar una funcion que invierta las palabras de una cadena de texto.
// * En funcion expresada y arrow function

const cadenaInvertida2 = (cadena) => {
  if (!cadena) {
    console.log("No has ingresado una cadena");
  } else {
    if (typeof cadena !== "string") {
      console.log("No es una cadena");
    } else {
      console.log(cadena.split("").reverse().join(""));
    }
  }
};

cadenaInvertida2()
cadenaInvertida2([0])
cadenaInvertida2("Hola Lizzeth")

const cadenaInvertida1 = (cadena) => {
  !cadena
    ? console.log("No has ingresado una cadena")
    : typeof cadena !== "string"
    ? console.log("No es una cadena")
    : console.log(cadena.split("").reverse().join(""))
};

cadenaInvertida1()
cadenaInvertida1([0])
cadenaInvertida1("Hola Sergio")