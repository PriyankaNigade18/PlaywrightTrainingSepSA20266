/*
Array Dynamic data structure
-------------------------------

insert/delete/sort/retrive/copy
*/


let color=["Red","Blue","Yellow"];
console.log(color);//[ 'Red', 'Blue', 'Yellow' ]
console.log(color.length);//3

//insertion: push() and unshift()
//push():Appends new elements to the end of an array, and returns the new length of the array.
let totalColor=color.push("Orange");
console.log(totalColor);//4
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Orange' ]

color.push("Pink","Black");
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Orange', 'Pink', 'Black' ]

//unshift():Inserts new elements at the start of an array, and returns the new length of the array.
let totalColors=color.unshift("White");
console.log(totalColors);//length of array 7
console.log(color);//[  'White',  'Red',  'Blue',   'Yellow',  'Orange', 'Pink',  'Black']


//removing elements pop() and shift()

//pop:Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeEle1=color.pop();
console.log(removeEle1);//Black
console.log(color);//[ 'White', 'Red', 'Blue', 'Yellow', 'Orange', 'Pink' ]

let fruits=[];
console.log(fruits);
let ele=fruits.pop();
console.log(ele);//undefined
console.log(fruits);

//shift():Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let removeEle2=color.shift();
console.log(removeEle2);//White
console.log(color);//[ 'Red', 'Blue', 'Yellow', 'Orange', 'Pink' ]

//pop():number|undefined
let id=[true,false,true,"abcd"];
let ele2=id.pop();
console.log(ele2);
console.log(typeof ele2);
console.log(id);


console.log("-----------");
//join():Adds all the elements of an array into a string, separated by the specified separator string.

let words=["Hello","All","Welcome","to","learn","Js"];
console.log(words);//[ 'Hello', 'All', 'Welcome', 'to', 'learn', 'Js' ]

let sentence=words.join(" ");
console.log(sentence);//Hello All Welcome to learn Js
console.log("------------");

let sid=[101,102,103,104];
console.log(sid);//[ 101, 102, 103, 104 ]
let result=sid.join("-");

console.log(result);//101-102-103-104

console.log("-------");
let data=["Mayank",100,"Delhi",89.77];
console.log(data);
let res=data.join("-->");
console.log(res);
console.log(typeof res);//string

console.log("---------------");

//reverse():Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.

console.log(sid);//[ 101, 102, 103, 104 ]
console.log(sid.reverse());//[ 104, 103, 102, 101 ]

console.log(color);
console.log(color.reverse());

//concat():Combines two or more arrays. This method returns a new array without modifying any existing arrays.
let arr1=[10,20,30];
let arr2=["abcd",100,true,"xyz"];
let arr3=[111,222,333,444,555]
let newArray=arr1.concat(arr2,arr3);
console.log(newArray);
console.log(newArray.length);


//copy array---> spreadoperator(...)
/*
Spread Operator
==================
- using spread operator(...) we can store multiple elements into array
- with respect to function we can called it as rest opeartor/parameter (...)
rest operator used to pass multiple parameters to functions

How to copy array from one array to other array?
=========================================
Using spread operator we can copy array

Destructuring Array/JsObject(Playwright)
==========================================
It is a clean way to extract elements from array and store it into variable

*/


let first=[1,2,3,4,5];
console.log(first);

let second=[...first];
console.log(second);

let third=[10,20,30,...first];
console.log(third);

let forth=[100,200,...second,300,400];
console.log(forth);












