var numeros = [4,2,5,7,9,77,6]
var M = 0
function mayor(array){
  
  for (const i of array) {
    if(i>M){
      M=i
    }
  }
  return M
}
console.log(mayor(numeros))

function mayorX(array,X){
  let w = 0
  for (const i of array) {
    if(i>w&&i<X){
      w = i
    }
  }
  M = w
  return w
}
for (const iterator of numeros) {
  
console.log(mayorX(numeros,M))
}