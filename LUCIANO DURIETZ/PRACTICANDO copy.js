var Usuario = function (nombre, apellido, edad){
  this.nombre = nombre,
  this.apellido = apellido,
  this.edad = edad
};

Usuario.prototype.saludar = function(nombre){
  return 'hola ' + this.nombre;
}

var lucian = new Usuario("Luciano", 'Durietz', 43);
var daniela = new Usuario('Daniela', 'Frattaruolo', 27);
var cesar = new Usuario('Cesar', 'Augusto', 36);
var fede = new Usuario('Federico', 'Gallera', '44');

var lista = [lucian, daniela, cesar, fede];

console.log(lucian);
console.log(daniela);
console.log(cesar);
console.log(fede);
console.log(lucian.saludar());