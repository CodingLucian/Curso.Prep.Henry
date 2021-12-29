function orderArray(unordered){
    var orderedArray = []
    var n = unordered[0]
    var lastN = 0
    for (let i = 0; i < unordered.length; i++) {
        for (const element of unordered) {
            if (element<n&&element>lastN) {
                n = element
            }
        }
        orderedArray.push(n)
        lastN = n
        i++
        n = unorderedArray[i]
        }
    return orderedArray
}
var unorderedArray = [9,6,3,1,8,10,14,77,20]
console.log(orderArray(unorderedArray))