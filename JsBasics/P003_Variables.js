/*
Variable
---------------
- variable is name of storage location where we can store data

In Js we use 3 keyword to declare variable
---------------------------------------------
var(older/not recommented), let(Mutable data), const(Immutable data)


Var(Older)
-----------------
-Scope: Global scope + function Scope
-var is fully hoisted
-Redeclaration is allowed
-Reassignment is allowed

Modern syntax
=====================
let
-------------
-Scope: Global +Block scope
-For mutable data use let
-let is hoisted bute let initialize in temporal dead zone so if you try to call 
it before initialization then you will get reference error
-Redeclaration is not allowed
-Reassignment is allowed

const
--------------
-Scope: Global +Block scope
-For Immutable data use const
-const is hoisted bute let initialize in temporal dead zone so if you try to call 
it before initialization then you will get reference error
-Redeclaration is not allowed
-Reassignment is not allowed

Syntax
===========
let variableName=value;

Example:
--------
let id=101;
let fname="Jay";
*/


//redeclaration  & reassignment allowed for var type

//redeclaration means declaring same name variable again
var id=101;
var id=201;
var id=301;

console.log(id);//301
console.log(typeof id);//number

//reassignment means one time declare and change/assign new values

id=401;
console.log(id);//401
id="MacBook";
console.log(id);
console.log(typeof id);

//let: Redeclaration is not allowed 
//let id=1010;
//console.log(id);//SyntaxError: Identifier 'id' has already been declared

//Cannot redeclare block-scoped variable 'toolName'.
//let toolName="Selenium";
let toolName="Playwright";
console.log(toolName);

//reassignment is allowed for let
toolName="Postman";
console.log(toolName);

console.log("------------");
//const: redeclaration and reassignment not allowed
//Cannot redeclare block-scoped variable 'vendorName'.
const vendorName="Microsoft";
//const vendorName="Microsoft";
//reassignment
//vendorName="Google";//TypeError: Assignment to constant variable.

console.log("------------------------------------------");
/*Global scope: When data is declared inside Js file and outside of any function/block is global scope data
- Global scope data we can access everywhere withing file

//1.Var :Global + function   2.let :Global+block   3.const: Global +block

block: ifblock, while/for loop
{
    console.log("Hello");
    
}
*/

var fname="Hiteshi";
let location="Us";
const emailId="hiteshi@gmail.com";

console.log(fname);
console.log(location);
console.log(emailId);

//global data inside function:yes

//function: we used to define to perform certain operation

function getData()
{
    console.log("---Global data calling from function----");
    
 console.log(fname);
console.log(location);
console.log(emailId);
}

// function call
getData();

console.log("---------Function scope-----------------");
/*
-Any variable you can declare within function you can access it inside the function
-function scope means local variable
-for var type variable function scope is applicable

*/


function display()
{
    //local variables
    var automationType="Functional+API";
    const browser="Chrome";
    let browserVersion=150;

    console.log(automationType);
    console.log(browser);
    console.log(browserVersion);
    
}

//call
display();

console.log("----calling outside-----");

    //console.log(automationType);//ReferenceError: automationType is not defined
    //console.log(browser);//ReferenceError: browser is not defined
    //console.log(browserVersion);ReferenceError: browserVersion is not defined

    console.log("-------Block scope-------");
//Examples: if block, forloop,whileloop
//Block scope
    {
        console.log("Hello");
        
    }
    
    //let and const are applicable for block scope
if(true)//here condition is true so this block will run
{
    let product="Playwright";
    const vendor="Microsoft";

    // console.log(product);
    // console.log(vendor);
    //console.log("ProductName: "+product+"\nVendor Name is: "+vendor);
    console.log(product+"\n"+vendor);//\n for next line
   

}

//console.log(product);//ReferenceError: product is not defined
//console.log(vendor);//ReferenceError: vendor is not defined

console.log("-----------------------");

//var type Global +function
var a=10;
console.log(a);//10
function test1()
{ var a=20;
    console.log(a);//20
    if(true)
    {
        var a=30;
        console.log(a);//30
        
    }
    console.log(a);//30
}
test1();

console.log("--------------");
//let: global +block
let b=10;
console.log(b);//10
function test2()
{ 
    var a=100;
    let b=20;
    console.log(b);//20
    if(true)
    {
        let b=30;
        console.log(b);//30
        
    }
   // let b=40;//Error:Cannot redeclare block-scoped variable 'b'.
    console.log(b);//20
}


test2();

console.log(a);//10
//console.log(x);//ReferenceError: x is not defined

console.log("--------------");
//const: global +block
const c=10;
console.log(c);//10
function test3()
{     
    const c=20;
    console.log(c);//20
    if(true)
    {
        const c=30;
        console.log(c);//30
        
    }
    //const c=200;//Cannot redeclare block-scoped variable 'c'
    console.log(c);//20
}
test3();



