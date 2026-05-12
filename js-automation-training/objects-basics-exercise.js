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


