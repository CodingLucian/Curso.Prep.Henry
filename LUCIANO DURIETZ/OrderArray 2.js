function sortArray(array){
    var temp = 0
    for (let i = 0; i < array.length; i++) {
        for (let e = i+1; e > i && e<array.length; e++) {
            if(array[i]>array[e]){
                temp = array[i]
                array[i] = array[e]
                array[e] = temp
            }
            
        }
        
    }
    for (let s = 0; s < array.length; s++) {
        console.log(array[s])
    }
    return array
    
}
var unorderedArray = [9,6,3,1,8,10,14,77,20]
console.log(sortArray(unorderedArray))
