console.log(forLoop());
console.log("-------------------");
console.log(SquaresOfNumbers(4));
console.log("-------------------");
console.log(multiplicationTable());
console.log("-------------------");
console.log(oddNumbers(3));
console.log("-------------------");
console.log(powerof2(4));



function forLoop() {
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




function SquaresOfNumbers(j) {

    for (let i = 1; i <= j; i++) {
    console.log(i * i);
    }
}




function multiplicationTable() {
for(let i = 1 ; i <=5 ;i++){

    for(let j = 1 ; j <=5 ;j++){
        console.log(i+"*"+j+" ="+(i*j));
    }
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
        if(j != 1){ console.log("0"); return;}}
        j/=2;}
console.log("true");
}

