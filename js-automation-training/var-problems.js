// =================== Step 1 ===================
/*
console.log("Status before declaration: " + testStatus);
var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/

/*
console.log("Status before declaration: " + testStatus);
let testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);
*/


// =================== Step 2 ===================
/*
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // print
*/
/*
if (true) {
    let tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  // Crash
*/


// =================== Step 3 ===================
/*
for (var i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here? 3
*/

/*
for (let i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);   // What is i here? out of block scope
*/


// =================== Step 4 ===================

var testStatus = "PASSED";
console.log("Status after declaration: " + testStatus);

let tempUser = "admin@test.com";
if (true) {
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser); 

let i;
for (i = 0; i < 3; i++) {
    console.log("Running test step " + i);
}
console.log("After loop, i = " + i);  