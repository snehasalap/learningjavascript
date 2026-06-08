/*
- callback functions
- 

*/

function ping(url) {
  return new Promise((resolve, reject) => {
    if (url.startsWith("https")) {
      resolve(200);
    } else {
      reject("400");
    }
  });
}

ping("http://www.google.com")
  .then((code) => console.log("Operation success with code - ", code))
  .catch((errorCode) =>
    console.log("Operation failed with error - ", errorCode),
  );

loginTest();

let a = 3 + 4;

let testScores = [85, 92, 78, 95, 88, 73, 90];

console.log("Checking for specific scores...");

console.log(
  "Score 95 found: " + testScores.includes(95)
    ? "Yes (at index " + testScores.indexOf(95) + ")"
    : "No",
); //why + is not concatinating??
console.log(
  "Score 95 found: ",
  testScores.includes(95)
    ? "Yes (at index " + testScores.indexOf(95) + ")"
    : "No",
);
