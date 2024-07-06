// **********  6. Booleans   **********
let a = 'Demo'
let b = 23
let c = undefined

let verdadero;
verdadero = true
const verdad = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero);
console.log(verdadero, falso, v, f);
console.log(verdad);

console.log(typeof a, typeof b, typeof c);
console.log(typeof verdadero, typeof falso);

console.log(Boolean(0)); // false
console.log(Boolean(-0)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("")); // false

console.log(Boolean(-10)); // true
console.log(Boolean(10.01)); // true
console.log(Boolean([])); // true
console.log(Boolean(" ")); // true
console.log(Boolean(true)); // true
console.log(Boolean({})); // true

// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Boolean