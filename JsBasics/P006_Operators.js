

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











































