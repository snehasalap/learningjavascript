/*

Revision:
- Functions in objects
- array of objects
- declaring methods in objects
- playwright config
- calling object functions
- 

Plan for today
- Functions - Part 1
- Arrays methods - Part 1
- Functions - Part 2
- array methods - Part 2
*/

function greet() {
  console.log("Hello from Test Automation!");
  return "Hello from Test Automation";
}

greet();
greet();
console.log("******Let us see what happens********", greet());

function add(a, b) {
  if (a > b) {
    return a - b;
  } else if (a === b) {
    return b - a;
  }

  return a + b;
}

let c = add(4, 5) + add(10, 23);

function greetUser(name) {
  //name
  console.log("Hello, " + name + "!");
}
greetUser("Mark"); //function call having values are arguments
greetUser("Steve");
greetUser();

function generateEmail(firstName, lastName) {
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
  return email;
}

function describeTest(testName, status, duration) {
  //                ↑ testName, status, duration  =  PARAMETERS
  console.log(`Test: ${testName} | Status: ${status} | Duration: ${duration}s`);
}

describeTest("Login Test", "FAILED", 2.5);
describeTest("Login Test", "FAILED");
console.log(describeTest("Login Test", "FAILED", 2.5));

function login(user, pass) {
  console.log(`Login with user as ${user} and password as ${pass}}`);
  let success = true;
  return success;
}

if (login("Mark", "Mark123#")) {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

function validateEmail(email) {
  if (email.includes("@") && email.includes(".")) {
    return true;
  } else {
    return false;
  }
}

function describeTest1(testName, status = "FAILED", duration = 1.5) {
  //                ↑ testName, status, duration  =  PARAMETERS
  console.log(`Test: ${testName} | Status: ${status} | Duration: ${duration}s`);
}

describeTest1("Login Test", "PASSED", 2.5);
describeTest1("Login Test", "SKIPPED");
describeTest1("Login Test");

function createTestUser(name, age = 25, city = "New York") {
  return {
    name: name,
    age: age,
    city: city,
  };
}

let a = createTestUser("Steve");
console.log(a.age);

console.log(createTestUser("Mark", 45, "Pune").age);

console.log(createTestUser("Mark").name);
console.log(createTestUser("Mark").city);
console.log(createTestUser().city);

function runTest(testName, browser = "Chrome", timeout = 30000) {
  console.log(`Running ${testName} on ${browser} with ${timeout}ms timeout`);
}

function validateUserNested(username, password, age) {
  if (username !== "") {
    if (password.length >= 8) {
      if (age >= 18) {
        return "Valid user";
      } else {
        return "Must be 18+";
      }
    } else {
      return "Password too short";
    }
  } else {
    return "Username required";
  }
}

function validateUserEarly(username, password, age) {
  if (username === "") return "Username required"; // guard
  if (password.length < 8) return "Password too short"; // guard
  if (age < 18) return "Must be 18+"; // guard
  return "Valid user"; // happy path
}
