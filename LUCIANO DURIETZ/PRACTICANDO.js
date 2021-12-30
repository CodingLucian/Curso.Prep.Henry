
  // Crea una Clase de ES6 o una función constructor llamada "Usuario"
  // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
  // En el `contructor`, define el usuario, el nombre, el email y la contraseña
  // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una 
  // string 'Hola, mi nombre es {{nombre}}'
  // {{nombre}} debe ser el nombre definido en cada instancia
  // Devuelve la clase
  // Tu código:
function Usuario(opciones) {
      this.usuario = opciones.usuario;
      this.nombre = opciones.nombre;
      this.email = opciones.email;
      this.password = opciones.password;
}

var Dani = {
    usuario: "nielada",
    nombre: "Daniela",
    email: "dani@fraty.com",
    password: "123456"
};
var Dani2 = new Usuario(Dani);

console.log(Dani2);


function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
    Constructor.prototype.saludar = function(){
      return "Hello World!";
    }
}
agregarMetodoPrototype(Usuario);

console.log(Dani2.saludar())

*/

