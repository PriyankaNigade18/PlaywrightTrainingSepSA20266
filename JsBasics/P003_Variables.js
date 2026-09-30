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