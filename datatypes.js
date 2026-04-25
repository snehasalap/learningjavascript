/*
Revision
- variables, global,local,
- function 
- hoisting
- invoking a function
- diff between let and var and const 
- use strict
- declaration and initialization of variables
- scope of the varaibles 
- output of a variable which is not initialized to undefined
- JS is case sensitive
- you cannot redeclare a variable defined using let and const
- How typescript differs 
- You should declare variables where they are used, avoid global variables unless it is essential
- How the code will compile.
*/

//searchBox - camel case
//search_box - snake case

//addTwoNumbers()

//Java
// int buildingNo = 5;

// buildingNp = "MDG"

//Javascript
//console.log(typeof buildingNo);
let buildingNo = 5; //% - modulo operator
console.log(buildingNo + " %");
console.log(typeof buildingNo);
buildingNo = "MGD";
console.log("string", typeof buildingNo);
buildingNo = true; //boolean
console.log("boolean", typeof buildingNo);
buildingNo = null;
console.log(typeof buildingNo);

function sum() {
  let buildingNo;

  if (1 > 2) {
    let buildingNo;
  }
}

function multiply() {
  let buildingNo;
}

+"5" + 1; // it is converting 1 from number to string
"5" - 1; //5 from string to number

let count = 5;
console.log(count); //7
let count1 = ++count; //(increments value of count by 1)
let count2 = count++; //increments value of count by 1)
console.log(count); //7
console.log(count1); //6
console.log(count2); //6

console.log(count++); //7, count = 8
console.log(++count); //9, count = 9

count--;
count = count - 1;
--count;
