"use strict";
/*

Revision
- loops, for of, while, do while, 
- break,
- continue
- nested loops

*/

//Objects in Javascript
//HR System

/*

employee
id
designation
department
doj
salary date



addEmployee()

promoteEmployee()

updateEmployee()

deActiveEmp();

salaryProcessing()



name
no. of employees in department
deptAdmin
deptHead


addDept/update/delete

addEmployee()




Policies

//All employee related variables and functions/actions in one place? 

You should be able to maintain your code. 
And also you have to bake reusability into your program. 

*/

//objects you can combine variables and actions related to employee in a single data type

let a = 17;
let firstName = "Mark";

let emoloyees = ["Mak", "Steve", "John"];

function doIncrement() {}

let testCase = {
  fullname: "Login Test",
  result: "PASSED",
  duration: 2.5,
  name: "ABC",
};

console.log(typeof testCase);

console.log(testCase);
console.log(testCase.name);
console.log(testCase.result);
console.log(testCase.duration);
console.log(testCase["name"]);
console.log(testCase["result"]);
console.log(testCase["duration"]);
//console.log(result);

let propertyName = "result";

console.log(testCase.propertyName); //wrong way of referring?

console.log(testCase[propertyName]);

testCase.tester = "Mark";

console.log(testCase);

testCase.priority = 1;
console.log(testCase);
testCase.result = "FAILED";
console.log(testCase);
console.log("Is result property exists?", "result" in testCase);
delete testCase.result;
console.log("Is result property exists?", "result" in testCase);
console.log(testCase.result);
delete testCase.name;
console.log("Is result property exists?", "name" in testCase);
console.log(testCase.status);

let testRunner = {
  name: "Login Suite",
  totalTests: 5,
  passedTests: 3,

  // Method: function inside an object
  run: function () {
    let totalTests = 5;
    let runStatus = false;
    console.log("Running test suite: " + this.name);
    console.log("Total tests: " + this.totalTests);
    console.log(emoloyees);
  },

  // Shorthand method syntax (ES6)
  report() {
    console.log("Generating report for: " + this.name);
    console.log("Passed: " + this.passedTests + "/" + this.totalTests);
  },
};
//Functions can be declared as an expression also

testRunner.run();
testRunner.run();
testRunner.run();
testRunner.report();

let testRunner1 = testRunner;
//this

/*
Revision

objects


*/

let counter = {
  count: 0,
  testName: "Test Counter",

  increment: function () {
    this.count++; // 'this' refers to counter object
    console.log(this.testName + " count: " + this.count);
  },

  decrement: function () {
    this.count--;
    console.log(this.testName + " count: " + this.count);
  },

  reset: function () {
    this.count = 0;
    console.log(this.testName + " reset!");
  },

  getStatus: function () {
    return this.testName + " is at " + this.count;
  },
};

let apiServer = {
  command: "cd ../backend && npm run dev",
  url: "http://localhost:3001/api/health",
  reuseExistingServer: !process.env.CI,
  timeout: 30000,
};

let uiServer = {
  command: "cd ../frontend && npm run dev",
  url: "http://localhost:5173",
  reuseExistingServer: !process.env.CI,
  timeout: 30000,
};

webServer: [apiServer, uiServer];

let testSuite = [
  {
    id: "TC-001",
    name: "Valid credentials",
    priority: "High",
    result: "PASSED",
    duration: 2.5,
  },
  {
    id: "TC-002",
    name: "Invalid password",
    priority: "High",
    result: "FAILED",
    duration: 1.8,
  },
  {
    id: "TC-003",
    name: "Empty username",
    priority: "Medium",
    result: "FAILED",
    duration: 1.2,
  },
  {
    id: "TC-004",
    name: "Remember me checkbox",
    priority: "Low",
    result: "PASSED",
    duration: 2.1,
  },
];

for (let i = 0; i < testSuite.length; i++) {
  let tc = testSuite[i];
  console.log(tc.result);
}

for (tc of testSuite) {
  console.log(tc.result);
}
