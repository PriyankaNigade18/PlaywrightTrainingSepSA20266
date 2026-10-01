/*
Function
------------------
defines group of statment which performs some functionality

Javascript support 2 types of function 
-----------------------------------
1.Function declaration
2.Function Expression
    2.1. Anonymous function(function without name)
    2.2 Arrow function(short hand function)
*/

console.log("----Function Declaration------");

//function definition
function test1()
{
    console.log("Function declaration is calling.....");
    
}

//call
test1();
console.log(typeof test1);//function


console.log("----Anonymous function------");

const test2=function()
                {
                    console.log("This is Anonymous function is calling....");
                    
                }

console.log(typeof test2);//function

//call
test2();


console.log("----Arrow function------");

let test3=()=>{console.log("This is arrow function is calling....")}
    
console.log(typeof test3);//function

//call
test3();
