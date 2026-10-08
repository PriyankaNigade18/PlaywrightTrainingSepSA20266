/*
Simple If statment: validate single true condition
*/

//validate current year
console.log("Program started....");

let currentYear=2026;

if(currentYear===2026)
{
    console.log("Current year matched!");
    
}

console.log("Program ends....");

/*
BaseUrl validation
----------------------
-test for protocol(https)
-url should not be null
-url equality

String validation
=====================
1. For String equality use ===
2. For partial match use includes()
*/

//-test for protocol(https)
let actUrl="https://www.google.com";

if(actUrl.includes("https"))
{
    console.log("BaseUrl is valid....");
    
}

//equality
let expUrl="https://www.google.com";
if(actUrl === expUrl)
{
    console.log("BaseUrl is matched!");
    
}
