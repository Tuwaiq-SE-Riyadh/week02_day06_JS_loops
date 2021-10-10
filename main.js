//week02_day06_JS_loops



//Fibonacci sequence: 
function fibonacci() {
    let num1 = 0
    let num2 = 1
    let nextTerm
    console.log("Fibonacci Series:")
    for (let i = 0; i <= 20; i++) {
        console.log(num1)
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;

    }
}



//squares of numbers
function sequaresNum(num) {
    for (let i = 1; i <= num; i++) {
        let x = i * i
        console.log(x)
    }
}

//Nested for loop

//Multiplication table
function multiplication() {
    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= 10; j++) {
            console.log(j + "*" + i + "=" + j * i)
        }
    }
}


//While loop

//odd numbers
function oddNum(num) {
    while (num > 1) {
        if (num % 2 === 1) {
            console.log(num);
            num--;
        } else {
            --num;
        }

    }
}

//power of 2
function power2(num) {
    while (num !== 1) {
        if (num % 2 == 0) {

            num = num / 2
        } else {
            console.log("False")
            break
        }
        console.log("True")
    }

}