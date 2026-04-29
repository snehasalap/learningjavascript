console.log("In JavaScript, every value can be used in a condition.");
console.log(
  "Some values are 'truthy' (act like true), some are 'falsy' (act like false).\n",
);

// 1. false
if (false) {
  console.log("This won't run");
} /*else {
  console.log("1. false is falsy ✓");
}
  */

// 2. 0 (zero)
if (0) {
  console.log("This won't run");
} else {
  console.log("2. 0 is falsy ✓");
}

// 3. "" (empty string)
if ("") {
  console.log("This won't run");
} else {
  console.log("3. Empty string is falsy ✓");
}

// 4. null
if (null) {
  console.log("This won't run");
} else {
  console.log("4. null is falsy ✓");
}

// 5. undefined
if (undefined) {
  console.log("This won't run");
} else {
  console.log("5. undefined is falsy ✓");
}

// 6. NaN (Not a Number)
if (NaN) {
  console.log("This won't run");
} else {
  console.log("6. NaN is falsy ✓");
}

console.log("=== TRUTHY VALUES ===\n");

console.log("All non-falsy values are truthy:\n");

// Non-empty strings
if ("hello") {
  console.log("Non-empty string is truthy ✓");
}

// Non-zero numbers
if (42) {
  console.log("Non-zero positive number is truthy ✓");
}

if (-1) {
  console.log("Negative numbers are truthy ✓");
}

// Boolean true
if (true) {
  console.log("true is truthy ✓ (obviously!)");
}

// IMPORTANT: Empty arrays and objects are TRUTHY!
if ([]) {
  console.log("Empty array [] is truthy ✓ (surprise!)");
}

if ({}) {
  console.log("Empty object {} is truthy ✓ (surprise!)");
}

console.log("\n=== TESTING PATTERN: CHECK IF VALUE EXISTS ===\n");

console.log("Pattern 3: Check if variable has been set\n");

let testResult; // undefined

if (testResult) {
  console.log("Result: " + testResult);
} else {
  console.log("No result yet ✓");
}

console.log("\nAfter assigning:");
testResult = "PASSED";

if (testResult) {
  console.log("Result: " + testResult); // This runs!
}

console.log("\n=== COMMON MISTAKES ===\n");

console.log("Mistake 1: Testing for empty array\n");

let errors = []; // No errors

console.log("❌ WRONG way:");
if (errors) {
  console.log("Has errors!"); // This runs even though array is empty!
}

console.log("\n✅ CORRECT way:");
if (errors.length > 0) {
  console.log("Has errors!");
} else {
  console.log("No errors ✓");
}

console.log("\nExplanation: Empty array is truthy! Always check .length\n");

console.log("Mistake 2: Testing for zero\n");

failedTests = 0;

console.log("❌ WRONG way:");
if (failedTests) {
  console.log("Tests failed: " + failedTests);
} else {
  console.log("No failures"); // Misleading! 0 is falsy
}

console.log("\n✅ CORRECT way:");
if (failedTests > 0) {
  console.log("Tests failed: " + failedTests);
} else {
  console.log("No failures ✓");
}

console.log("\nExplanation: 0 is falsy! Use explicit comparison for numbers\n");

console.log("=== TRUTHY/FALSY SUMMARY ===\n");

console.log("The 6 Falsy Values:");
console.log("  1. false");
console.log("  2. 0");
console.log('  3. "" (empty string)');
console.log("  4. null");
console.log("  5. undefined");
console.log("  6. NaN");

console.log("\nEverything else is truthy, including:");
console.log('  - Non-empty strings: "hello", "0", " "');
console.log("  - Non-zero numbers: 42, -1, 3.14");
console.log("  - true");
console.log("  - Empty arrays: []");
console.log("  - Empty objects: {}");

console.log("\nCommon Testing Patterns:");
console.log("  ✓ Check if exists: if (errorMessage) { }");
console.log('  ✓ Default values: let name = userName || "Guest"');
console.log("  ✓ Arrays: if (results.length > 0) { }");
console.log("  ✓ Numbers: if (count > 0) { } (not if (count))");

console.log("\nRule of thumb:");
console.log("When in doubt, use explicit comparisons (=== 0, > 0, etc.)");
console.log("rather than relying on truthy/falsy!\n");
