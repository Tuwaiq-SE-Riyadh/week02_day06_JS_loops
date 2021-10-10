//Fibonacci sequence:
const number = 20
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}


//squares of numbers
function squaresOfNumbers(num){
    for(let i = 1;i<=num;i++){
        let x = i*i
        console.log(x)
    }
}
squaresOfNumbers(4)

//Multiplication table
for(let i = 1;i<=5;i++){
    for(let j = 1;j<=10;j++){
      let x = j * i 
    console.log(x)
    }
    console.log("------")
    
  }

//odd numbers
function oddNumber(x){
    let i = 0
    while (i<=x){
      if (i % 2 !== 0){
        console.log(i)
      }
      i++
    }
  }
  oddNumber(20)


//power of 2  
function powerOfTwo(num){
  if (num == 0){
    return console.log(false)
  }
  while(num !== 1){
    num = num / 2 
    if(num % 2 != 0 && num != 1){
      return console.log(false)
      
    }
  }
  return console.log(true)
}

powerOfTwo(16)  