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

//print Hello statement 5 times
let i=1;
while(i<=5)
{
    console.log("Hello");
    i++;
}

//Sum of the digits logic
//123=6 digit count is not fixed

let num=10234,rem=0,sum=0;

//floor():Returns the greatest integer less than or equal to its numeric argument.
while(num>0)
{
    rem=num%10;
    num=Math.floor(num/10);
    sum=sum+rem;
}

console.log("Sum of digits: "+sum);


console.log("---------------");

let num1=457356,rm=0,rev=0,temp=num1;

while(num1>0)
{
    rm=num1%10;
    num1=Math.floor(num1/10);
    rev=rev*10+rm;

}

console.log(`Reverse number of ${temp} is: ${rev} `);






//how to reverse any number

//how to check number is palindrome

//jow to check number is armstrong number











