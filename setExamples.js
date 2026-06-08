//Set and Map
//Set - collection of unique values.

let browsers = new Set(["Chrome", "Firefox", "Chrome"]);
//Set is a class in Javascript,
//when you use new keywork with a class, you are calling the constructor of that class
//and JS creates an object in the memory.

browsers.add("Firefox");
browsers.add("Chrome");
browsers.add("Opera");
browsers.add("Safari");
browsers.add("Chrome");
browsers.add("Safari");
console.log(browsers);
console.log(browsers.size);
//Map - collection of key value pairs
let uniqueValues = Array.from(browsers);
console.log(uniqueValues);

let uniqueVal = [...browsers];
console.log(uniqueVal);

browsers.forEach((value) => {
  console.log(value);
});

for (let value of browsers) {
  console.log(value);
}

browsers.has("Firefox");

browsers.clear();
browsers.delete("Chrome");
console.log(browsers);

//Map
