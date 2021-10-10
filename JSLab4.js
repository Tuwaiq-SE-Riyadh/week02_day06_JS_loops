
function fibonacci(number) {

    let a = 0 , b = 1 , z;

    console.log("Fibonacci Series: ");
    for (let i = 1 ; i <= number ; i++){
        console.log(a);
        z=a+b;
        a = b;
        b = z;   
}}

function squares(n){

    let x;

    for (let i = 1 ; i <= n ; i++){
        
        console.log(i+" ^ "+ i +" = " + i*i);

    }
    
}

function multiple(num){

    let x;

    for (let i = 1 ; i <= num ; i++){
        
        console.log(i+" * "+ i +" = " + i*i);

    }
}

function oddNum(number) {

    for (let i = 1; i < number; i++) {
        if (i % 2 == 1) {
            console.log(i)
    
        }
        
    } 
}

function power(number) {
    
    return number && (number & (number - 1)) === 0;
}
   
    


