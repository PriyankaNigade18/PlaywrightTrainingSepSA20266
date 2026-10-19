/*
Array
======
- Array is dynamic data structure which store collection of data/elements
- As an array is nonprimitive and dynamic means size of array can vary
- Single variable we used to store collection of data
- Array is  0 index based

Syntax:
==========
let arrayVariable=[val1,val2,val3,...n];

Ways of Declaration
========================
1.Array Literal
2.Array constructor
3.Array.of()......added in ES6

Types of Array
================
1.Single dimension array(1D)
2.Multi dimension array(2D)

Iterations ways
====================
1.Simple for loop
2.for...of loop(Array)
3.for...in loop(Object)

*/

console.log("--------1.Array Literal----------");

let areas=["Mumbai","Delhi","Pune"];
console.log(areas);
console.log(areas.length);

console.log("--------2.Array Constructor---------");
/*
Constructor
===============
- It is special method used to initialize object
- In Js class level object we create using new keyword 
and during object creation we called constructor

Array Constructor
======================
Syntax:
==========
let arrayVariableName=new Array(val1,val2....n);


When Array constructor declared with one element/value if it is number type
then that element will be considered as length of array
*/

let data=new Array(10,20,30,40,50);
console.log(data);//[ 10, 20, 30, 40, 50 ]
console.log(data.length);//5
console.log(data[3]);//40
console.log(data[9]);//undefined


console.log("-----------");

let marks=new Array(5);
console.log(marks);//[ <5 empty items> ]
console.log(marks.length);//5

console.log(marks[0]);//undefined
//how to fill empty array with value
marks[0]=100;
marks[1]=20.56;
marks[2]=89;
marks[3]=90;
marks[4]=66;
marks[5]=77;

console.log(marks);//[ 100, 20.56, 89, 90, 66, 77 ]
console.log(marks.length);//6


console.log("----------------");

let loc=new Array("Pune");
console.log(loc);//[Pune]
console.log(loc.length);//1

//RangeError: Invalid array length
// let numericData=new Array(4.5);
// console.log(numericData);
// console.log(numericData.length);


console.log("------3.Array.of()-----");
//Es6
let id=Array.of(101,102,103,104,105);
//index           0  1  2    3   4
console.log(id);
console.log(id.length);
console.log(id[4]);//105
console.log(id[9]);//undefined


let sid=Array.of(10);
console.log(sid);//[10]
console.log(sid.length);//1
console.log(sid[0]);//10

console.log(sid[4]);//undefined


console.log("---------------");

let a1=new Array(0);
console.log(a1);//[]
console.log(a1.length);//0

//RangeError: Invalid array length
// let b1=new Array(-5);
// console.log(b1);
// console.log(b1.length);






















