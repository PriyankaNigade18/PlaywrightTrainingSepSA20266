

//travelling left to right
//-ve index  -5 -4 -3 -2 -1  
    let arr=[10,20,30,40,50]
//index  +ve  0  1  2  3  4

console.log(arr[3]);//40
console.log(arr[-4]);//undefined

/*at():Returns the item located at the specified index.
@param index — The zero-based index of the desired code unit. 
A negative index will count back from the last item.
*/
console.log(arr.at(4));//50
console.log(arr.at(-4));//20
console.log(arr.at(-8));//undefined

console.log("----------------");

/*slice()
============
Returns a copy of a section of an array. 
For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, 
-2 refers to the second to last element of the array.

Syntax
===========
slice(startindex?,endindex?)
portion of slice will start from startindex upto endindex-1

? it is called optional parameters
*/

//-ve index  -9  -8 -7 -6 -5 -4 -3 -2 -1
let elements=[10,20,30,40,50,60,70,80,90];
//+ve index   0   1  2  3  4  5  6  7  8


console.log(elements);//[  10, 20, 30, 40, 50,  60, 70, 80, 90]

//extract the elements/some portion of array using slice()
let slice1=elements.slice(2,6);//here strat from 2 upto 6-1=5th 
console.log(slice1);//[30,40,50,60]

console.log(elements);//[  10, 20, 30, 40, 50,  60, 70, 80, 90]

//only start index
console.log(elements.slice(3));//[ 40, 50, 60, 70, 80, 90 ]

//only -ve valid index
console.log(elements.slice(-2));//[ 80, 90 ]

// extract 20 to 70
console.log(elements.slice(1,7));//[ 20, 30, 40, 50, 60, 70 ]

console.log(elements.slice(-8,-2));//[ 20, 30, 40, 50, 60, 70 ]

console.log(elements.slice(-8,7));//[ 20, 30, 40, 50, 60, 70 ]

//right to left travel is not possible
console.log(elements.slice(-2,-8));//[]

console.log(elements.slice(-9));//[10, 20, 30, 40, 50,  60, 70, 80, 90]

//first position
console.log(elements.slice(-9,-9));//[]

//in between
console.log(elements.slice(6,6));//[]




