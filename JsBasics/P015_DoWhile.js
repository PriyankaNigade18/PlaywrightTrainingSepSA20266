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

Syntax:
=============
Initialization;
do
{
statement;
Inc/dec
}while(conditions);


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
do{
    console.log("Hello");
    i++;    
}while(i<=5);

console.log("--------------");

//exit controlled loop

let j=1;
do{
    console.log(j*j);
    j++;
    
}while(j>=5);//fail
