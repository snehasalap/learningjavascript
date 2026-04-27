// ── IMPLICIT COERCION ────────────────────────────────────────────────────────

console.log("--- Implicit Coercion (JavaScript does it silently) ---\n");

// + with a string means CONCATENATE, not add
console.log('"5" + 3        → ' + ("5" + 3)); // "53"   ← surprise!
console.log('"5" + "3"      → ' + ("5" + "3")); // "53"
console.log("5   + 3        → " + (5 + 3)); // 8    ← actual addition

console.log();

// -, *, / with a numeric string — JS converts the string to a number first
console.log('"10" - 3       → ' + ("10" - 3)); // 7    ← coerced to number
console.log('"10" * 2       → ' + "10" * 2); // 20
console.log('"10" / 2       → ' + "10" / 2); // 5
console.log('"abc" - 1      → ' + ("abc" - 1)); // NaN  ← can't convert "abc"

console.log();

// Boolean coercion in arithmetic
console.log("true  + 1      → " + (true + 1)); // 2   (true  = 1)
console.log("false + 1      → " + (false + 1)); // 1   (false = 0)
console.log("null  + 1      → " + (null + 1)); // 1   (null  = 0)

// ── NaN ──────────────────────────────────────────────────────────────────────

console.log("--- NaN (Not a Number) ---\n");
console.log("NaN is the result of a failed numeric conversion or bad math.\n");

console.log('Number("abc")  → ' + Number("abc")); // NaN
console.log('Number("")     → ' + Number("")); // 0  ← not NaN, watch out!
console.log('"abc" * 2      → ' + "abc" * 2); // NaN
console.log("0 / 0          → " + 0 / 0); // NaN
console.log("Math.sqrt(-1)  → " + Math.sqrt(-1)); // NaN

console.log();

// ── EXPLICIT COERCION ────────────────────────────────────────────────────────

console.log("--- Explicit Coercion (you convert on purpose) ---\n");

// To Number
console.log('Number("42")       → ' + Number("42")); // 42
console.log('Number("3.14")     → ' + Number("3.14")); // 3.14
console.log("Number(true)       → " + Number(true)); // 1
console.log("Number(false)      → " + Number(false)); // 0
console.log("Number(null)       → " + Number(null)); // 0
console.log("Number(undefined)  → " + Number(undefined)); // NaN
console.log('Number("")         → ' + Number("")); // 0  ← watch out!
console.log('Number("42px")     → ' + Number("42px")); // NaN

console.log();

// parseInt / parseFloat — extract a number from the START of a string
console.log('parseInt("42px")       → ' + parseInt("42px")); // 42  ← stops at non-digit
console.log('parseInt("3.9")        → ' + parseInt("3.9")); // 3   ← drops decimal
console.log('parseFloat("3.14rem")  → ' + parseFloat("3.14rem")); // 3.14
console.log('parseInt("px42")       → ' + parseInt("px42")); // NaN ← must START with digit

console.log();

// To String
console.log("String(42)         → " + String(42)); // "42"
console.log("String(true)       → " + String(true)); // "true"
console.log("String(null)       → " + String(null)); // "null"
console.log("String(undefined)  → " + String(undefined)); // "undefined"
console.log("(42).toString()    → " + (42).toString()); // "42"

console.log();

// To Boolean
console.log("Boolean(0)         → " + Boolean(0)); // false
console.log('Boolean("")        → ' + Boolean("")); // false
console.log("Boolean(null)      → " + Boolean(null)); // false
console.log("Boolean(undefined) → " + Boolean(undefined)); // false
console.log("Boolean(1)         → " + Boolean(1)); // true
console.log('Boolean("hello")   → ' + Boolean("hello")); // true
console.log("Boolean([])        → " + Boolean([])); // true  ← empty array!

// ── TESTING SCENARIOS ────────────────────────────────────────────────────────

console.log("\n--- Testing Scenarios Where Coercion Bites ---\n");

// Scenario 1: API returns numbers as strings
let apiResponse = { userId: "1001", score: "87.5", active: "true" };

console.log(
  "API returned userId:",
  apiResponse.userId,
  typeof apiResponse.userId,
);

let userId2 = Number(apiResponse.userId);
let userScore = parseFloat(apiResponse.score);
console.log("After conversion  → userId:", userId2, typeof userId2);
console.log("After conversion  → score: ", userScore, typeof userScore);

// "true" as a string is truthy but !== true
console.log(
  '\n"true" (string) === true (boolean):',
  apiResponse.active === true,
); // false!
console.log(
  '"true" (string) is truthy:           ',
  Boolean(apiResponse.active),
); // true
console.log(
  'Fix: apiResponse.active === "true":   ',
  apiResponse.active === "true",
); // true

console.log();

// Scenario 2: Concatenating instead of adding
let testsRun = "10"; // came from a form input — always a string!
let testsPassed = 8;

console.log("testsRun + testsPassed    (bug)  → " + (testsRun + testsPassed)); // "108" ← wrong!
console.log(
  "Number(testsRun) + testsPassed   → " + (Number(testsRun) + testsPassed),
); // 18  ← correct

console.log();

// Scenario 3: Checking a count that came back as a string
let failCount = "0"; // API returned "0" as string

console.log("failCount === 0          → " + (failCount === 0)); // false! different types
console.log("Number(failCount) === 0  → " + (Number(failCount) === 0)); // true  ← correct check
console.log("failCount == 0           → " + (failCount == 0)); // true (coercion) but avoid ==

console.log("\n=== COERCION SUMMARY ===\n");
console.log("Implicit coercion rules:");
console.log("  + with any string → concatenation (both sides become strings)");
console.log("  -, *, / → operands coerced to numbers");
console.log("  == coerces types; === does not — always use ===");
console.log();
console.log("Explicit coercion tools:");
console.log("  Number()       — convert to number (strict; 'abc' → NaN)");
console.log("  parseInt()     — extract integer from start of string");
console.log("  parseFloat()   — extract decimal from start of string");
console.log("  String()       — convert anything to a string");
console.log("  Boolean()      — convert anything to true/false");
