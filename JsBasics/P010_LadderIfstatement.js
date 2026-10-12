/*
LadderIf statement will help to execute
multiple conditions

*/

//find largest number and equality among 3 numbers

let num1=1000,num2=1000,num3=1000;

if(num1>num2 && num1>num3)
{
    console.log(`${num1} is greater than ${num2} and ${num3}`);
    
}else if(num2>num1 && num2>num3)
{
    console.log(`${num2} is greater than ${num1} and ${num3}`);
    
}else if(num1===num2 && num2===num3)
{
    console.log("All numbers are equal!");
    
}else{
    console.log(`${num3} is greater than ${num1} and ${num2}`);
    
}

console.log("------------------------------------");

//Test Case should execute as per browsers(Chromium/webkit/firefox)
/*
String Comparison
===================
strict equality ===

String convertion
==================
UpperCase----> toUpperCase()
LowerCase----> toLowerCase()

console.log("Pankaj".toUpperCase());
console.log("PANKAJ".toLowerCase());
*/

let browserName="Firefox".toLowerCase();

if(browserName === "chromium")
{
    console.log("Test case is executing on Chromium!");
    
}else if(browserName === "webkit")
{
        console.log("Test case is executing on WebKit!");

}else if(browserName === "firefox")
{
        console.log("Test case is executing on Firefox!");

}else
{
    console.log("By default session should start with Chrome Browser....");
    
}




























