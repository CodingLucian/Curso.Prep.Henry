// Ejercicio 1
// Escribir un algoritmo que imprima los numeros del 1 al 100, con la condicion que si el 
// numero a imprimir es multiplo de 3, imprima el string 'Fizz', si el numero es multiplo de 
// 5 imprima: 'Buzz', y si es multiplo de ambos imprima: 'FizzBuzz'

// ejemplo de output: // 1 // 2 // Fizz // 4 // Buzz // Fizz // ... // 14 // FizzBuzz // 16
var div3 = 0;
var div5 = 0;
function fizzBuzz() {
  for (let i = 0; i < 101; i++) {
    div3 = i%3;
    div5 = i%5;
    if (div3 === 0 && div5 === 0) {
      console.log("FizzBuzz");
    }else if (div3 === 0) {
      console.log("Fizz")
    }else if (div5 === 0) {
      console.log("Buzz")
    }else{
      console.log(i)
    } 
  }
}

// Ejercicio 2
// Escribir un algoritmo que encuentre el máximo y el minímo número dentro de una lista de números 
// enteros (desordenados).

// Output:

// [1, 3, 0, -1, 12, 3] Output: min: -1 max: 12

function maxMin(numeros) {
  var max = numeros[0];
  var min = numeros[0];
  for (const n of numeros) {
    if (max < n) {
      max = n;
    }
    if (min > n) {
      min = n;
    }
  }
  console.log(numeros)
  console.log("max: " + max)
  console.log("min: " + min)  
}

// Ejercicio 3
// Escribir un algoritmo que, dada una lista de números ordenados un número N, te devuelva VERDADERO si 
// alguna combinación de dos números cualesquiera suman N, y devuelva FALSO si ninguna combinación de 
// dos números sumados da como resultado el número N.

// Por Ejemplo:

// En este caso, la lista es [1,2,3,4] y el segundo número (N) es 10:

// [1 ,2, 3, 4] y 10. Queres saber si alguna combinación de esos cuatro números de la lista suman 10. en 
// Este caso es FALSO, porque ninguna combinación de dos números suma diez.
// [1, 2, 3, 4] y 5 . Es VERDADERO, porque 2 + 3 es igual a cinco.
// [1, 2, 3, 4] y 8 . Es FALSO.

// [2,5,7,10,11,15,20] y 13  // verdadero     2+11 suman 13
// [2,5,7,10,11,15,20] y 14  // falso

function numerosSumadosDaN(numeros, n) {
  for (let i = 0; i < numeros.length; i++) {
    for (let e = i+1; e < numeros.length; e++) {
      if (numeros[i]+numeros[e] === n) {
        return console.log("Verdadero    " + numeros[i] + " + " + numeros[e] + " suman " + n)
      }
    }   
  }
  return console.log("Falso");
}