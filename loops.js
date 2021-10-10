function Fibonacci(){
   
    let x = 0
    let y = 1
    let z = 0

    for (let i=0;i<20;i++){
        // if (i===0){
        //     console.log(0);
        // }
            z = y+x
            
            console.log(y);
    
        x=y
        y=z
    }
}


function power(num){
    for(let i=1;i<=num;i++){
        console.log(Math.pow(i,2 ));
    }
}

function Nested(){
    for(let i=1;i<= 5;i++){
        for(let j=1;j<= 10;j++){
            console.log(i+" * "+j+ " = " +i*j );
        }
    }
}

function Odd(num2){
    let i =1
    while(i<num2){
        if (i%2 !==0){
            console.log(i);
        }
        i++
    }
}

function pow(num3){
    console.log(Math.pow(num3,2));
}