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

console.log("-------Array literal-------");
let arr=[];
console.log(arr);//[]
console.log(typeof arr);//object

//student ids scenario
let sid=[101,102,103,104,105];
//index  0    1   2   3   4
console.log(sid);//[ 101, 102, 103, 104, 105 ]
console.log("Total ids are: "+sid.length);//5

//to read single value from array
console.log(sid[3]);//104

//for wrong index : undefined
console.log(sid[8]);//undefined
console.log(sid[-1]);//undefined

console.log("----------");
//mixed type of array

let empData=["Sarang","Pune",'M',25,88789898,true];
//index       0         1     2   3   4        5

console.log(typeof empData);//object

console.log(empData);//[ 'Sarang', 'Pune', 'M', 25, 88789898, true ]
console.log(empData.length);//6
//single entry
console.log(empData[4]);//88789898

console.log(typeof empData[0]);//string

console.log("-----Iteration-------");

//simple for loop
for(let i=0;i<empData.length;i++)
{
    console.log(empData[i]);
    
}

console.log("----for...of loop----");
/*
For...of loop
==============
- It is applicable for array and string
- Iterates over values

*/

for(let i of empData)
{
    console.log(i);
    
}

console.log("----for...in loop----");
/*
For...in loop
==============
- It is applicable for Jsobject
- Iterates over keys or index

*/

for(let i in empData)
{
    console.log(i);//index
    
}

console.log("-------");

for(let i in empData)
{
    console.log("At index: "+i+" value is="+empData[i]);
    
}

console.log("--------------");

//Js Object key:value
let user={
    id:101,
    name:"Jay",
    profile:"Qa"
}

for(let i in user)
{
    console.log(i);//keys
    
}













