function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  var nuevoArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].charAt(0) === "a"){
      nuevoArray.push(array[i]);
    }
  }
  return nuevoArray
}
var arr = ["bba", "aca", "fir", "asus"];
console.log(filter(arr));