/*
Loop
=============
for number of iterations we use loop

1.for loop
=============
-When number of iterations are fixed 
Scenarios:
    -calendar/date picker 30 or 31 /28/29
    -dropdown,list,menu with fixed number of options

2.While loop
==============
- Entry controlled loop
- When number of iterations are not fixed/unknown to you
Scenarios:
    -Pagination logic(Webtable automation)
    -pageload timeout logic

3.doWhile loop
================
- Exit controlled loop
- dowhile loop is applicable for one time iteration/execution 

scenario: one time execution

Working Array/Object
===========================
4.for...of loop
----------------------
- for of loop iterates over values and it is applicable for array/string


5.for...in loop
-----------------
- for in loop iterates over keys and index , it is applicable for object


*/

console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");
console.log("Hello");

console.log("-------------");

//print Hello 5times
for(let i=1;i<=5;i++)
{
    console.log("Hello All");
    
}

console.log("-------------");

//print 1 to 10 numbers

for(let i=1;i<=10;i++)
{
    console.log(i);
    
}

console.log("-------------");

//print 10 to 1 numbers

for(let i=10;i>=1;i--)
{
    console.log(i);
    
}

console.log("-------------");
//By default for loop condition is true
// for(;;)
// {
//     console.log("Welcome!");//code will run infinite
    
// }

/*
Factorial of number
5!=5*4*3*2*1=120

*/

let fact=1;
for(let i=5;i>=1;i--)
{
   fact=fact*i;
}

console.log("Factorial of 5!: "+fact);

console.log("------------");
//sum of 100 naturals numbers 
//1+2+3+4+......+100=5050

let sum=0;
for(let i=1;i<=100;i++)
{
    sum=sum+i;
}

console.log("Sum of 100 naturalnumbers: "+sum);

console.log("------loop+condition based----");

//print all even numbers upto 20

for(let i=1;i<=20;i++)
{
    if(i%2===0)
    {
        console.log("even number: "+i);
        
    }
}













