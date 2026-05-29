//## Exercise 1: Test Suite Array

let testCases = ["Valid credentials",
    "Invalid password",
    "Empty username",
    "Empty password",
    "Remember me checkbox"];

console.log("Test Suite: Login Module");

console.log("Test Cases:");
console.log(testCases);

console.log("Total test cases:", testCases.length);

console.log("First Test:", testCases[0]);
console.log("Last Test:", testCases[testCases.length-1]);


//## Exercise 2: Test Results Tracker

let testResults = [];

testResults[0] = "PASSED";
testResults[1] = "PASSED";
testResults[2] = "FAILED";
testResults[3] = "PASSED";
testResults[4] = "SKIPPED";

function checkFailure(){
    for (testResult of testResults) {
        if (testResult === "FAILED")
        return "YES";
    }
}

console.log(`
Running Test Suite...

Test 1 completed: ${testResults[0]}
Test 2 completed: ${testResults[1]}
Test 3 completed: ${testResults[2]}
Test 4 completed: ${testResults[3]}
Test 5 completed: ${testResults[4]}

Test Summary:
Total tests run: ${testResults.length}
Results: ${testResults}
Contains failures: ${checkFailure()} (found at index ${testResults.indexOf("FAILED")})
`);



// ## Exercise 3: Test Data Management

let testEmails = ["user1@test.com", "user2@test.com", "user3@test.com"];

console.log(`
Test Email Management

Initial emails: ${testEmails}
Count: ${testEmails.length}
`);

testEmails.push("user4@test.com");
console.log("After adding user4@test.com to end:", testEmails);

testEmails.unshift("admin@test.com")
console.log("After adding admin@test.com to beginning:", testEmails);


testEmails.pop();
console.log("After removing last email:", testEmails);

testEmails.shift();
console.log("After removing first email:", testEmails);

console.log("Final Count:", testEmails.length);




// ## Exercise 4: Test Score Analysis

testScores = [85, 92, 78, 95, 88, 73, 90];

console.log(`
Test Score Analysis

Scores: ${testScores}
Total scores: ${testScores.length}

First score: ${testScores[0]}
Last score: ${testScores[testScores.length-1]}
`);

console.log("Checking for specific scores...");
console.log("Score 95 found: Yes (at index " + testScores.indexOf(95) + ")");
console.log("Score 100 found: No (index " + testScores.indexOf(100) + ")");

