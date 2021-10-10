// For loop
// Fibonacci sequence: 

// * Write a program that prints the first 20 elements of Fibonacci sequence: 

// * Fibonacci sequence is a series of numbers in which each number ( Fibonacci number ) 
// is the sum of the two preceding numbers, and the first two wlements are 0 and 1

// * it starts like 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ..

function Fibonacci(stopNum) {
    let pre1=0, pre2=1 
    console.log("Fibonacci sequence: ")
    console.log(pre1)

    for (let i=0 ;i <= stopNum; i++) {
        let ser =pre1+pre2
        pre1=pre2
        pre2=ser
        console.log(pre1);

    }

}
Fibonacci(10)


// ### squares of numbers
// * Write a function that takes a number as a parameter, 
//then use a for loop to print the squares of numbers from 1 to the given number. 
function squares(num) {
    for (let i = 1; i <= num; i++) {
        console.log("Square number of "+i+" is: "+i*i);
    }
}
squares(5)

// ## Nested for loop
// ### Multiplication table
// - Write a nested loop that print the multiplication table for number from 1-5

function multiplication() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log("multiplication of "+i+" and "+j+" is: "+i*j);
            
        }
        
    }
    
}
multiplication()

// ## While loop
// ### odd numbers
// * Write a function that takes a number as a parameter, then use a while to loop print odd numbers from 1 to the given number. 

function Odd(num) {
    console.log("Odd number: ");
    let i = 0;
    while(i<=num){
        if(i%2!=0){
            console.log(i)
        }
        i++
    }
}

Odd(10)

// ### power of 2
// * Write a function that takes a number as a parameter, then prints true if the number is a power of 2, and 0 otherwise.

function powOfTwo(n) {
    console.log("Power of 2:")
    if (n == 0)
        return false;
    if (n == 1)
        return false;
    while (n != 1) {
        if (n % 2 != 0){
            return false;
        }
        n = n / 2;
    }
    return true
}
console.log(powOfTwo(32));