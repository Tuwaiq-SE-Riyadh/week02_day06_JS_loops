 
// Fibonacci sequence
 function fibonacci() {
    let num1 = 0;
    let num2 = 1;
    let result = 0;
    console.log(0 + ",")
    console.log(1 + ",")
    for (let i = 0; i <= 20; i++) 
    {
        result = (num1) + (num2);
        num1 = num2;
        num2 = result;
        console.log(result + ",")
    }
}

// Squares of numbers
 function squares(num) {
     let result = 0;
     for(let i = 1; i <= num; i++)
     {
        result = i * i;
        console.log("square of " + i + " = " + result);
     }
 }

// Nasted for loop
// Multiplication table
function multiTable() {
    for(let i = 1; i <= 5; i++)
    {
        for(let j = 1 ; j <= 5 ; j++)
        {
            console.log(i + " x " + j + " = " + (i * j))
        }
    }
}

// While loop to print odd numbers
function oddNum(num) 
{
    let i = 1;
    while (i <= num) {
        if (i % 2 === 1) 
        {
            console.log(i)
        }
        i++;
    }    
}

// Power of 2
function power(num) {
    let result = false;
    for(let i = 0; i < num; i++)
    {
        if(num === (i * i))
        {
            result = true;
        }
    }
    console.log(result)
}