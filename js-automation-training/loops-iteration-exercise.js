console.log("\n_________________## Exercise 1: Print All Test Cases_________________");


let testCases = ["Login with valid credentials", 
    "Login with invalid password",
    "Login with empty username",
    "Logout functionality",
    "Remember me checkbox"];
    
let testCaseCount;


console.log("Login Module Test Suite");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━");

for (let i=0; i<testCases.length; i++) {
    testCaseCount = i + 1;
    console.log(`${testCaseCount}. ${testCases[i]}`);
    
}

console.log(`Total test cases: ${testCaseCount}`);

console.log("\n_______________## Exercise 2: Count Test Results___________________\n");

let testResults = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];
let passCount = 0;
let failCount = 0;
let skipCount = 0;


for (let testResult of testResults) {
    switch (testResult) {
        case "PASSED":
            passCount = passCount + 1;
        case "FAILED":
            failCount = failCount + 1;
        case "SKIPPED":
            skipCount = skipCount + 1;
    }
}

console.log(`Test Execution Results
━━━━━━━━━━━━━━━━━━━━━━━━━

Counting results...

Test Statistics:
  Total tests: ${testResults.length}
  Passed: ${passCount} ✓
  Failed: ${failCount} ✗
  Skipped: ${skipCount} ⊘

  Pass rate: ${passCount/testResults.length * 100}%
  Fail rate: ${failCount/testResults.length * 100}%    
`);



console.log("\n_______________## Exercise 3: Calculate Test Scores___________________\n");

let scores = [85, 92, 78, 95, 88, 73, 90, 87];
let highest; 
let lowest;
let total = 0;

for (score of scores) {
    total = total + score;
}

for (let i=0; i<scores.length; i++) {
    for (let j=1; j<scores.length; j++) {
        if (scores[i] < scores[j]) {
            highest = scores[j];
        }
    }
}


for (let i=0; i<scores.length; i++) {
    for (let j=1; j<scores.length; j++) {
        if (scores[i] > scores[j]) {
            lowest = scores[j];
        }
    }
}

console.log(`Test Score Analysis
━━━━━━━━━━━━━━━━━━━━━━━━━

Scores: [ 85, 92, 78, 95, 88, 73, 90, 87 ]
Scores: ${score}

Calculating statistics...

Results:
  Total: ${total}
  Average: ${total/scores.length}
  Highest: ${highest}
  Lowest: ${lowest}`);





console.log("\n_______________## Exercise 5: Retry Logic with do...while___________________\n");

function runFlakyTest() {
    return Math.random() > 0.7; // 30% success rate
}

let testName = "Login Test";
let attempts = 0;
let maxAttempts = 5;
let testPassed = false;

console.log("Retry Logic Test Runner");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log(`Running: ${testName}`);
console.log(`Max attempts: ${maxAttempts}\n`);

do {
    attempts++;
    console.log(`Attempt ${attempts}...`);

    testPassed = runFlakyTest();

    if (testPassed) {
        console.log("  ✓ Test PASSED!");
    } else {
        console.log("  ✗ Test FAILED");
        if (attempts < maxAttempts) {
            console.log("  Retrying...\n");
        }
    }

} while (!testPassed && attempts < maxAttempts);

// Final result
if (testPassed) {
    console.log(`\n✓ Test passed on attempt ${attempts}`);
} else {
    console.log(`\n✗ Test failed after ${attempts} attempts`);
}

console.log("\n_______________### Challenge: Complete Test Report Generator___________________\n");