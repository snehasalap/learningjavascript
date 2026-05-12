/*

Revision:
- array functions
- Slice
- Spice
- shift
- unshift
- push
- pop
- indexOf
- includes
-  

*/

function addTraditional(a, b) {
  return a + b;
}

// Arrow function (full syntax)
const addArrow = (a, b) => {
  return a + b;
};

// Arrow function (simplified syntax)
const addArrowSimpler = (a, b) => a + b;
const square = (x) => x * x;
const greet = () => "Hello from arrow function!";

const validateEmail = (email) => {
  console.log("Validating: " + email);

  if (email.includes("@") && email.includes(".")) {
    return "VALID";
  } else {
    return "INVALID";
  }
};

validateEmail("test@test.com");

let testScores = [85, 92, 78, 95, 88, 73, 90];
//ASSIGNEMTN, CREATE AN ARRAY WHICH WILL HAVE "PASSED" OR FALIED BASED ON VALUE IN  testScores array.
//If the score is more than 80 then PASSED otherwise FAILED

let testResult = [
  "PASSED",
  "PASSED",
  "FAILED",
  "PASSED",
  "PASSED",
  "FAILED",
  "PASSED",
];
//Find out all the values in an array whicha re greater than 80)
let highScores = testScores.filter((score) => score > 80);
console.log(highScores); //Filter filters the valuse from the array matching a condition.

let results = testScores.map((score) => (score >= 80 ? "PASSED" : "FAILED"));
console.log(results); //Map transforms the array.

results = testScores.map((score) => score + 1);
console.log(results);

let firstFailed = testScores.find((score) => score < 80);
console.log(firstFailed); //Find the first matching condition, the array value is returned

let allPassed = testScores.every((score) => score >= 80);
console.log(allPassed); //Check if every record in the array matches the condition otherwise return false.

let anyFailed = testScores.some((score) => score < 80);
console.log(anyFailed);

let tests = [
  { name: "Login Test", status: "PASSED", duration: 2.5 }, //sum 0,
  { name: "Logout Test", status: "FAILED", duration: 1231.8 }, //sum 2.5
  { name: "Search Test", status: "PASSED", duration: 3.2 }, //sum 2.5 + 3.2
  { name: "Checkout Test", status: "PASSED", duration: 14.1 },
  { name: "Payment Test", status: "FAILED", duration: 2.9 },
];

console.log("All tests:");
tests.forEach((test) => console.log("  - " + test.name + ": " + test.status));
console.log();

let totalDuration = tests.reduce((sum, test) => sum + test.duration, 0);
console.log("Total duration: " + totalDuration + " hours");
let avgDuration = totalDuration / tests.length;
console.log(avgDuration.toFixed(2) + " hours");

function addThree(a, b, c) {
  return a + b + c;
}

let scoreArr = [10, 20, 30];
console.log(addThree(scoreArr[0], scoreArr[1], scoreArr[2]));
console.log(addThree(...scoreArr)); //Spread operator
let durations = [2.5, 1.8, 4.1, 3.2];
console.log("\nLongest test:  " + Math.max(...durations) + "s");
console.log("Shortest test: " + Math.min(...durations) + "s");

let smokeTests = ["login", "logout"];
let regTests = ["profile", "settings"];
let allTestsList = [...smokeTests, ...regTests];
console.log("\nMerged test list:", allTestsList);

function logResultsFixed(r1, r2, r3) {
  console.log("Result 1: " + r1);
  console.log("Result 2: " + r2);
  console.log("Result 3: " + r3);
}

logResultsFixed("PASSED", "FAILED", "PASSED");
logResultsFixed("PASSED", "FAILED", "PASSED", "SKIPPED");

function logResults(...results) {
  console.log("Number of results: " + results.length);
  console.log("Results array: " + results);
  console.log();

  results.forEach((result, index) => {
    console.log("  Test " + (index + 1) + ": " + result);
  });
}

logResults("PASSED", "FAILED", "PASSED");
logResults("PASSED", "FAILED", "PASSED", "SKIPPED");
logResults("PASSED", "FAILED", "PASSED", "SKIPPED", "IGNORED");

function runTests(suiteName, browser, ...testNames) {
  console.log("Test Suite: " + suiteName);
  console.log("Browser: " + browser);
  console.log("Tests to run:");

  testNames.forEach((test, index) => {
    console.log("  " + (index + 1) + ". " + test);
  });

  console.log("Total: " + testNames.length + " tests");
}

runTests(
  "Login Suite",
  "Chrome",
  "Valid Login",
  "Invalid Password",
  "Empty Username",
);
