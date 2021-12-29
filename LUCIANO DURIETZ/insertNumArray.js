function insertNumInArray(array, number){
  nuevoArray = []
  var i=0
  for (const element of array) {
      if (element<number) {
      nuevoArray.push(element)
    }else if (element===number) {
      console.log("el numero " + element + " ya esta en el array")
    }else if(element>number&&i===0){
      nuevoArray.push(number)
      nuevoArray.push(element)
      i++
    }else{
      nuevoArray.push(element)
    }
  }
  return nuevoArray
}
var arr = [2,5,6,9,11]
console.log(insertNumInArray(arr, 8))