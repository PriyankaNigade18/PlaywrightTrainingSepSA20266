/*
If-else: true and false conditions we can validate
*/

//validate API status code : It should be 201

let statusCode=401;

if(statusCode === 201)
{
    console.log("Successfull reponse for POST call!");
    
}else
{
    console.log("Post call fail!");
    
}

//Scenario:validate 200 to 299 rage for status code

let responseCode=260;

if(responseCode>=200 && responseCode<=299)
{
    console.log("This is successfull response!");
    
}else
{
    console.log("This is unsuccessfull response!");
    
}



