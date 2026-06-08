let a = 5;
let b = a;
console.log(a, b);
b = 7;
console.log(a, b);

let configObj = { browser: "Chrome", timeout: 30000 };

let config = configObj;
config.timeout = 5000;
console.log(configObj, config);
