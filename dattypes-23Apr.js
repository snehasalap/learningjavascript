/*
Revision
- data types
 - number,string, boolean, undefined, null, Symbol, bigInt
*/
/*
// Strings (text)
let username = "testuser@example.com";
let password = "Test@123";
let testName = "Login Functionality Test";

console.log("Username: " + username);
console.log("Username: " + "username");

let a = 4;
let b = 5;
let sum = a + "b";
sum = a + b;
console.log(sum);
*/

console.log("Password: " + password);
console.log("Test Name: " + testName);

console.log("\n=== NUMBER DATA TYPE ===\n");

// Numbers (no quotes!)
let userId = 12345;
let age = 28;
let testCount = 10;
let passRate = 85.5;

console.log("User ID: " + userId);
console.log("Age: " + age);
console.log("Test Count: " + testCount);
console.log("Pass Rate: " + passRate + "%");

//operators
let failedTests = totalTests - passedTests;

passRate = (passedTests / totalTests) * 100;
console.log("Pass Rate: " + passRate + "%");

// Calculate test duration
let startTime = 100;
let endTime = 125;
let duration = endTime - startTime;
console.log("\nTest Duration: " + duration + " seconds");

// Calculate average score
let score1 = 85;
let score2 = 90;
let score3 = 78;
let averageScore = (score1 + score2 + score3) / 3;
console.log("Average Score: " + averageScore.toFixed(2));

// Booleans (true or false, no quotes!)
let isTestPassed = true;
let isActive = true;
let hasErrors = false;

console.log("Test Passed: " + isTestPassed);
console.log("Is Active: " + isActive);
console.log("Has Errors: " + hasErrors);

console.log("\n=== CHECKING TYPES WITH typeof ===\n");

console.log("typeof username: " + typeof username);
console.log("typeof userId: " + typeof userId);
console.log("typeof isTestPassed: " + typeof isTestPassed);

console.log("--- 1. Forgot to assign a value ---\n");

let testResult; // declared, no value
let environment; // declared, no value

console.log("testResult:  " + testResult); // undefined
console.log("environment: " + environment); // undefined
console.log("typeof testResult: " + typeof testResult); // "undefined"

// Fix: always initialize at declaration time and if you do not know then assign null
let testResult2 = "PASSED";
let environment2 = "QA";
console.log("\nFixed testResult:  " + testResult2);
console.log("Fixed environment: " + environment2);

// ── 4. COMMON DEBUGGING CLUE — MISSING INITIALISATION ────────────────────────
//
//  When you see `undefined` in output or a test failure, it is JavaScript
//  telling you one of three things:
//    a) You declared a variable but never assigned it
//    b) A function returned nothing when you expected a value
//    c) You accessed a property that does not exist (typo or wrong key)
//
//  The fix is always to trace back to WHERE the value should have been set
//  and confirm it was actually assigned.

console.log("\n=== NULL DATA TYPE ===\n");

// null = intentionally empty value
let testData = null; // Deliberately set to "no value"

console.log("Test Data: " + testData); // null
console.log("typeof testData: " + typeof testData); // "object" (quirk!)

let aa; // undefined (not assigned)
let bb = null; // null (intentionally empty)

console.log("undefined example: " + aa);
console.log("null example: " + bb);
console.log("\nKey difference:");
console.log("- undefined = accidental (forgot to assign)");
console.log("- null = intentional (deliberately empty)");
