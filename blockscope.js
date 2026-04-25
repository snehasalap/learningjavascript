let score; //only declaration
score = 5; //initialisation
let lastName = "Steve"; //declaration as well as initialization
function demonstrateHoisting() {
  let option = 5;
  if (true) {
    //  console.log("Before declaration:", score); //Cannot use this will give error unlike in var
    let score = 100;
    console.log("After declaration:", score);
    console.log(score);
  }
  //hoisting
  console.log(score); //cannot use this as it is block scope and works within if only
}
//console.log(option);
demonstrateHoisting();
//console.log(score);//cannot as not declared at global level adn block scope let cannot be accessed

/*
var score1 = 5;
function demonstrateHoisting() {
  score1;
  if (true) {
    console.log("Before declaration:", score1);
    var score1 = 100;
    console.log("After declaration:", score1);
  }
  //var score1 = 100; //can be reassigned.

  console.log("Outside block", score1);
}
demonstrateHoisting();
console.log(score1);
//console.log(score1);
*/

/*
var is not a block scope
var is function scoped
*/
