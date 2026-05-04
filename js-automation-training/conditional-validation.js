let email = "testuser@example.com";

if (email.includes("@") && email.includes(".")) {
    console.log("✅ Valid email format");
} else {
    console.log("❌ Invalid email format");
}

console.log("\n************************ Test Result Categorizer *************************\n");


let testResult = "PENDING"; // PASSED | FAILED | SKIPPED | PENDING

if (testResult === "PASSED") {
    console.log("Test Status: " + testResult);
    console.log("✓ Test passed successfully");
} else if (testResult === "FAILED") {
    console.log("Test Status: " + testResult);
    console.log("✗ Test failed - check logs");
} else if (testResult === "SKIPPED") {
    console.log("Test Status: " + testResult);
    console.log("⊘ Test skipped");
} else {
    console.log("Test Status: " + testResult);
    console.log("? Unknown test status");
}

console.log("\n************************ Switch — Basic Value Matching *************************\n");

switch (testResult) {
    case "PASSED":
        console.log("Test Status: " + testResult);
        console.log("✓ Test passed successfully");
        break;
    case "FAILED":
        console.log("Test Status: " + testResult);
        console.log("✗ Test failed - check logs");
        break;
    case "SKIPPED":
        console.log("Test Status: " + testResult);
        console.log("⊘ Test skipped");
        break;
    case "PENDING":
        console.log("Test Status: " + testResult);
        console.log("⏳ Test pending - not yet run");
        break;
    default:
        console.log("Test Status: " + testResult);
        console.log("? Unknown test status");
}


console.log("\n************************ Password Strength Checker *************************\n");

let password = "Test@12345"; // Test | Test@123 | Test@12345
let lengthOfPassword = password.length;

if (lengthOfPassword < 6) {
    console.log("Password: " + password);
    console.log("Length: " + lengthOfPassword);
    console.log("❌ Weak password - too short");
} else if (lengthOfPassword >= 6 && lengthOfPassword < 10) {
    console.log("Password: " + password);
    console.log("Length: " + lengthOfPassword);
    console.log("⚠️ Medium password strength");
} else {
    console.log("Password: " + password);
    console.log("Length: " + lengthOfPassword);
    console.log("✅ Strong password");
}


console.log("\n************************ Test Score Grading *************************\n");

let score = 50;     // 95 | 85 | 75 | 65 | 50

if (score >= 90) {
    console.log("Test Score: " + score);
    console.log("Grade: A (Excellent)");
} else if (score >= 80 && score < 90) {
    console.log("Test Score: " + score);
    console.log("Grade: B (Good)");
} else if (score >= 70 && score < 80) {
    console.log("Test Score: " + score);
    console.log("Grade: C (Average)");
} else if (score >= 60 && score < 70) {
    console.log("Test Score: " + score);
    console.log("Grade: D (Pass)");
} else if (score < 60) {
    console.log("Test Score: " + score);
    console.log("Grade: F (Fail)");
}

console.log("\n*********************** Early Return Pattern **************************\n");

// function checkTestData(result, duration) {
//     if (result !== null) {
//         if (duration >= 0) {
//             if (duration <= 10) {
//                 return "Valid: " + result + " in " + duration + "s";
//             } else {
//                 return "Error: Duration too long";
//             }
//         } else {
//             return "Error: Negative duration";
//         }
//     } else {
//         return "Error: No result";
//     }
// }

console.log(checkTestData(null, 3));
console.log(checkTestData("PASSED", -1));
console.log(checkTestData("PASSED", 15));
console.log(checkTestData("PASSED", 2));


function checkTestData(result, duration) {
    if (result === null)
        return "Error: No result";
    if (duration < 0)
        return "Error: Negative duration";
    if (duration >= 10)
        return "Error: Duration too long";

    return "Valid: " + result + " in " + duration + "s";
}

console.log("\n*********************** Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome) **************************\n");

let statusCode = 500; // `200`, `201`, `400`, `401`, `403`, `404`, `500`, `502`, `503`, `418`

switch (statusCode) {
    case 200:
        console.log("✅ 200 OK — request successful");
        break;
    case 201:
        // "✅ 201 Created — resource created"
        break;
    case 400:
    case 401:
    case 403:
        console.log("❌ Client error — check your request");
        // (400, 401, and 403 all print the same message — intentional fall-through)
        break;
    case 404:
        console.log("❌ 404 Not Found — endpoint does not exist");
        break;
    case 500:
    case 502:
    case 503:
        console.log("🔥 Server error — backend issue");
        break;
    default:
        console.log("? Unknown status code: " + statusCode);
}


console.log("\n*********************** 8a: Switch on a computed value (grade buckets) **************************\n");

let score1 = 100;     // `100`, `95`, `85`, `75`, `65`, `55`

switch (Math.floor(score1 / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}


console.log("\n************************** 8b: Switch on `true` — range matching with expressions **************************\n");

let duration = 3.5;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}

console.log("\n************************** 8c: Tricky questions — predict the output before running **************************\n");
let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}

let x = 2;

switch (x) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("other");

}


