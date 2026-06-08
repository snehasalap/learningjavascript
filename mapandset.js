/*
Revision
- wrapper classes
- auto boxing and unboxing
- string, boolean, and number
- collections, 
- Set
- converting set into array. 
*/

let testResults = new Map([
  ["Search Test", "Failed"],
  ["Logout Test", "Skipped"],
]);
testResults.set("Login Test", "Passed");
testResults.set("Cart Test", "Failed");
testResults.set("Login Test", "Passed");

testResults.set("Credit Card", "Passed").set("DEbit Card", "Passed");

let testConfig = new Map();

testConfig.set(1, "First Test");
testConfig.set(2, "Second Test");
testConfig.set(3, "Third Test");
testConfig.set(true, "enabled");
testConfig.set(false, "disabled");

console.log(testConfig);

let testObj = { name: "Login" };

testConfig.set(testObj, "Login configuration");
console.log(testConfig);

console.log(testConfig.get(2));

let runConfig = new Map()
  .set("browser", "Chrome")
  .set("timeout", 30000)
  .set("headless", true)
  .set("retries", 3)
  .set("baseUrl", "https://staging.example.com");

let configObj = { browser: "Chrome", timeout: 30000 };
configMap = new Map(Object.entries(configObj));
console.log(configMap);

configMap.forEach((value, key) => {
  console.log(value, key);
});

for (let [key, value] of configMap) {
  console.log(value, key);
  console.log(key, value);
}

try {
  let keys = [...configMap.keys()];
  console.log(key);
  //   if (keys[0] === "browser") {
  //     throw new Error("There is an Error in Test Execution");
  //   }
} catch (error) {
  console.log(error);
  console.log(error.message);
  console.log(error.name);
  console.log(error.stack.split("\n")[1]);

  console.log("There is an Error");
} finally {
  console.log("Close Browser");
  console.log("Close DB connection");
}

let values = [...configMap.values()];
console.log(values);

let entries = [...configMap.entries()];
console.log(entries);
