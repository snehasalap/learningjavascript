/*
- Memory management - stack, heap. 
- Error hadnling
*/

// What are callbacks in Javascript
//What are promises in Javascript
//What is async await

//What is a callback functions in Javascript
//A function passed into another function to be called later

function sum(a, b) {}

let sum = function (a, b) {};
sum(2, 3);

let callback = function () {
  console.log("ABC");
};

function runTest(name, printResult) {
  console.log("Test Started");
  console.log("Test Completed");
  if (result.status === "PASSED") {
    printResult();
  }
}

/*
printResult = (result) => {
  console.log(result.status);
}
*/

runTest("Login Test", (result) => {
  console.log(result.status);
});

runTest("Login Test", function (result) {
  console.log(result.status);
});

let printResult = (result) => {
  console.log(result.status);
};

runTest("Login Test");
printResult();
