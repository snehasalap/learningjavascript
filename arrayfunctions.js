/*
Revision
- Fucntion as a variable
- Function returning a function
- Arrays having function as a values
- Functions as first class objects in Javascript
- Higher order functions

*/
let testResults = ["PASSED", "FAILED", "PASSED"];

console.log(testResults);
testResults[0] = "FAILED";

console.log(testResults);
testResults[3] = "SKIPPED";
//testResults[7] = "IGNORED";
console.log(testResults);
testResults.push("EXECUTING...");
console.log(testResults);
testResults.unshift("ABORTED");
console.log(testResults);
testResults.pop();
console.log(testResults);

testResults.shift();
console.log(testResults);

console.log(testResults.indexOf("ABORTED"));
let valueReturnedFromFunction = "FAILED";
if (testResults.indexOf(valueReturnedFromFunction) !== -1) {
  console.log("✗ At least one test FAILED");
} else {
  console.log("✓ No failures detected");
}

let allTests = ["Login", "Logout", "Search", "Checkout", "Payment"];

let selectedTests = [];
selectedTests[0] = "Logout";
selectedTests[1] = "Search";
console.log(selectedTests);

let selectedTestsInBetterWay = allTests.slice(1, 3); //3 not included
console.log(selectedTestsInBetterWay);
console.log(allTests);

let tellMeOutput = allTests.slice(2);
console.log(tellMeOutput);
tellMeOutput = allTests.slice(-2);
console.log(tellMeOutput);
tellMeOutput = allTests.slice();
console.log(tellMeOutput);

//
let removed;
testList = ["Login", "Logout", "Search", "Checkout"];
removed = testList.splice(2, 2);
console.log("  Removed: " + removed);
console.log("  Array now: " + testList);

testList.splice(1, 0, "Home", "Search"); //insert without deleting anything
console.log("  Array now: " + testList);
testList.splice(2, 1, "NewTest"); //insert at index 2 but before that remove the element at index 2
console.log("  Array now: " + testList);
testList.splice(1, 2, "NewA", "NewB", "NewC");
console.log("  Array now: " + testList);
testList.splice(-2, 2);
console.log("  Array now: " + testList);
console.log(testList.includes("FAILED"));
