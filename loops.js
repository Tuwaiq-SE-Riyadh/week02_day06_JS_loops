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


function power2(num){
    // for(let i=1;i<=num;i++){
    //     console.log(Math.Sqrt(i,2 ));
    // }
    let num2 = num
    while (num2 > 2){
        
        num2 = num2/2
    }
    if (num2 === 2){
        console.log("The number "+num+" is power of 2");
    }
    else{
        console.log("The number "+num+" is NOT power of 2");
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