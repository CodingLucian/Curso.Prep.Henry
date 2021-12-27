function numeroMayor(numeros) {
  let mayor = 0;
  for (const N of numeros) {
    if (N>=mayor) {
      mayor = N;
    }
  }
  return mayor;
}
let NUMEROS= [4,7,1,21,43,8,0];
 
console.log(numeroMayor(NUMEROS));