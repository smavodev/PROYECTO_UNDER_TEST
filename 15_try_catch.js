
// * ** TRY CATCH
// ^^ El bloque try-catch es una estructura en JavaScript que se utiliza para manejar errores de manera controlada. 
// ^^ Esta estructura te permite intentar ejecutar un bloque de código y, 
// ^^ si ocurre un error, capturarlo y manejarlo sin detener la ejecución del programa

function procesarDatos(datos) {
    try {
      if (typeof datos !== "string") {
        throw new Error("Los datos deben ser una cadena de texto");
      }
  
      let resultado = datos.toUpperCase();
      console.log("Datos procesados:", resultado);
    } catch (error) {
      console.error("Se produjo un error: No no es un numero, por favor ingresar el tipo de dato correcto");
    }
  }
  
  procesarDatos(123);
  
  function procesarDatos1(datos) {
    if (typeof datos !== "string") {
      throw new Error("Los datos deben ser una cadena de texto");
    }
  
    let resultado = datos.toUpperCase();
    console.log("Datos procesados:", resultado);
  }
  
  procesarDatos1(123);