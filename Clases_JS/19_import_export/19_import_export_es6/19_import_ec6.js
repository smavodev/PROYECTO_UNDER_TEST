// * ES6 --> EL ESTANDAR ACTUAL 
// * Javascript Modulos
// ^^ https://nodejs.org/api/esm.html#modules-ecmascript-modules
// ^^ https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Modules

// ** Módulos en ECMAScript (ES6/ES2015)
// Con la introducción de ECMAScript 6 (también conocido como ES2015), JavaScript introdujo un 
// sistema de módulos estándar para organizar y reutilizar código de manera modular. 
// Este sistema utiliza las palabras clave import y export para manejar la importación y 
// exportación de funciones, variables, clases y más entre diferentes archivos JavaScript.

// * Configuración Básica para Módulos ES6 en Node.js
// Para usar módulos ES6 en Node.js, necesitas configurar tu entorno adecuadamente. 
// Aquí están los pasos esenciales:

// Package.json
// {
//     "type": "module",  // * Es EC6
//     "scripts": {
//         "start": "node nombre_del_archivo.js"
//     }
// }

//   "type": "module": Esta línea le dice a Node.js que debe interpretar los archivos JavaScript como módulos ES6.
//   "scripts": Aquí defines comandos que puedes ejecutar con npm, como el script "start" que ejecuta tu aplicación con Node.js.

// * Uso de import y export en tus archivos
// Una vez configurado package.json, puedes usar import y export en tus archivos JavaScript para organizar y compartir tu código de manera modular.


import { sumar, restar } from './es6_example.js';

const resultado3 = sumar(10,48)
console.log(resultado3)


const resultado4 = restar(50,15)
console.log(resultado4)


// * Consideraciones Adicionales
// Compatibilidad: Asegúrate de que la versión de Node.js que estás utilizando sea compatible con módulos ES6. 
// Las versiones más recientes de Node.js (a partir de la versión 14) tienen un buen soporte para módulos ES6.

// Extensiones de Archivo: Puedes usar la extensión .mjs para archivos que usan módulos ES6 si prefieres 
// no configurar "type": "module" en tu package.json.

// Depuración: Si encuentras problemas al trabajar con módulos ES6, como errores de importación o exportación, 
// asegúrate de revisar la configuración de tu entorno y las rutas de tus archivos.