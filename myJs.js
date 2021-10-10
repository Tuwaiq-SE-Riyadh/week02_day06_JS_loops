
// Fibonacci Sequence
function fibonacciSequence()
{
    let flag = true;
    let f = 0 ;
    let l = 1 ;
    let count = 2 ;
    console.log("Elements 1 :" +f)
    console.log("Elements 2 :" +l)
    for(let i = 1 ; flag ;i++)
    {
        if(i === f+l)
        {
            console.log("Elements "+ count + ":" + i)
            f = l ;
            l = i;
            count ++ ;
        }
        if(count > 20)
        {
            console.log("Finsh")
            break
        } 
    }
}
// squares Of Numbers
function squaresOfNumbers(number)
{
    for(let i = 1 ; i<= number ; i++)
    {
        // Normal sloution 
        // console.log(i*i)  

        // solve it using Math class
        console.log(Math.pow(i,2))
    }
}

// Multiplication table
function multiplicationTable()
{ let string_table = ""
    for(let i = 1 ; i<=5 ; i++)
    {
        for(let j = 1 ; j<=5 ; j++ )
        {
            string_table = string_table + " " + (i*j)
        }
        console.log(string_table)
        string_table = ""
    }
}

// odd numbers
function oddNumbers(number)
{   let i = 1
    while(i <= number)
    {
        if(i % 2 != 0)
        {
            console.log(i)
        }
        i++
    }
}

// power of 2
function powerOf2(number)
{   
    let flag = false
    let x = 1

    while(x<=1000)
    {
        if(Math.pow(x,2) == number)
        {
            flag = true
            console.log(flag)
            break;
        }
        x ++
    }
    if(flag == false)
    {
        console.log(flag)
    }
}