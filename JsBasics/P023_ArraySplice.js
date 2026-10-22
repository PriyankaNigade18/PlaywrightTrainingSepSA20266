/*
Splice()
==========
Removes elements from an array and, if necessary, 
inserts new elements in their place, returning the deleted elements.

to delete any element and insert any element in array we use splice()

Syntax
==========
array.splice(startindex,deleteCount?,insertelements?)

it always works with 0 based index

*/

let fruits=['Mango','Orange','Banana','Grapes','Kiwi','Apple'];
//+ve        0       1         2          3       4      5
console.log(fruits);//[ 'Mango', 'Orange', 'Banana', 'Grapes', 'Kiwi', 'Apple' ]

//delete Banana
let removeEle1=fruits.splice(2,1);
console.log(removeEle1);//[ 'Banana' ]
console.log(fruits);//[ 'Mango', 'Orange', 'Grapes', 'Kiwi', 'Apple' ]
                    //   0         1         2         3       4
//delete kiwi and apple
let removeEle2=fruits.splice(3,2);
console.log(removeEle2);//[ 'Kiwi', 'Apple' ]
console.log(fruits);//[ 'Mango', 'Orange', 'Grapes' ]

//delete Orange and insert two new fruits [ 'Kiwi', 'Apple' ]
fruits.splice(1,1,'Kiwi','Apple');
console.log(fruits);//[ 'Mango', 'Kiwi', 'Apple', 'Grapes' ]

//insert two fruits at start position 2
let removeEle3=fruits.splice(2,0,'Orange','Banana');
console.log(removeEle3);//[]
console.log(fruits);//[ 'Mango', 'Kiwi', 'Orange', 'Banana', 'Apple', 'Grapes' ]


//insert papaya at position 4 add delete count 0
let res=fruits.splice(4,'Papaya');
console.log(res);//[]
//Papaya will not insert delete count required set to 0
console.log(fruits);//[ 'Mango', 'Kiwi', 'Orange', 'Banana', 'Apple', 'Grapes' ]

fruits.splice(4,0,'Papaya');
console.log(fruits);//[  'Mango',  'Kiwi',  'Orange', 'Banana',  'Papaya', 'Apple',  'Grapes']


//if we dont pass delete count it will delete all elements from start index
//delete from 2nd position
let removeEle4=fruits.splice(2);
console.log(removeEle4);//[ 'Orange', 'Banana', 'Papaya', 'Apple', 'Grapes' ]
console.log(fruits);//[ 'Mango', 'Kiwi' ]

//here -3 it is cosider as 0
let removeEle5=fruits.splice(1,-3,'GreenApple');
console.log(removeEle5);//[]
console.log(fruits);//[ 'Mango', 'Kiwi' ]










