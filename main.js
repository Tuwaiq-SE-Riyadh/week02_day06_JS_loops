
function print(q){
let x=0;  y=1; z=null;
for (let i=1 ;i<=q ; i++){
    console.log(x);
    z = x + y;
    x = y;
    y = z;
}
}
function squares(n){
for (let i = 0; i <= n ; i++) {
   console.log("the squares  "+ i +" is " +i*i);
    
}}


function nested()
{
for (let i=1 ; i<=5; i++){
    for(let j=1;j<=5 ;j++){  
         console.log( +i+ " * "+j +" = "+j*i);
}

}

}

function add(q){
    let i=0;
    while(i<=q){
    if (i%2!=0){
console.log("the odd number is "+ i)

 }


i++
}

}

function pawer(q){
 if (q!=0){ 
while(q%2==1)
 {
   return false; 
   q=q/2;
}
return true ;   

}   
}