function fibo(cantidad){
    var array = [0,1]
    if (cantidad<=1) {
        array.pop()
        return array
    }
    for (let i = 0; i < cantidad-2; i++) {
        array.push(array[i]+array[i+1])
    }
   // console.log(array)
    return array[cantidad-1]
}
console.log(fibo(9))