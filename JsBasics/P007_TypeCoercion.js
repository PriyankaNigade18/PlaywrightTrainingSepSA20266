/*

Type Casting
==============
- One type of data we can convert into other type

1.Implicit casting/Type Coercion
======================================
-Js Engine will take care of this type of conversion
-It is automatic conversion
-It is also known as Type coercion


2.Explicit Casting
===========================
- It is manual conversion
- In Js we use constructors
String()
Number()
Boolean()

Note
===
For type conversion data type must be compatible


Boolean Conversion
=======================
1.truthy value
---------------------
- Any true value in boolean context  we called truthy
Example:any nonzero value,non empty string

2.falsy value
----------------------
- Any false value in boolean context we called falsy value
- In Js 5 values comes under falsy
Example: 0,""(empty string),null,undefined,NaN



*/

console.log("-------String conversion--------");
/*
When an expression combine string,number and boolean values with + operator
then number and boolean values are automatically convert into string and 
string conticatinates these value

number/boolean ------>string
*/

let a="hello"+100+true;//here 100 and true both coerced into string
console.log(a);//hello100true
console.log(typeof a);//string


let b=100+true+"Hello";//here 100+true=101-->101+"hello"= 101 coerced into string
console.log(b);//101Hello
console.log(typeof b);//string

let c=200+25+"hi"+100;
console.log(c);//225hi100
console.log(typeof c);//string

let d="200"+10;//here 10 is coerced into string
console.log(d);//20010
console.log(typeof d);//string

console.log(100+false+"50"+false);//10050false


console.log(("Name"+50)+(10+30));//Name5040










