//Fibonacci sequence: 
function sum(){
let number1=0
let number2=1
let sum;

console.log('Fibonacci Series:');
console.log(number1); 
console.log(number2); 

sum= number1 + number2;


for (i=0;i<=20;i++) {

    
    console.log(sum);

    number1 = number2;
    number2 = sum;
    sum = number1 + number2;
    
}
}

//squares of numbers

function squares(number){
    for (i = 1; i < number ; i++) {
        let squ;
        squ=i*i

        console.log(squ);
      }
    }
    //Multiplication table
function mut(){
    let mul;
for (i = 1; i <= 5; i++) {
    for (j = 1; j <= 5; j++) {
       mul = i * j;
       
      console.log(mul);
       
     } 
  
}




// power of 2
function pow2(number){
    let output =1
    while(number != 0){
    output =0;
    break;
}
number = number/2;
}
if(output){
console.log('true')
} 
else{
    console.log('true')
}

}