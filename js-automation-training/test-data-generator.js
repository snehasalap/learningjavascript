function generateTestUser(firstName, lastName) {
    return {
        name: `${firstName} ${lastName}`,
        email: generateEmail(firstName, lastName),
        username: generateUsername(firstName, lastName),
        password: "Test@123",
        userId: 1000,
        isActive: true
    };
}

// Use helper functions from Part 1
let user1 = generateTestUser("John", "Doe");
let user2 = generateTestUser("Jane", "Smith");

function 
console.log(user1);
console.log(user2);
