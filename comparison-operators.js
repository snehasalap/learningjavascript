// if statements are control flow statment
let responseTime = 3;
let threshold = 3;

console.log("Response time: " + responseTime + " seconds");
console.log("Threshold: " + threshold + " seconds");

if (responseTime <= threshold) {
  console.log("❌ Response too slow");
} else {
  console.log("✅ Response time acceptable");
}

let testStatus = "PASSED";

console.log("Status: " + testStatus);

if (testStatus === "PASSED") {
  console.log("✅ Test passed");
} else {
  console.log("❌ Test did not pass");
}

let errorCount = 0;

console.log("Error count: " + errorCount);

if (errorCount != 0) {
  console.log("❌ Errors detected: " + errorCount);
} else {
  console.log("✅ No errors");
}

console.log("--- Same type: == and === give the same result ---\n");
//== is loose equal to it does not match the type.
console.log("5 == 5:                " + (5 == 5));
console.log('"5"  == 5:             ' + ("5" == 5)); //true
console.log('"5"  == 5:             ' + ("5" === 5)); //false
console.log("0    == false:         " + (0 == false)); //true //false is coerced to 0
console.log("0    == false:         " + (0 === false)); //false

console.log("null == undefined:     " + (null == undefined)); //true
console.log("null == undefined:     " + (null === undefined));

console.log('"5"  != 5:             ' + ("5" != 5)); // false ← they ARE == after coercion
console.log('"5"  !== 5:            ' + ("5" !== 5)); // true  ← different types

/*
("5"  != 5)
(5 != 5) - false

("5"  !== 5)
if data type itself is not same comparison fails. No coercion done in this case. 
*/
