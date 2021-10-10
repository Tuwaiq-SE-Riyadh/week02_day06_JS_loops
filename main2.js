

// For loop 
// Q1

console.log("i am here")
function Fibonacci(){
    let array=[0,1];
    
    for (let i = 1; i < 9; ++i){
        array[i+1]=(array[i]+array[i-1])
       

    }
     for (let i = 0; i < 9; i++){
         console.log(array[i])
 
      }
    }
    

    //   Q2
    console.log("i am here 2")
function square(a){
    
    for(let i=0;i<=a;i++){
        console.log(i*i)
    }

}

// Q3
function Multiplication(){

    for(let i=1;i<=5;i++){
        console.log("for "+i)
        for (let j=1;j<=5;j++){
            console.log(" "+i+" * "+j+" = "+i*j)
        }
    }

}



//While loop 
// Q1
function odd(m){
    i=0;
    while (i <= m) {

        if (i%2!==0){
            console.log(i)
        }
        ++i
      }
    }
    // Q2
    function ispowerof2(n){
    
            if(n==0) { 
                console.log("No")
             }
            while(n != 1)
            {
                n = n/2;
                if(n%2 != 0 && n != 1){ 
                    console.log("No")
                    break;
                }
                console.log("Yes")
            }
            

    }
    




