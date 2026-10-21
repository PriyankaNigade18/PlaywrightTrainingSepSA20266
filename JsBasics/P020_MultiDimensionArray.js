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

console.log("------1D array-----");

let id=[10,20,30,40];
console.log(id);
console.log(id.length);


console.log("------2D array-----");

let userCredentials=[
    ["Admin","admin123"],
    ["Kiran","test123"],
    ["Sneha","test123"],
    ["Kim","test123"]
]

console.log(userCredentials);

console.log("Number of rows: "+userCredentials.length);//4
//row--->cell--->value
console.log("Number of Columns: "+userCredentials[0].length);//2

//single entry
console.log(userCredentials[2][0]);//sneha
console.log(userCredentials[2]);//[ 'Sneha', 'test123' ]

console.log(userCredentials[0][1]);//admin123

//existing row and wrong column number
console.log(userCredentials[2][4]);//undefined

//for wrong row wanted to get column data
//console.log(userCredentials[5][8]);//TypeError: Cannot read properties of undefined (reading '8')

console.log("----Array Iteration----");

for(let row=0;row<userCredentials.length;row++)
{
    let rowWiseData="";
    for(let cell=0;cell<userCredentials[row].length;cell++)
    {
        rowWiseData=rowWiseData+userCredentials[row][cell]+"  ";
    }
console.log(rowWiseData);

}









