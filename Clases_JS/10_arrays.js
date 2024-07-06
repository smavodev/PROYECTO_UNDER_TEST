// **********  9. Arreglos (Arrays) []  **********

let frutas = ["Manzana", "Banana", "Pera", 1, 20];
// console.log(frutas)
// console.log(frutas.length)

const a = [];
const b = [1, true, "Hola", ["A", "B", "C", [1, 2, 3]]];

console.log(a); // []
console.log(b);
console.log(b.length);
console.log(b[2]);
console.log(b[0]);
console.log(b[3]);
console.log(b[3][2]);
console.log(b[3][3][0]);
console.log(b);

// const c = ["X", "Y", "Z", 9, 8, 7]
const c = Array.of("X", "Y", "Z", 9, 8, 7);
console.log(c);

const d = Array(5).fill(15);
console.log(d);

// const e = [];
const e = new Array();
console.log(e);

// const f = [1, 2, 3, true, false];
const f = new Array(1, 2, 3, true, false);
console.log(f);

// const colores = array[]
const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");
colores.push(true);
colores.push(1);
console.log(colores);

colores.forEach(function (objeto, posicion) {
  console.log(`<li id="${posicion}">${objeto}</li>`);
});

colores.pop();
console.log(colores);

colores.forEach(function (objeto, posicion) {
  console.log(`<li id="${posicion}">${objeto}</li>`);
});


// EJEMPLO DE LA SECCION 14 CICLOS
const numeros_enteros = [10,'11',12,13,14,15,16,17,18,'19',20];
numeros_enteros.forEach(function (objeto, posicion) {
  console.log(`${posicion} - ${objeto}`)
});
