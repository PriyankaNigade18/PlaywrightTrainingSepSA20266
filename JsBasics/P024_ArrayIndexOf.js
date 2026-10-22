
/*
indexOf(searchElement,fromIndex?)
=================================
Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
*/

let month=['Jan','Feb','Mar','Apr','May','Mar','Apr','Jun','Mar','Jul'];
//index     0       1    2     3    4      5     6      7    8     9

console.log(month);//['Jan','Feb','Mar','Apr','May','Mar','Apr','Jun','Mar','Jul']

let index1=month.indexOf('Mar');
console.log("first Occurence of Mar:"+index1);//2

let index2=month.indexOf('Aug');
console.log(index2);//-1

//find the  index of second occurence of Mar
let index3=month.indexOf('Mar',2);
console.log(index3);//it will start again at 2 --->2

//find the index of second occurence of Mar
let index4=month.indexOf('Mar',index1+1);//it will starts with 3
console.log("first Occurence of Mar:"+index4);//5


console.log(month.indexOf('Apr'));//3
console.log(month.indexOf('Apr',4));//6

//find for Mar last occurance
console.log(month.indexOf('Mar',index4+1));//8
//lastIndexOf('searchvalue'):Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.
console.log(month.lastIndexOf('Mar'));//8

//casesensitive
console.log(month.indexOf('mar'));//-1

console.log("--------------");

//single login where we can find all indexes for 'Mar'

let searchElement='Mar';
let resultArray=[];
let count=0;
for(let i=0;i<month.length;i++)
{
    if(month[i]===searchElement)
    {
        resultArray.push(i);
        count++;
    }
}

console.log("All indexes for Mar are: "+resultArray);
console.log("Duplicate element 'Mar' count : "+count);














