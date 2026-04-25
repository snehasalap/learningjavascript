"use strict";

/*
Revision
- History of Javascript
- variables, constants
- How to save the program to GitHub
- Two ways of executing program, one from borwser, and the other from command line
- var let const
- case sensitive
*/

//let email = "test@test.com";

let email = "test1@test.com"; //Global variables
//var buildingNo = "A234/23";
function welcomePatient(patientName) {
  // <── ( ) holds input
  const clinicName = "ABC";
  var buildingNo = "BCere123";
  let email = "local@test.com"; //Local to welcomePatient function
  let greeting = "Welcome to " + clinicName; // local variable
  console.log(greeting + ", " + patientName + "!");
  console.log(email);
  console.log(buildingNo);
} // <── function ends here
console.log(buildingNo);
console.log(email);

email = "testwewrwew@test.com"; //redeclaring the variables

function checkAgeWithLet(age) {
  if (age >= 18) {
    // <── block starts
    let status = "Adult patient"; // only visible inside this if-block
    console.log("Inside block:", status);
  } // <── block ends, `status` is gone

  // console.log(status);                    // ← CRASH — `status` is out of scope
}
welcomePatient("Mark");
console.log(buildingNo);
console.log(email);
welcomePatient("Steve");
console.log(buildingNo);
console.log(email);
welcomePatient("Rahul");
console.log(buildingNo);
console.log(email);
let fName = "ABC";
