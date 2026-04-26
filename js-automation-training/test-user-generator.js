"use strict"

let user1FirstName = "John";
let user1LastName = "Doe";
let user1Email = "john.doe@test.com";
let user1Password = "JohnPass@123";

let user2FirstName = "Jane";
let user2LastName = "Smith";
let user2Email = "jane.smith@test.com";
let user2Password = "JanePass@456";

let user3FirstName = "Bob";
let user3LastName = "Johnson";
let user3Email = "bob.johnson@test.com";
let user3Password = "BobPass@789";


console.log("```");
console.log("==========================================");
console.log("             TEST USER DATABASE");
console.log("==========================================");
console.log();

function printTestUserData(firstName, lastName, email, password){
    console.log("--------");
    console.log("Name: " + firstName + " " + lastName);
    console.log("Email: ", email);
    console.log("Password: ", password);
    console.log();
}


console.log("USER 1:");
printTestUserData(user1FirstName, user1LastName, user1Email, user1Password);
console.log("USER 2:");
printTestUserData(user2FirstName, user2LastName, user2Email, user2Password);
console.log("USER 3:");
printTestUserData(user3FirstName, user3LastName, user3Email, user3Password);



    console.log("==========================================");
    console.log("Total Users: 3");
    console.log("==========================================");

console.log("```");