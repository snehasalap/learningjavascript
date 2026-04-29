let testResult = "SKIPPED";

if (testResult === "PASSED") {
  console.log("✓ Test successful!");
  console.log("This is a good test which is finally passing");
}

if (testResult === "PASSED") console.log("✓ Test successful!");
else {
  console.log("✗ Test failed or skipped!");
}

let password = "Test@123";

if (password.length < 8) {
  console.log("Error: Password too short");
} else {
  console.log("Password validation passed");
}

testResult = "SKIPPED";
if (testResult === "PASSED") {
  console.log("✓ Test passed");
} else if (testResult === "FAILED") {
  console.log("✗ Test failed");
} else if (testResult === "SKIPPED") {
  console.log("⊘ Test skipped");
} else {
  console.log("? Unknown test result");
}

let fName = "Mark";

password = "Test@";

console.log("Password: " + password);
console.log("Length: " + password.length + " characters\n");

if (password.length < 6) {
  console.log("Weak password - too short");
} else if (password.length < 10) {
  console.log("Medium password strength");
} else {
  console.log("Strong password");
}

let email = "testuser@example.com";

console.log("Email: " + email);

if (email.includes("@") && email.includes(".")) {
  console.log("✅ Valid email format");
} else {
  console.log("❌ Invalid email format");
}
