//////////////////////////////////////
//    console.log(/^(\d{4}|\d{6})$/.test(pin))
//////////////////////////////////////
//    \d{4}  ---> this.length === 4
//    |  -----> ||
//    $/ ------> this === numero entero?

 ///////////////////////////////////////////////////
  ///////////////////////////////////////////////////
   ///////////////////////////////////////////////////

   var moveZeros = function (arr) {
    var count = 0;
    var resultado = []
    for(i=0; i < arr.length; i++){
      if (arr[i] === 0){
        count++
      }else {
        resultado.push(arr[i])
      }
    }
    for (let i = 0; i < count; i++) {
        resultado.push(0)  
    }
    return resultado
  }

  var array = [0,0,1,0,2,3,4,5,0,0,0,6,7,8,9,0,0,9,0]
  console.log(moveZeros(array))

  //////////////////////////////////////////////////////////////
  /////////////////////////////


function squareDigits(num){
    var numStr = num.toString();
    var resultado = 0;
    var a = 0;
    for (let i = numStr.length; i > 0 ; i--) {
      a = Math.floor(num/Math.pow(10,i-1))
      if (a<4) {
        resultado = resultado + (Math.pow(a,2)*Math.pow(10,i-1))
      }else {
        resultado = resultado * 10 + Math.pow(a,2)*Math.pow(10,i-1)
      }
      console.log(resultado)
      num -= Math.floor(num/Math.pow(10,i-1))*Math.pow(10,i-1)
    }
    return resultado;
  }
  var n =1234567890
  
  console.log(squareDigits(n))


  ///////////////////////////////////////////////////

  function highAndLow(numbers){
  
    var n = 0;
    var shortStr = "";
    var e = 0;
    while (numbers[e] !== " " && e !== numbers.length) {
      shortStr = shortStr + numbers[e]
      e++
    }
    var min = parseInt(shortStr)
    var max = parseInt(shortStr)
    shortStr = ""
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== " ") {
        shortStr = shortStr + numbers[i]
      }
      if(numbers[i] === " "|| i === numbers.length-1) {
        n = parseInt(shortStr)
        shortStr = ""; 
        if(n<min){
          min = n;
        }
        if(n>max){
          max = n;
        }
      }
    }
    return max + " "  + min;
  }
  var numStr = "-2"
  console.log(highAndLow(numStr))

///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
///////////////////////////////******************************/////////////////////////////////
// ejercicio 01
// Task
// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.






////////////////////////////////
// Task
// I've written five function equal1,equal2,equal3,equal4,equal5, defines six global variables v1 v2 v3 v4 v5 v6, every function has two local variables a,b, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example to complete the following functions.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.




///////////////////////////

// Task
// misson 1: I've create three function, and defined some global variables, please select some variables that can make up the name of the function, and return them(Please note the uppercase and lowercase letters are different).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// misson 2: After misson 1 finished. you should click "Attempt" to see my three questions, and write the answer in function answer1, answer2,answer3

// If everything is right, click "Submit" again to submit your code pass this kata.







////////////////////////////



// Task
// I've written five function, each function receives a parameter: arr(an array), you should code something with arr.

//     1. getLength(arr)    should return length of arr
//     2. getFirst(arr)     should return the first element of arr
//     3. getLast(arr)      should return the last element of arr
//     4. pushElement(arr)  should push an element to arr, and then return arr
//     5. popElement(arr)   should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.


/////////////////////////////////



// Task
// Give you a function animal, accept 1 parameter:obj like this:

// {name:"dog",legs:4,color:"white"}
// and return a string like this:

// "This white dog has 4 legs."
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.



/////////////////////////////////


// Task
// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.




////////////////////////////////////


// Task:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

// number	price (cents)
// n < 5	100
// n >= 5 and n < 10	95
// n >= 10	90
// You can use if..else or ternary operator to complete it.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.




////////////////////////////


// Task
// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// +---------------+-------------+
// |    month      |    days     |
// +---------------+-------------+
// |1,3,5,7,8,10,12|     31      |
// +---------------+-------------+
// |4,6,9,11       |     30      |
// +---------------+-------------+
// |2              |     28      |  (Do not consider the leap year)
// +---------------+-------------+
// little tips: Use default for most of the cases can reduce your work.

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.






//////////////////////////


// Task
// Coding in function padIt, function accept 2 parameters:

// str, it's a string representing the string to pad, we need pad some "*" at leftside or rightside of str
// n, it's a number, how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.





/////////////////////////////////////////



// Task
// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

// If you forgot how to push an element to array, please refer to lesson 4.




///////////////////////////////////


// Task
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

// If you forgot how to push an element to array, please refer to lesson 4.




/////////////////////////////////////


// Task
// Coding in function giveMeFive, function accept 1 parameter:obj, it's an object.

// You need to the traverse the obj, if the length of the object key equals to 5, then push the key value to the array (you need to define the array by yourself, this time I won't help you). Additionally push the value to the array as well, if the length of the value is equal to 5.

// Return the five after works finished.

// You should use for..in in your code, otherwise, your solution may not pass this kata. Don't learn bad habits from those lazy guys ;-)




///////////////////////////////////////

// Task
// Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

// To judge the number n. If n is one of the above five constants, return one of these string:

// "Input number is Number.MAX_VALUE"
// "Input number is Number.MIN_VALUE"
// "Input number is Number.NaN"
// "Input number is Number.NEGATIVE_INFINITY"
// "Input number is Number.POSITIVE_INFINITY"
// Other values should return "Input number is xxx". xxx means this number.

// For example:

// whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
// whatNumberIsIt(100) should return "Input number is 100"




//////////////////////////////////////////////////////


// Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red 
// green and blue. the value range is 0-255.
// Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a 
// web color code and return it.
// the color code should starting with "#". and then use 2 characters per color.
// for example:
// colorOf(255,0,0) should return "#ff0000"
// colorOf(0,111,0) should return "#006f00"
// colorOf(1, 2 ,3) should return "#010203"

function colorOf(r, g, b){
    return "#" + r.toString(16) + g.toString(16) + b.toString(16)
    }
    console.log(colorOf(255,55,87))


///////////////////////////////////////


// Task
// Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

// The first mission: let all elements in the array keep two decimal places(No need to convert number n).

// The second mission: Traversal arr, count the number of the element which smaller than n and return it.

// for example:

// howManySmaller([1.234,1.235,1.228],1.24) should return 2
// howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
// howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2

///////////////////////////////


// Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
// The first mission: Traversing arr, find the shortest string length.
// The second mission: Traversing arr again, intercept all strings to the shortest 
// string length(Start from index0). you can use one of slice() substring() or substr() do it. 
// return the result after finished the work.
// for example:
// cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
// cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
// cutIt(["codewars","javascript","java"]) should return ["code","java","java"]

var cutIt = function(array){
    var largo = array[0].length
    for (const word of array) {
        if (largo>word.length) {
            largo = word.length            
        }
    }console.log('largo = ' + largo)
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].slice(0,largo)
    }
    return array
}
var arr = ['lu', 'dani', 'fede', 'gi', 'rita', 'valeria']
console.log(cutIt(arr))

//////////////////////////////////////
// Task
// Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.
// Please return the gap between the first position of c and the last position of c.
// If there are a lot of c in the str, should return a positive integer; If there is only one c in str, 
// should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
// for example:
// firstToLast("ababc","a") should return 2(2-0)
// firstToLast("ababc","c") should return 0(4-4)
// firstToLast("ababc","d") should return -1

function firstToLast(str,c){
    var first = 0;
    var resultado = "("
    var count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === c && count === 0) {
        resultado = "(" + i 
        first = i;          
        count++;
      }else if (str[i] === c && count === 1) {
        resultado = resultado + "-" + i + ")"
        count++;
      }else if (str[i] === c && count === 2) {
          return 1;
      }
    }
    if (count === 1) {
        return 0 + resultado + first + ")"        
    }else{
        return 0 + resultado
    }
  }




//////////////////////////////////////////////////////////


// Task
// Implement a function which accepts 2 arguments: string and separator.

// The expected algorithm: split the string into words by spaces, split each word into separate characters and join them back with the specified separator, join all the resulting "words" back into a sentence with spaces.

// For example:

// splitAndMerge("My name is John", " ")  ==  "M y n a m e i s J o h n"
// splitAndMerge("My name is John", "-")  ==  "M-y n-a-m-e i-s J-o-h-n"
// splitAndMerge("Hello World!", ".")     ==  "H.e.l.l.o W.o.r.l.d.!"
// splitAndMerge("Hello World!", ",")     ==  "H,e,l,l,o W,o,r,l,d,!"





/////////////////////////////////////////////////////////////////


// Task
// Coding in function alienLanguage, function accept 1 parameter:str. str is a sentence.

// We translate the sentence into an alien language according to the following rules:

// Each word in the sentence is separated by spaces. The last letter of each word in the sentence turns to lowercase, and the other letters are capitalized. Looks very strange? Because this is the form of alien language ;-)

// for example:

// alienLanguage("My name is John") should return "My NAMe Is JOHn"
// alienLanguage("this is an example") should return "THIs Is An EXAMPLe"
// alienLanguage("Hello World") should return "HELLo WORLd"
// A small hint: The first conversion of the entire string will make the code easier






//////////////////////////////////////////////////////////


// Task
// Coding in function topSecret, function accept 1 parameter:file. file is an encrypted string.

// Encryption using the right shift 3. Your job is to decrypt the file and read the contents of the file, and then answer my three questions. If the answer is correct, you will pass the test. Note: the decryption should be left shift; Shift is only for uppercase and lowercase letters, other characters will remain the same; The shift mode is a cyclic shift, for example:

// character "A" after decryption should be "X" instead of ">"
// character "B" after decryption should be "Y" instead of "?"
// character "C" after decryption should be "Z" instead of "@"
// character "a" after decryption should be "x" instead of "^"
// character "b" after decryption should be "y" instead of "_"
// character "c" after decryption should be "z" instead of "`"
// Additional hints: Fixed testcase only test the correctness of the decryption code. The answer to the three question will appear only after clicking on "Submit".





//////////////////////////////////////////////////////////////