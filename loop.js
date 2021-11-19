function fbic(){
     
        let x = 0;
    let y = 1;
    let z;
    for (let i = 0; i < 20; i++) {
      console.log(x);
      z = x + y;
      x = y;
      y = z; 
    }
    }
         



function Square(num) {

    for (let i = 1; i <= num; i++) {
    console.log(i * i);
    }
}




function multplytable(num) {

for(let i = 1 ; i <=10 ;i++){


        console.log(num + "*" + i+"="+num*i);
    }
}

function odd(num){
let i=1;
while(i<=num){
    if(i%2 !=0){
        console.log(i)

    }i++;
}
}


function oddNumbers(j) {
let i = 1;
    while (i <= j) {
        if(i % 2 != 0){
            console.log(i);
            
        }i++;}}



function powerof2(j){

    while(j != 1){

        if(j % 2 != 0){
            if(j != 1)
            { console.log("0"); return;}}
            j/=2;
        }
    console.log("true");
    }