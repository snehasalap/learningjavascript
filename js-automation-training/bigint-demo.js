// What does this print?
let max = Number.MAX_SAFE_INTEGER;
console.log(max + 1);  // ?
console.log(max + 2);  // ?
console.log(max + 3);  // ?

// Fix with BigInt
let bigMax = 9007199254740991n;
console.log(bigMax + 1n);  // ?
console.log(bigMax + 2n);  // ?
console.log(bigMax + 3n);  // ?

console.log("Type of BigInt:", typeof(bigMax));

let a = 10;
let b = 20n;

try {
    console.log("Sum of number and bigint:", a+b);
} catch (error) {
    console.log("Observed Error:", error);
}
