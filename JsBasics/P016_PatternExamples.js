/*
For Pattern Examples : first collect row wise result and then print row
*/

/*
pattern1:
 * * * *
 * * * *
 * * * *
 * * * *
*/

for(let r=1;r<=4;r++)
{
    let row="";
    for(let c=1;c<=4;c++)
    {
        row=row+" *";
        
    }
    console.log(row);
    
}

console.log("------------");
/*
Pattern2:
 *
 * *
 * * *
 * * * *
*/

for(let r=1;r<=4;r++)
{
    let row="";

    for(let c=1;c<=r;c++)
    {
        row=row+" *";
    }
    console.log(row);
    
}


console.log("---------");
/*
Pattern3:
 1
 1 2
 1 2 3
 1 2 3 4
*/
for(let r=1;r<=4;r++)
{
    let row="";

    for(let c=1;c<=r;c++)
    {
        row=row+" "+c;
    }
    console.log(row);
    
}


console.log("--------------");
/*
Pattern4:
 1
 2 2
 3 3 3
 4 4 4 4
*/
for(let r=1;r<=4;r++)
{
    let row="";

    for(let c=1;c<=r;c++)
    {
        row=row+" "+r;
    }
    console.log(row);
    
}

console.log("--------------");
/*
Pattern
 1
 2 3
 4 5 6
 7 8 9 10

*/
let k=1;
for(let r=1;r<=4;r++)
{
    let row="";

    for(let c=1;c<=r;c++)
    {
        row=row+" "+k;
        k++;
    }
    console.log(row);
    
}





