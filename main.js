

function Fibonacci(number){
let n1=0;
let n2=1;

console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
            
        }
}

function squares (number) {

for (let i =1 ; i<= number; i++){

    console.log(i*i)

}
    
}

function Nested  (number) {

    for(let i =1 ; i<=5 ; i++){
    for (let i=1 ; i<=10 ; i++){

    
        console.log (i*i)
    }   
}
}


function While (number) {
    let number = 0;
    while (true) {
        if (number%2 === 0) continue;
        console.log(number);
        number ++;
}
}


function power (n) {
let i =0;
while (i<=10) {
    if (n && (n & (n - 1)) === 0) {
        console.log("true")
   }
    i++
}
}







