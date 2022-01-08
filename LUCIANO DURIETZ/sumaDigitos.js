function sumDigits(num){
    var resultado = 0;
    var digito = 0;
    var i = 0;
                                                            //ejemplo 999
    while (resultado === 0 || resultado > 9) {              //resultado:   
        i = num.toString().length;                          // i =          3                   2
        resultado = 0;
        while (num>0) {                                     //num =         999  99     9       27  7              
            if(num <10){                                    //              F    F      T       F   T
                resultado = resultado + num                 //                          27          9
                break                                       //                        Break       break  
            }                                               //
            digito = Math.floor(num/Math.pow(10,i-1))       //dig =         9    9              2
            num = num - digito * Math.pow(10,i-1)           //num =         99   9              7
            console.log(resultado + "+" + digito + " = " + [resultado+digito])  
            resultado = resultado + digito                  //resul =       9    18             2
            i--                                            // i =          2    1              1
        }num = resultado                                    // num =                    27          9
    }return num
}

  console.log(sumDigits(9876543219875432))