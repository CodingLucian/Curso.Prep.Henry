function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var resultado = [];
  for (let i = 0; i < arreglo1.length; i++) {
    for (let e = 0; e < arreglo2.length; e++) {
      if (arreglo1[i] === arreglo2[e]) {
        //revisar si ya esta en resultado[]
        for (let o = 0; o < resultado.length; o++) {
          if (arreglo1[i] === resultado[o]) {
            resultado.splice(o,1);
          }      
        }resultado.unshift(arreglo1[i])
      }  
    }
  }
  return resultado;
}
var arr1 =[1, 2, 3];
var arr2 =[1, 5, 8, 3];
console.log(buscoInterseccion(arr1, arr2))