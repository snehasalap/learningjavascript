// Variable Naming Rules and Best Practices

console.log("--- GOOD Variable Names (Valid) ---\n");

// Good variable names
let username = "test";
let firstName = "John";
let test_case_id = "TC_001";
let testCase1 = "Login";
let _privateVar = "internal";
let $jQuery = "selector";

console.log("username: " + username);
console.log("firstName: " + firstName);
console.log("test_case_id: " + test_case_id);

console.log("\n--- Naming Conventions ---\n");

// camelCase (recommended for JavaScript)
let testCaseName = "Login Test";
let expectedResult = "Success";

// snake_case (also acceptable)
let test_case_name = "Login Test";
let expected_result = "Success";

// UPPERCASE for constants not mandatory
const MAX_RETRIES = 3;
const API_ENDPOINT = "https://api.test.com";

console.log("camelCase: " + testCaseName);
console.log("snake_case: " + test_case_name);
console.log("UPPERCASE constant: " + MAX_RETRIES);

console.log("\n--- BAD Variable Names (will cause errors) ---\n");

// Uncomment these to see errors:

// ❌ Can't use hyphens
// let first-name = "John";

// ❌ Can't start with number
// let 123test = "value";

// ❌ Can't use JavaScript keywords
// let let = "value";
// let const = "value";
// let function = "value";

// ❌ Case sensitive! These are different variables:
let testName = "Login";
let TestName = "Logout";
let testname = "Search";

console.log("testName: " + testName);
console.log("TestName: " + TestName);
console.log("testname: " + testname);

console.log("\n Best Practice: Use descriptive, camelCase names!");
