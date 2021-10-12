
function fibonacci(){
    let a=0,b=1,c=0
    console.log(a +", \n"  +b+", ")
    
    for(i=0;i<20;i++){
        c=a+b
        console.log(c+", ")
         a=b
         b=c

    }
    
}

function expon(n){

    for(i=1;i<=n;i++){

        console.log(i*i +" ")
    }

}

function multitable(){


    for(i=1; i<=5;i++){

        for(j=1;j<=5;j++){

            console.log(i+" * "+j+" = "+ i*j )
        }
    }
}

function oddNum(n){
 let i=0
    while(i<=n){

        if(i%2 != 0){
        console.log(i)
        }
        i++
    }
}

function pwrOf2(n){
  
    while(n%2===0){ 
    n=n/2
    if(n===1){  
      console.log("True")
      break
    }
      
    }
     if(n!==1) {
        console.log("0")
        }
}


