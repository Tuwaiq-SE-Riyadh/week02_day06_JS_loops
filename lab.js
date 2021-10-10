// Fibonacci sequence:
let num1=0;
let num2=1;
for (let i=1; i<20;i++){ 
    console.log( num1+" ")
    let sum1 = num1 + num2;
    num1 = num2;
    num2 = sum1;
}
// squares of numbers
let n=0;
function squares(num){
    for (let i=1; i<=num;i++){ 
        let c=i*i;
       console.log( c)
}
}
// Multiplication table

for (let i=1; i<=5;i++){ 
    for (let j=1; j<10;j++){
        let s =j*i;
        console.log( j +"*"+ i +" =" + s)
    }
}
// odd numbers

function odd(x){
    let i=1;
    while(i<x){
        if(i%2!==0){  
            console.log(i);
        }
        i++;
    } 
}
// power of 2
function power(x){
    let y=true;
    while(x!=1){
        if(x%2==1){
        y=false;
        break;
        }
        x/=2;
    }
    console.log(y);
}