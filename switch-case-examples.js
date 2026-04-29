/*

Revision:
- Truthy and falsey values
- If-else statements

What are we going to do today?
- Switch-case statements

*/

testResult = "SKIPPED";

// Verbose else-if way
if (testResult === "PASSED") {
  console.log("✓ Test passed");
} else if (testResult === "FAILED") {
  console.log("✗ Test failed");
} else if (testResult === "SKIPPED") {
  console.log("⊘ Test skipped");
} else {
  console.log("? Unknown status");
}

switch (testResult) {
  case "PASSED":
    console.log("✓ Test passed");
    break;
  case "FAILED":
    console.log("✗ Test failed");
    break;
  case "SKIPPED":
    console.log("⊘ Test skipped");
    break;
  default:
    console.log("? Unknown status");
}

console.log("This line will be executed after switch encounters break.");
let errorCode = 500;

console.log("HTTP Status Code: " + errorCode);

switch (errorCode) {
  case 200:
    console.log("✓ Success");
    break;
  case 400:
    console.log("✗ Bad Request");
    break;
  case 401:
    console.log("✗ Unauthorized");
    break;
  case 404:
  case 500:
    console.log("✗ Server Error");
    break;
  default:
    console.log("✗ Unknown error: " + errorCode);
}

const x = 5;

switch (true) {
  case x > 0 && x < 5:
    console.log("Between 1 and 4");
    break;
  case x >= 5 && x <= 10:
    console.log("Between 5 and 10");
    break;
}

switch (x) {
  case function () {
    return 5;
  }:
    console.log("Nope");
    break;
}

function getColor(code) {
  switch (code) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Blue";
    default:
      return "Unknown";
  }
}

console.log(getColor(2));
