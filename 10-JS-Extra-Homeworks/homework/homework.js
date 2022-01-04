// No cambies los nombres de las funciones.

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
 
   var resultado = Object.entries(objeto);
   return resultado; 
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var obj = {};
  for (const leter of string) {
    if (obj.hasOwnProperty(leter)) {
      obj[leter] = obj[leter] + 1
    }else {  
      obj[leter] = 1
     }
  }
  return obj;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var low = "";
  var string = "";
  for (const element of s) {
    if(element===element.toUpperCase()){
      string = string + element;
  } else {
    low = low + element;
  }
  }
  string = string + low;
  return string;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a 
  //derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var fraseInvertida = "";
  var palabraInvertida = "";
  var i = 1;
  for (const letra of str) {
    if (i === str.length) {
      palabraInvertida = letra + palabraInvertida;
      fraseInvertida = fraseInvertida + palabraInvertida
    }
    else if (letra !== " ") {
      
      palabraInvertida = letra + palabraInvertida;
    }
    else {
      fraseInvertida = fraseInvertida + palabraInvertida + " ";
      palabraInvertida = "";
    }i++
  }
  return fraseInvertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numInvertido ="";
  var numStr = numero.toString()
  for (const n of numStr) {
    numInvertido = n + numInvertido   
  }
  if (numInvertido === numStr) {
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var str = "";
  for (const letra of cadena) {
    if (letra != "a" && letra != "b" && letra != "c") {
      str = str + letra;  
      console.log(str);   
    }
  }return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var palabraTemp = "";
  for (let i = 0; i < arr.length; i++) {
    for (let e = i+1; e > i && e < arr.length; e++){
      if (arr[i].length>arr[e].length) {
        palabraTemp = arr[i];
        arr[i] = arr[e];
        arr[e] = palabraTemp;        
      }
    }
  }
  return arr;
}


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
        }resultado.push(arreglo1[i])
      }  
    }
  }
  return resultado;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

