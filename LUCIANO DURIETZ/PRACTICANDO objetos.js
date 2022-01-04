function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for (const leter of string) {
    if (obj.hasOwnProperty(leter)) {                       //obj.hasOwnProperty(leter)
      obj[leter] = obj[leter] + 1
    }else {  
      obj[leter] = 1
     }
  }
  return obj;
}
var objeto = numberOfCharacters("aaabbc")
console.log("El objero es: "); console.log(objeto)
var claves = Object.keys(objeto)                            //Object.keys(objeto)
console.log("Las claves son: ")
console.log(claves)
for (const element of claves) {
  console.log([element] + objeto[element])
}
var valores = Object.values(objeto)                        //Object.values(objeto)
console.log("Los Valores son : ")
console.log(valores)