function randomArray(n) {  // recibe N y devuelve un arreglo con N numeros aleatoreos del 0 al 100.
  var i = 0;
  var arr = []
  while (i<n) {
    arr[i] = Math.floor(Math.random()*100)
    i++
  }
  console.log("Random array: " + arr)
  return arr
}

function randomArrayBetween(tot, min, max) {  // recibe tot(cantidad de elementos deseados en el random array numeroco resultante)
  var i = 0;                                  // min y max son los limites para los numeros dentro del array
  var arr = []
  while (i<tot) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min
    i++
  }
  console.log("Random array: " + arr)
  return arr
}

function numerosSumadosDaN(numeros, n) {             //recibe un arreglo y un numero N, si encuentra 2 numeros  
  for (let i = 0; i < numeros.length; i++) {         //que sumados son iguales al N devuelve verdadero sino falso
    for (let e = i+1; e < numeros.length; e++) {
      if (numeros[i]+numeros[e] === n) {
        return console.log("VERDADERO   " + numeros[i] + " + " + numeros[e] + " suman " + n)
      }
    }   
  }
  return console.log("FALSO el numero " + n + " no es la suma de 2 elementos del arreglo");
}

// numerosSumadosDaN(randomArray(20), 50)
// numerosSumadosDaN(randomArrayBetween(10, 0, 20), 16)


