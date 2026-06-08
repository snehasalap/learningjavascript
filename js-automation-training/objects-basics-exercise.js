console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Exercise 1: Create Test Case Object
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let testCase = {
    id: "TC-001",
    name: "Login with valid credentials",
    priority: "High",
    status: "Passed",
    duration: 2.5,
    browser: "Chrome",
}

console.log(`
    Test Case Details
    ━━━━━━━━━━━━━━━━━━━━━━━━━
    
    ID: ${testCase.id}
    Name: ${testCase.name}
    Priority: ${testCase.priority}
    Status: ${testCase.status}
Duration: ${testCase.duration}
Browser: ${testCase.browser}`);

testCase.tester = "John Doe";
testCase.status = "Failed";

console.log(`
    Adding tester...
    Changing status...    
    `);


console.log(`
        Updated Test Case:
        {
    ID: ${testCase.id}
    Name: ${testCase.name}
    Priority: ${testCase.priority}
    Status: ${testCase.status}
    Duration: ${testCase.duration}
    Browser: ${testCase.browser}
    Tester: ${testCase.tester}
    }
    `);


console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Exercise 2: Test User Objects
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let testUsers = [
    {
        username: "johndoe",
        password: "********",
        email: "johndoe@gmail.com",
        role: "admin",
    },
    {
        username: "marksmith",
        password: "********",
        email: "marksmith@gmail.com",
        role: "user",
    },
    {
        username: "paul",
        password: "********",
        email: "paul@gmail.com",
        role: "user",
    }
]

console.log(`
Test Users Database
━━━━━━━━━━━━━━━━━━━━━━━━━
    `);


for (testUser of testUsers) {
    console.log(`
    Username: ${testUser.username}
    Password: ${testUser.password}
    Email: ${testUser.email}
    Role: ${testUser.role}
    `);

}



console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Exercise 3: Test Results Array
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);

let testResults = [
    {
        name: "✓ 1. Login Test",
        result: "PASSED",
        duration: 2.5,
    },
    {
        name: "✗ 2. Logout Test",
        result: "FAILED",
        duration: 1.8,
    },
    {
        name: "✓ 3. Search Test",
        result: "PASSED",
        duration: 3.2,
    },
    {
        name: "⊘ 4. Checkout Test",
        result: "SKIPPED",
        duration: 0.0,
    },
    {
        name: "✓ 5. Payment Test",
        result: "PASSED",
        duration: 2.1,
    },
]

console.log(`Test Execution Report
━━━━━━━━━━━━━━━━━━━━━━━━━

Test Results:`);


for (let i = 0; i < testResults.length; i++) {
    let tr = testResults[i];

    console.log(`
${tr.name}
    Result: ${tr.result}
    Duration: ${tr.duration}s
    `)
}

let passedCount = 0;
let failedCount = 0;
let skippedCount = 0;
let avg = 0;

for (let i = 0; i < testResults.length; i++) {
    if (testResults[i].result === "PASSED") passedCount++;
    else if (testResults[i].result === "FAILED") failedCount++;
    else skippedCount++;
    } 

console.log(`Statistics:
━━━━━━━━━━━━━━━━━━━━━━━━━
  Total tests: ${testResults.length}
  Passed: ${passedCount} 
  Failed: ${failedCount}
  Skipped: ${skippedCount}
  `)

let totalDuration = testResults.reduce((sum, testResult) => sum + testResult.duration, 0);
console.log("Total duration: " + totalDuration + "s");

let avgDuration = totalDuration/testResults.length;
console.log("Average Duration: " + avgDuration.toFixed(2) + "s");







console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Exercise 4: Object Methods and 'this' Keyword
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Exercise 5: Deleting Properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);
console.log(`
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
## Exercise 6: Complete Test Tracker
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`);


