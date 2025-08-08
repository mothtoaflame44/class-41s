
function sum(number1,number2)
{
    
    let result = number1 + number2;

    return result;
}

let sum1 = sum(23,56);
console.log(sum1);
sum(12,45);

function sub (number1, number2)
{
    let substraction = number1 - number2 ;
    return substraction;

}

console.log(sum(90,67));

console.log(sub(45,34));

//arrray find the positive number

function numberType()
{
    let number = [ 34, 56, 78, 90, 23, 12, 24, 10, 11];

    for(let i = 0; i<=8; i++){
      if( number[i]> 0){
        console.log(number[i]+" The number is positive");

      }  

      else{
        console.log(number[i]+" The number is negative");
      }

    }
}

numberType();

function digit()
{
  let numbersa =[ 34, 56, 78, 90, 23, 12, 24, 10, 11, -22];
   numbersa.forEach(function(element) { 
    if (element >0 )
    {
      console.log(element +" the digit is positive")
    }

    else if (element< 0)
    { 
      console.log(element +" the digit is negaitive")

    }

      else  
    { 
      console.log(element +" the digit is zero")

    }

  
   });

}

digit();



