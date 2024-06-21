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

// case 1 = CAJERO 
// case 2 = VENDEDOR 
// case 3 = GERENTE 

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
