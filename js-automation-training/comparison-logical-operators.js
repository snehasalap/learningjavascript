// **************** Age Range Validation ****************
console.log();
console.log("**************** Age Range Validation ****************");
let age = 25; // 25|18|17|65|66|25
if (age >= 18 && age <=65) {

    console.log("Age:", age);
    console.log("✅ Valid age range (18-65)");
} else {
    console.log("Age:", age);
    console.log("❌ Age must be between 18 and 65");
}
console.log();


// **************** Login Credentials Validator ****************

console.log();
console.log("**************** Login Credentials Validator ****************");
console.log();

let username = "testuser";
let password = "Test@123";
let email = "";

if ((username !== "" && password !== "") || email !== "") {
    console.log("Checking credentials...");
    console.log("Username:", username);
    console.log("Password:", "********");
    console.log("Email:", email);
    console.log("✅ Sufficient login credentials");
} else {
    console.log("Checking credentials...");
    console.log("Username:", username);
    console.log("Password:", "********");
    console.log("Email:", email);
    console.log("❌ Insufficient credentials - provide username+password OR email");
}
console.log();


// **************** Test Status Validator ****************

console.log();
console.log("**************** Test Status Validator ****************");
console.log();

let status = "SKIPPED";  // PASSED | SKIPPED | FAILED
let errorCount = 0;     // 0 | 2 
let isStatusValid = (status === "PASSED" || status === "FAILED" || status === "SKIPPED" )
let noErrors = errorCount === 0;

if ((status === "PASSED" || status === "SKIPPED") && errorCount == 0) {
    console.log("Test Status:", status);
    console.log("Error Count:", errorCount);
    console.log()
    
    console.log("Validation:");
    console.log(" Status is acceptable:", isStatusValid);
    console.log(" No errors:", noErrors);
    console.log();
    
    console.log("✅ Test completed successfully");
} else {
    console.log("Test Status:", status);
    console.log("Error Count:", errorCount);
    console.log("❌ Test has issues");
}
console.log();
    

// **************** Response Time Validator ****************

console.log();
console.log("**************** Response Time Validator ****************");
console.log();

let responseTime = 3.5;     // 2.5 | 3.0 | 2.999 | 3.5
const threshold = 3;

console.log("Response Time Test");
console.log("Threshold: " + threshold + " seconds");
console.log("Actual: " + responseTime + " seconds");

if (responseTime < threshold) {
    console.log("✅ Performance test PASSED (response time: " + responseTime + " seconds)");
} else {
    console.log("❌ Performance test FAILED (response time: " + responseTime + " seconds,) threshold: " + threshold + " seconds)");
}
    console.log();
        
    
// **************** Challenge: Complete Test User Validator ****************

console.log();
console.log("**************** Challenge: Complete Test User Validator ****************");
console.log();

function validateCompleteUser(username, password, email, age) {
    console.log();
    console.log("Validating test user...\n");

    if (username === "" || username.length <= 3 || username.length >= 20){
        console.log("Checking username... ✗");
        return "❌ Username must be 3-20 characters (current: " + username.length + ")";
    }
    
    if (password === "" || password.length < 8){
        console.log("Checking password... ✗");
        return "❌ Password must be at least 8 characters (current: " + password.length + ")";
    }
    
    if (email === "" || !email.includes("@") || !email.includes(".")){
        console.log("Checking email... ✗");
        return "❌ Email address must contain '@' and '.'";
    }
    
    if (age <= 18 || age >= 120){
        console.log("Checking age... ✗");
        return "❌ Age must be between 18 to 120";
    }

    console.log("Checking username... ✓");
    console.log("Checking password... ✓");
    console.log("Checking email... ✓");
    console.log("Checking age... ✓");

    return "✅ All validations passed - User is valid!";
}

// Test with valid user
let result = validateCompleteUser(
    "testuser",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);

// Test with invalid user (short username)
result = validateCompleteUser(
    "ab",
    "Test@123",
    "test@example.com",
    25
);
console.log(result);

// Test with invalid password
result = validateCompleteUser(
    "abcdefghi",
    "Test@12",
    "test@example.com",
    25
);
console.log(result);

// Test with invalid email
result = validateCompleteUser(
    "abcdefghi",
    "Test@123",
    "test@examplecom",
    25
);
console.log(result);
// Test with invalid age
result = validateCompleteUser(
    "abcdefghi",
    "Test@123",
    "test@example.com",
    12
);
console.log(result);