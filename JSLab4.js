
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

function multiple(){

    for (let i = 0 ; i <= 5 ; i++){
        for (let j = 0 ; j <= 5 ; j++){
           console.log(i+" * "+ j +" = " + i*j);
    }
    }
}

function oddNum(number) {

    let i = 1;
    while (i <= number) {
        if (i % 2 == 1) {
            console.log(i)
        } 
        i++;  
    } 
}

function power(number) {
    
    let i=1;
    while(i<number){
    if( i && (i & (i - 1)) === 0){
        console.log(i)
    }
    i++;
    }
}
   
    


