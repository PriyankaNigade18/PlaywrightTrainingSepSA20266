
/*

- Hoisting
==================
- It is behaiviour for Js language where variable and functions are hoisted
- hoisting means declaration process first before execution

-var type variable and function declaration is fully hoisted 
means before initialization we can call it

-let/const variables and function expression syntax(Anonymous function ,Arrow function)
these are part of Temporal dead zone, so before initialization if you try to call it you will
see reference error: Cannot access variable/method before initialization



*/

test1();//test1() is calling.....
//test2();//ReferenceError: Cannot access 'test2' before initialization
//test3();//ReferenceError: Cannot access 'test3' before initialization

//test4();//TypeError: test4 is not a function
/*
If you use modern synatx function with var type variable then you will get type error
*/

console.log(fname);//undefined
var fname="Kiran";
console.log(fname);//Kiran

console.log("------------------");

//let :Is hoisted but available into TDZ
//console.log(age);//ReferenceError: Cannot access 'age' before initialization
let age=20;
console.log(age);

console.log("------------------");

//const: Is hoisted but available into TDZ
//console.log(clgName);//ReferenceError: Cannot access 'clgName' before initialization
const clgName="AISSPMS";
console.log(clgName);

console.log("------Function hoisting--------");


//function declaration: fully hoisted means before initialization we call it
function test1()
{
console.log("test1() is calling.....");

}

//call
test1()

const test2=function()
                {
                    console.log("This is Anonymous function calling...");
                    
                }

//call
test2();


//arrow
let test3=()=>{
    console.log("This is Arrow function is calling.....");
    
}

//call
test3();


var test4=function()
            {
                console.log("This is var type anonyous fucntion");
                
            }

//call

test4();







