
// AMBITO DE BLOQUE 
// La variable funcion, metodo etc son llamados o son usado

// AMBITO GLOBAL
let mascota_gato = 'Vigotes';
console.log(mascota_gato);

mascota_gato = 100
console.log(mascota_gato);

// AMBITO X
{
    let mascota_gato = 'Garfield'
    console.log(mascota_gato);
}

console.log(mascota_gato);

