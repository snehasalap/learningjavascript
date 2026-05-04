/*

Revision:
- Switch case
- template string
- arrays
- loops

*/

let testScores = [85, 92, 78, 95, 88];

let total = 0;

for (let i = 0; i < testScores.length; i++) {
  total += testScores[i];
  console.log(
    "Score " +
      (i + 1) +
      ": " +
      testScores[i] +
      " (running total: " +
      total +
      ")",
  );

  console.log(`Average is ${total / testScores.length}`);
}

/*
Assignment is - 
1. Find the highest and lowest numbers in the below array.

let scores = [85, 92, 78, 95, 88, 73, 90];

2. Find a particular value in an array and also get its index position.

let tests = ["Login", "Logout", "Search", "Checkout", "Payment"];

3. IN the given array, we have provided the status of the test cases,  

let statuses = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED"];

You have to write a program whose outuput will tell you
- How many test cases passed
- How many failed
- How many skiped. 

- Provide the pass percentages. 
*/

//for ... of loop

testCases = ["Login", "Logout", "Search", "Checkout"];

console.log("1. Traditional for loop:");
for (let i = 0; i < testCases.length; i++) {
  console.log("  " + testCases[i]);
}
console.log();
for (let testCase of testCases) {
  if (testCase === "Search") {
    break;
  }
  console.log("  " + testCase);
}
console.log();

let count = 0;

console.log("While loop counting:");
while (count < 5) {
  //While this condition is true keep on executing the block of code inside while
  console.log("Count: " + count);
  count++; // CRITICAL - must update!
}
console.log("Final count: " + count);

let attempts = 0;
let success = false;
let maxAttempts = 3;

console.log("Simulating retry logic (max " + maxAttempts + " attempts):");

while (!success && attempts < maxAttempts) {
  attempts++;
  console.log("Attempt " + attempts + "...");

  // Simulate random success (50% chance)
  success = Math.random() > 0.5;

  if (success) {
    console.log("  ✓ Success!");
  } else {
    console.log("  ✗ Failed, trying again...");
  }
}

let doWhileCounter = 10;
do {
  console.log("  This runs once even though 10 is not < 5");
} while (doWhileCounter < 5);

let whileCounter = 10;
while (whileCounter < 5) {
  console.log("  This never runs because 10 is not < 5");
}

let choice = "";
let menuAttempts = 0;
let menuChoices = ["1", "2", "3", "4"]; // Simulated choices

do {
  console.log("Test Automation Menu:");
  console.log("  1. Run smoke tests");
  console.log("  2. Run regression tests");
  console.log("  3. Run all tests");
  console.log("  4. Exit");
  console.log();

  // Simulate user choosing options
  choice = menuChoices[menuAttempts];
  console.log("User selected: " + choice);

  if (choice === "1") {
    console.log("  → Running smoke tests...");
    console.log("  ✓ Smoke tests completed\n");
  } else if (choice === "2") {
    console.log("  → Running regression tests...");
    console.log("  ✓ Regression tests completed\n");
  } else if (choice === "3") {
    console.log("  → Running all tests...");
    console.log("  ✓ All tests completed\n");
  } else if (choice === "4") {
    console.log("  → Exiting test menu...\n");
  } else {
    console.log("  ✗ Invalid option. Try again.\n");
  }

  menuAttempts++;
} while (choice !== "4" && menuAttempts < menuChoices.length);

results = ["PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED"];

console.log("Processing only PASSED tests:");

for (let i = 0; i < results.length; i++) {
  if (results[i] !== "PASSED") {
    console.log("Test " + (i + 1) + ": " + results[i] + " (skipping)");
    continue; // Skip rest of loop, go to next iteration
  }

  console.log("Test " + (i + 1) + ": " + results[i] + " ✓");
}

let testSuites = ["Login", "Search", "Checkout"];
let browsers = ["Chrome", "Firefox", "Safari"];

console.log("Cross-browser test matrix:");

for (let i = 0; i < testSuites.length; i++) {
  console.log("\n" + testSuites[i] + " tests:");

  for (let j = 0; j < browsers.length; j++) {
    console.log("  - " + browsers[j]);
  }
}
