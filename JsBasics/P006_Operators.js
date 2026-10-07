

/*
Javascript Operators
========================

1.Arithemetic operators
---------------------------
+,-,*,/,%

2.Unary Operator(Perform operations on one operand)
---------------------------------------------------
++ (Increment), --(Decrement)

3.Relational Operators
----------------------------
>,>=,<,<=,!==,!===

equal to
=======================
1. loose equality ==
2. strict equality ===

4.Ternary Operator/ if-else
======================
condition?true:false;

5.Logical Operators
============================
1.&& (AND) 2.||(OR) 3. !(NOT)
*/



console.log("------Arithemetic Operators--------");
let num1=100,num2=20;
let result=num1+num2;
console.log(num1+num2);
console.log("Addition is: "+result);//Addition is: 120
console.log("Addition is: "+(num1+num2));//Addition is: 120
console.log("Subtraction is: "+(num1-num2));
console.log("Multiplication is: "+(num1*num2));
console.log("Division is: "+(num1/num2));
console.log("Modulus is: "+(num1%num2));


console.log("------Interview Questions--------");
console.log(90/0);//Infinity
console.log(-180/0);//-Infinity
console.log("Hello"/0);//NaN (Not a number)
console.log(undefined+100);//NaN
console.log(0/10);//0
console.log(0/0);//NaN
console.log(null/100);//0

//Number constructor
console.log(Number(true));//1
console.log(Number(false));//0
console.log(Number(null));//0
console.log(Number(undefined));//NaN

console.log("----Unary Operators------");
/*
++(Increment)
======================
1.PreIncrement  ++num1 : num1=num1+1
--------------------------------------------
Value will increment first and then use it

2.PostIncrement  num1++: num1=num1+1
--------------------------------------------
Value will use first and then increment

--(DeIncrement)
======================
1.PreDecrement  --num1 : num1=num1-1
--------------------------------------------
Value will decrement first and then use it

2.PostDecrement  num1--: num1=num1-1
--------------------------------------------
Value will use first and then Decrement

*/


//preincrement
let a=100;
console.log(a);//100
console.log(++a);//101
console.log(a);//101

//postincrement
let b=200;
console.log(b);//200
console.log(b++);//200
console.log(b);//201
console.log(b++);//201
console.log(b);//202

let i=199;
let j=i++;
console.log(i);//200
console.log(j);//199


let p=678;
let q=p++;
console.log(p);//679
console.log(q);//678


let r=78;
let s=++r;
console.log(r);//79
console.log(s);//79

let u=101;
let v=++u;
console.log(u);//102
console.log(v);//102

//decrements
//predecrement
let c=100;
console.log(c);//100
console.log(--c);//99
console.log(c);//99

//postdecrement
let d=300;
console.log(d);//300
console.log(d--);//300
console.log(d);//299


let e=90;
let f=e--;
console.log(e);//89
console.log(f);//90

let m=10;
let n=--m + m--;
console.log(m);//8
console.log(n);//18


let k=20;
let l=k-- + k++;
console.log(k);//20
console.log(l);//39

console.log("---Short hand operators------");
/*
 +=,-=,*=,/=,%= (x+=1:   x=x+1)
*/

let t=10;
console.log(t);//10
t+=20;//t=t+20;
console.log(t);//30

let y=100;
console.log(y);//100
y-=50;//y=y-50
console.log(y);//50

let h=10;
console.log(h);//10
h*=2;//h=h*2;
console.log(h);//20

let w=80;
console.log(w);//80
w/=4;//w=w/4;
console.log(w);//20

console.log("------Relational Operators-------");
/*
<,<=,>,>=,!==,!===

Equality
============
1.loose equality  ==
--------------------------
In loose equality value will coerced(type will convert first)and then value compare

2.Strict equality === (Recommended)
------------------------------------
here values as it is compare no conversion

Test Data
==============
c=99, u=v=102 r=s=79 e=89 f=90

*/

console.log("Greater than > : "+(u>f));//true
console.log("Greater than equal to >=: "+(u>=v));//true
console.log(f>=c);//false
console.log("Less than <: "+(r<e));//true
console.log("Less than equal to <=: "+(r<=s));//true
console.log(c<=e);//false
console.log("Not Equal to != : "+(u!=v));//false
console.log(r!=c);//true

/*
document on loose equality
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Equality
Equality
============
1.loose equality  ==
--------------------------
In loose equality value will coerced(type will convert first)and then value compare

2.Strict equality === (Recommended)
------------------------------------
here values as it is compare no conversion
*/


console.log("100" == 100);//true
console.log(undefined == null);//true


console.log("100" === 100);//false
console.log(undefined === null);//false


console.log("------Logical Operators-------");
/*
c1          c2          &&(AND)         ||(OR)      !c1(NOT)
true        true         true           true            false
true        false       false           true            false
false       true        false           true            true
false       false       false           false           true


Test Data
==============
c=99, u=v=102 r=s=79 e=89 f=90

*/

console.log("-----&&-----");
console.log((c>r) && (u===v));//true
console.log((f<c) && (c>=v));//false
console.log((r>=f) && (r===s));//false
console.log((e>=c) && (e===f));//false



console.log("-----||-----");
console.log((c>r) || (u===v));//true
console.log((f<c) || (c>=v));//true
console.log((r>=f) || (r===s));//true
console.log((e>=c) || (e===f));//false


console.log("----!(NOT)----");

console.log(u===v);//true
console.log(!(u===v));//false

/*scenario: testing title of application
-For string equality use === strict equality operator 
In Js we dont have any string equality method

*/
let actTitle="Google";
let expTitle="GoogleApp";
console.log("Equality: "+(actTitle === expTitle));//false
//title is not equality
console.log("Title is not equal:"+(!(actTitle===expTitle)));//true


console.log("-----Ternary Operator----");
/*

It is short hand operator for If-Else
Syntax
======
condition?true:false;

*/

//age validation scenario

let age=10;

(age>=18)?console.log("Adult"):console.log("minor");

/*
if(age>=18)
{
    console.log("Adult");
    
}else
{
    console.log("minor");
    
}*/











































































