setTimeout(function () {
  console.log("Step1: Browser Opened");
  setTimeout(function () {
    console.log("Step2: Page Loaded"); //5 sec
    setTimeout(function () {
      console.log("Step3: Fill The Form"); //15 sec
    }, 4000);
  }, 2000);
}, 3000);

// setTimeout(function () {
//   console.log("Step2: Page Loaded"); //5 sec
// }, 2000);

//console.log("Step3: Fill The Form"); //15 sec
console.log("Step4: Click Submit"); // 4 sec

/*

synchronus
asynchronus

*/
