/*

- getters and setters
- inheritance
- super
- static
- overriding
- polymorphism
- 

*/

//inheritance - one class inherting other class
//composition - one class using the other class

//number, string, boolean, null, undefined - Primitive data types (they are not objects, classes)
//primitives do not have any methods which you can call.

let fName = "Mark";
console.log(typeof fName);
console.log(fName.toUpperCase());
//when you call a method on primitive, JavaScript first converts a primitive to an object.
//That object is of a wrapper class of that primitive.
//For primitive data types, JavaScript provides their corresponding wrapper classes.

let lName = new String("Bill");
console.log(typeof lName);

let salary = 65000;
console.log(salary.toFixed(2));

//Number
//Boolean

let taxAmount = new Number(2000);

let netAmount = salary - taxAmount; //JS does unboxing of taxAmount to primitive and then does the operation
console.log(netAmount);

//Then JavaScript does not do auto boxing or unboxing.

let abc = new Number(5) == 5; //JS does auto unboxing of object to primitive number then does the comparison
console.log(abc);

abc = new Number(5) === 5; //auto boxing or unboxing does not work
console.log(abc);

abc = "5";
console.log(abc.toUpperCase());
