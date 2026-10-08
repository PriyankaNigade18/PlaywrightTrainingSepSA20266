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

console.log("-------Number conversion--------");
/*
string/boolean====>number

When an expression combines string,boolean and number values with arithemetic operators
(-,/,*,%) then string and boolean values aytomatically convertinto number type 
- number conversion is only possible for string when string data/value is compatible
*/

let x="Hello"-100;
console.log(x);//NaN
console.log(typeof x);//number

let y="100"/10;//here "100" coerced into number 100/10=10
console.log(y);//10
console.log(typeof y);//number

//expression have boolean data
console.log(true+50);//true coerced into number 1+50=51
console.log(false*100-50);//false coerced into number 0*100=0-50=-50

let e=100-"50"/true;//here "50" and true will coerced into number
console.log(e);//50
console.log(typeof e);//number

let f=90-"30"+true;
console.log(f);//61
console.log(typeof f);//number

console.log("------Explicit Casting-----");

console.log("------Number()--------");//number constructor

//string--->number
let s1="1234";
console.log(s1);//1234
console.log(typeof s1);//string
let stringToNumber=Number(s1);
console.log(stringToNumber);//1234
console.log(typeof stringToNumber);//number

console.log(Number(false));//0
console.log(Number(true));//1




console.log("------String()-------");//string constructor

let num=500;
console.log(num);//500
console.log(typeof num);//number

//number to string
let numberToString=String(num);
console.log(numberToString);//500
console.log(typeof numberToString);//string

/*
Scenario: validate bill amount
test for amount should be less than 10000
*/

let bill="Your total amount is 6000";
//index  0       1     2     3    4
//extract "amount 6000" from bill

let result=bill.split(" ");
console.log(result);
let data=result[4];//6000
console.log(data);
console.log(typeof data);

//string to number:Number()
let amount=Number(data);
console.log(amount);
console.log(typeof amount);//number

//validation: ifelse
if(amount<10000)
{
    console.log("Valid amount...Test Pass!");
    
}else{
    console.log("Invalid amount...Test Fail!");
    
}

//number to string
let code=411047
let postalCode=String(code);//postalcode: ""
console.log(typeof postalCode);//string

console.log("-----Boolean Conversion------");
/*Boolean Conversion
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

console.log(Boolean("Jay"));//truthy
console.log(Boolean(190));//truthy
console.log(Boolean(-80));//truthy
console.log(Boolean(78.55));//truthy
console.log(Boolean('T'));//truthy
console.log(Boolean(" "));//truthy
console.log(Boolean(""));//falsy
console.log(Boolean(0));//falsy
console.log(Boolean(NaN));//falsy
console.log(Boolean(undefined));//falsy
console.log(Boolean(null));//falsy

console.log(Boolean(" "));//truthy
console.log(Boolean("@"));//truthy














 












