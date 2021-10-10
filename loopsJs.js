function Fibonacci(){
let j =0
let l =0
let z =1
for(let i=0; i<20 ;i++){

   

    if(j === 0){
        console.log(j)
        j = j+1 
        
    }
    else if (j === 1) {
        console.log(j)
        j = j+1 
        

    }
    else{
        let r = l+z
        console.log(r)
        l = z 
        z = r


    }

    
}

}

function squares(num){

    for(let i=1; i<= num; i++){
        console.log(i*i);
    }

}

function Multiplication(){

for(let i=1; i<6 ; i++){

for(let j=1; j<6 ; j++){

    console.log(i +"*"+ j +"=" + (i*j))
}

}
}

function odd(num){

    let i =1
    while(i <= num ){

        if (i%2 !== 0){
            console.log(i)
        }

        i++
    }
}

function power(num){
let i=2
    while (i< num){

        if (i*2 === num){
            i = i*2

            console.log("true")
            break
            
        }
        i = i*2



    }
if (i !== num){
    console.log(0)
}
    

}