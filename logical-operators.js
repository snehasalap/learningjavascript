/*
revision
- undefined
- null
- operators
 - assignment
 - comparison
- coercion
- ===, ==, !==, !=
- if else, 
*/

let username = "testuser";
let password = "";
let email = "";
/*
let result = username !== "" && password !== "";
console.log(result);

if (username !== "" && password !== "") {
  console.log("✅ Both fields filled");
} else {
  console.log("❌ Missing required fields");
}

console.log("true  && true  = " + (true && true));
console.log("true  && false = " + (true && false));
console.log("false && true  = " + (false && true));
console.log("false && false = " + (false && false));

status1 = "SKIPPED";

//Test case should be either PASSED or it should be SKIPPED

if (status1 === "PASSED" || status1 === "SKIPPED" || status1 === "BLOCKED") {
  console.log("✅ Test did not fail");
} else {
  console.log("❌ Test failed");
}

console.log("true  || true  = " + (true || true));
console.log("true  || false = " + (true || false));
console.log("false || true  = " + (false || true));
console.log("false || false = " + (false || false));

if ((status1 = "FAILED")) {
  //It is only assignming.
  // So the value becomes "FAILED", it is not an empty string, so JS treats it as true
  console.log("FAILED");
} else {
  console.log("PASS");
}
*/
let hasErrors = true;
console.log("hasErrors: " + !hasErrors);

if (hasErrors) {
  console.log("❌ Errors present");
} else {
  console.log("✅ No errors detected");
}

let isActive = true;

console.log(!isActive);

age = 30;

if (age >= 18 && age <= 65) {
  console.log("✅ Valid age range (18-65)");
} else {
  console.log("❌ Age must be between 18 and 65");
}

console.log(
  "Combined with OR: " + ((username !== "" && password !== "") || email !== ""),
);

if ((username !== "" && password !== "") || email !== "") {
  console.log("✅ Sufficient login credentials");
} else {
  console.log("❌ Insufficient credentials");
}

let result = (true || false) && false;
console.log(result);

//ternary operator

condition ? valueIfTrue : valueIfFalse;

let testPassed = true;

// if-else version (4 lines)
let symbolA;
if (testPassed) {
  symbolA = "✅ PASSED";
} else {
  symbolA = "❌ FAILED";
}

result = testPassed ? "✅ PASSED" : "❌ FAILED";
console.log(result);
let score = 85;
//A - >=90, B - >=80, rest C)
//1. Write if else statement to implement above logic
//2. Do the same using ternary operator.
console.log("Grade: " + (score >= 90 ? "A" : score >= 80 ? "B" : "C or below"));


let goodGrade;
if (s >= 90) goodGrade = "A";
else if (s >= 80) goodGrade = "B";
else if (s >= 70) goodGrade = "C";
else if (s >= 60) goodGrade = "D";
else goodGrade = "F";
