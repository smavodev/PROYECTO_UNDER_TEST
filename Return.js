// * ------------------------ USANDO RETURN  ---------------------------

let pep = function (usuario) {
  if (usuario.activo) {
    // si existe la propieda dentro del objeto
    return "Activo";
  } else {
    return "Inactivo";
  }
};

const valor = {
  nombre: "Sergio",
  activo: true,
};
console.log(valor);

const verificar = pep(valor); 
console.log(verificar);

console.log(`Hola soy ${valor.nombre}: Mi cuenta esta ${verificar}`);


// * ------------------------ SIN RETURN  ---------------------------

function pep2(usuario_demo, verificar) {
  console.log(`Hola soy ${usuario_demo.nombre}: Mi cuenta esta ${verificar}`);
}

const usuario_demo = {
  nombre: "Yenny",
  activo: true,
};

pep2(usuario_demo, "Modificado");


let variable = 'Sergio'

console.log(variable.length)