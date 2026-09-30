/*
Variable
---------------
- variable is name of storage location where we can store data

In Js we use 3 keyword to declare variable
---------------------------------------------
var(older/not recommented), let(Mutable data), const(Immutable data)

Syntax
===========
let variableName=value;

Example:
--------
let id=101;
let fname="Jay";

DataTypes
=============
- Datatypes defined what type of data we can store into variable
- As Js is dynamically typed language so we dont need any data type while
declaration of any variable

Types of Datatypes
--------------------
1.Primitive data types
2.NonPrimitive data types


1.Primitive data types(7)
---------------------------
1.number
2.string
3.boolean
4.undefined
5.null

Added in ES6
6.bigInt(NA in automation)
7.symbol(NA in automation)

2.Nonprimitive
---------------------
In Js all objects are dynamic objects and 
object,array


typeof operator
=====================
- To check what type of data we store into variable we have typeof operator
Example
--------------
typeof function
typeof variable
typeof object
*/

console.log("------number type-----");

/*
Any number which is positive integer/negative integer/floating point 
number are number type in Js

Size: 8byte(64bits)
1byte=8bits
*/

let num1=90;
console.log("Number 1 is: "+num1);
console.log(typeof num1);//number


let num2=-90;
console.log("Number 2 is: ",num2);
console.log(typeof num2);//number

let num3=89.678;
console.log("Number 3 is: ",num3);
console.log(typeof num3);//number


// num1="abcd";
// console.log(num1);

//bigInt: at the time of declaration use n as suffix for your number

//Rang/max number- Number() number constructor
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

let num4=9007199254740991;
console.log(typeof num4);//number

let num5=-9007199254740991n;
console.log(typeof num5);//bigint

console.log("--------boolean type----------");
/*
boolean: true (1)/false(0)
*/

let isActive=true;
console.log("Is participants are active?: "+isActive);
console.log(typeof isActive);//boolean

let isEmployed=true;
console.log(typeof isEmployed);//boolean

let isStatus=false;
console.log("Current status is: "+isStatus);
console.log(typeof isStatus);//boolean

console.log("-----string type------");
/*
-String is collection of characters
-String is primitive types
-String is Dynamic object.

Note: In Js we dont have any char type
Everything like single char or collection of characters are string only

Ways to declare string
-------------------------
1.single quoat 'Hello'
2.double quoat "Hello"
3.template string(added after ES6) : back tick `Hello`

*/


let fname='Priyanka';
console.log("First name is: "+fname);
console.log(typeof fname);//string

let emailId="piyu1818@gmail.com";
console.log("Email id is: "+emailId);
console.log(typeof emailId);//string

let location=`India`;
console.log("Location is: "+location);
console.log(typeof location);//string
let chracter='P';
console.log(typeof chracter);//string

/*template string
------------------------
To read value from external variable in template string
use syntax
${variableName}

*/

let profile=`My name is ${fname}, having over 15 years of experience in SDET,
 I am ISTQB certified, I completed my masters in Computer.`

console.log(profile);

console.log("-------");

let currentYear=2026;

 let payload=`{
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": ${currentYear},
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}`

console.log(payload);

console.log("--------undefined type---------");
/*
Undefined data types
-----------------------
If any variable declare without initialization then value and type of that
variable is undefined
*/


let age;
console.log("Age is: "+age);//undefined
console.log(typeof age);//undefined

console.log("--------null type---------");
/*
null means unknown value/ intentionally we can write some data as null

What is typeof null?
------------------
- type of null will be always object
- legacy bug in Js language

*/

let studentAddress=null;
console.log("Address is: "+studentAddress);//null
console.log(typeof studentAddress);//object

console.log("---------Symbol type-------");
/*
- It is used to create unique keys in Js Object

In Js Object is collection of keys and values.
Ways
----------
1.Object literal
2.Class level Object

3.Constructor function
4.Prototype based object(Object.create())
*/

console.log("-------NonPrimitive data types----");
//Object literal
let user={};
console.log(user);//{} empty object
console.log(typeof user);//object

//Array: dynamic data structure and collection of values we can store with one variable
let userId=[101,102,103,104];
console.log(userId);//[ 101, 102, 103, 104 ]
console.log(typeof userId);//object

//object with key and value
let person={
  id:1010,
  pname:"Sarang"
}

console.log(person);//{ id: 1010, fname: 'Sarang' }
console.log(typeof person);//object

/*
To Access properties form Object
-----------------------------------
1. dot notation
objectName.key

2. bracket notation
objectName["key"]//string key

*/

console.log(person.id);//1010
console.log(person[`pname`]);//Sarang
console.log(person['id']);//1010

//Add new property
person.address="Mumbai";
console.log(person);

//Modify any property
person.id=2020;
console.log(person);

//delete any property
delete person.address;
console.log(person);


console.log("--------------------------");
//symbol
let profile1=Symbol("QA");
console.log(profile1);//Symbol(QA)
console.log(typeof profile1);//symbol


let employee={
  empName:"Sameer",
  salary:50000
}
console.log(employee);

//Application1(HR) wants to assign some id
employee.id=1010;

//Application2(Payroll) wants to assign some id
employee.id=2020;

console.log(employee);

//Symbol type will solve this issue : symbol type will create unique key for same object

let hrId=Symbol("id");//key1
let payrollId=Symbol("id");//key2


//lets use it for object
employee[hrId]=111;
employee[payrollId]=222;

console.log(employee);
//symbol type data ifyou wanted to extract form variable then use: objectName[variablename]
console.log(employee[hrId]);
console.log(employee[payrollId]);
console.log(employee.hrId);



































