/*
break:
----------------
-break will only applicable on loops and switch case
-break statement will help to exit from loop and switch case body/scope


continue:
------------------
-continue statment is applicable on loops
-Continue will skip certain part of the code and continue execution till the end of loop/condition

return:
-------------
-return keyword applicable for function
-return keyword used to return value/result from the function
-return statement should be the last statement of function
-return statement always return result to the calling function

*/

for(let i=1;i<=10;i++)
{
    if(i>=5)
    {
        break;//exit from loop/switch
    }
    else
    {
        console.log(i);//1 2 3 4
        
    }
}

//A 'break' statement can only be used within an enclosing iteration or switch statement.ts(1105)
// if(true)
// {
//     //break;
//     continue;
// }


console.log("--------");
for(let i=1;i<=10;i++)
{
    if(i>5)
    {
        break;//exit from loop/switch
    }
    else
    {
        console.log(i);//1 2 3 4 5
        
    }
}

console.log("--------");

for(let r=1;r<=4;r++)
{
    for(let c=1;c<=4;c++)
    {
        break;
    }

    console.log("Hi");
    //break;
    
}

console.log("Hello");


console.log("------------");

for(let i=1;i<=10;i++)
{
    if(i===8)
    {
        continue;//skip certain part of code & execution will continue
        console.log("hi");//Unreachable code detected.
    
    }else
    {
        console.log(i);
        
    }
}

