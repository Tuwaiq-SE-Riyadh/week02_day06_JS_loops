// task 1

let num1=0;
let num2=1;
for (let i=1; i<6;i++){ 
    console.log( num1+" ")
    let sum1 = num1 + num2;
    num1 = num2;
    num2 = sum1;
}


// task 2

function squares(x){
    for(i=0; i<x; i++)
    console.log(i*i);
}


// task 3

for (let i=1; i<=5;i++){ 
    for (let j=1; j<10;j++){
        let s =j*i;
        console.log( j +"*"+ i +" =" + s)
    }
}


// task 4

function odd(x){
    let i=1;
    while(i<x){
        if(i%2!==0){  
            console.log(i);
        }
        i++;
    } 
}

// task 5

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

    


