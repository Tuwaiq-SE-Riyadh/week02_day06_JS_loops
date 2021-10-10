function Fibonacci(){
    let x = 0;
    let y = 1;

    for (let index = 0; index <= 20; index++) {

        console.log(x);
        let z = y + x;
        x = y;
        y = z;
    }
}

function squares(x) {

    for (let index = x ; index >= 1 ; index--) {
        console.log(index +" Squares : "+index * index);   
    }
    
}

function Multiplication() {
    for (let i = 1; i <=5; i++) {
        for (let j = 1; j <= 5; j++) {
            console.log(i + " * " + j + " = " + i*j);
            
        }
        
    }
    
}

function OddNubers(i) {

    while (i >= 0) {
        if( i % 2  != 0){
            console.log(i);
        }
        i--;
    }
    
}

function PowerTwo(n) {

    while(n%2==0){
        n=n/2;
    }
    if(n==1){
        return true;
    }else{
        console.log("otherwise");
    }
}

