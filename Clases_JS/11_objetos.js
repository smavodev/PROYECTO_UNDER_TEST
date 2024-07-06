// **********     Curso JavaScript: 10. Objetos {}  **********
let aa = new Number(3)
console.log(aa)

let a = new String("Hola");
console.log(a)

const b = {};
console.log(b);

const c = new Object();
console.log(c);

// ^Dentro de un objeto a las variables se le van a llamar atributos/propiedades
// ^y a las funciones se les llama métodos */



const empleado = {
  nombre: "JonY",
  apellido: "GATOS",
  edad: 35,
  pasatiempos: ["Correr", "Hacer ejercicio", "Dar clases"],
  soltero: false,
  contacto: {
    email: "sergio@gmail.com",
    twitter: "@sergio",
    movil: "5215512345678",
  },
  saludar: function () {
    console.log(`Hola :)`);
  },
  decirMiNombre: function () {
    console.log(
      `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años y me puedes seguir como ${this.contacto.twitter} en twitter.`
    );
  },
};

// console.log(empleado);
// console.log(empleado["nombre"]);
// console.log(empleado["apellido"]);
console.log(empleado.nombre);
console.log(empleado.apellido);
console.log(empleado.edad);
console.log(empleado.soltero);
console.log(empleado.pasatiempos);
console.log(empleado.pasatiempos[1]);
console.log(empleado.contacto);
console.log(empleado.contacto.twitter);
empleado.saludar();
empleado.decirMiNombre();

// console.log(Object.keys(empleado));
// console.log(Object.values(empleado));
// console.log(empleado.hasOwnProperty("nombre"));
// console.log(empleado.hasOwnProperty("nacimiento"));
