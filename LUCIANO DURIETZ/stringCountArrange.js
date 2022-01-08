//recibe una matriz bidimencional y la devuelve ordenada de mayor a menor
function ordenarMatriz(matriz){
  var temp = [];
  for (let i = 0; i < matriz.length; i++) {
    for (let e = i+1; e < matriz.length; e++) {
      if (matriz[i][1]<matriz[e][1]) {
        temp = matriz[i]
        matriz[i] = matriz[e]
        matriz[e] = temp
      } 
    }
  }
  return matriz
}


function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var resultado = [];
  for (const key in objeto) {
     resultado.push([key, objeto[key]])
    }
  return ordenarMatriz(resultado)
 }

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  var st = "";
  for (const leter of string) {
    st += leter.toUpperCase()
  }
  for (const leter of st) {
    if(obj[leter]) {
      obj[leter]++
    } else {
      obj[leter] = 1;
    }
  }  
  return deObjetoAmatriz(obj);
}
var str = "DanielaFrattaruolo";
console.log("El string " + str + " contiene " + numberOfCharacters(str));