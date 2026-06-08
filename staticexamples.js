/*
static variables and static methods
- instance variables? I hve 10 objects, 10 copies
- static variable companyName, I have 10 objects, only one. 

*/

class TestRunner {
  // Static property
  static totalTestsRun = 0;
  static passedTests = 0;
  static failedTests = 0;
  name = "ABC";

  constructor(name) {
    this.name = name;
    this.status = "PENDING";
  }

  // Instance method
  run() {
    console.log(`  Running: ${this.name}`);
    TestRunner.totalTestsRun++; // Access static property

    // Simulate test
    this.status = Math.random() > 0.3 ? "PASSED" : "FAILED";

    if (this.status === "PASSED") {
      TestRunner.passedTests++;
    } else {
      TestRunner.failedTests++;
    }

    console.log(`    Result: ${this.status}`);
  }

  // Static method - Utility function
  static getSuccessRate() {
    if (TestRunner.totalTestsRun === 0) return 0;
    return ((TestRunner.passedTests / TestRunner.totalTestsRun) * 100).toFixed(
      1,
    );
  }

  // Static method - Report
  static printReport() {
    console.log(`\n  📊 Test Report:`);
    console.log(`    Total: ${TestRunner.totalTestsRun}`);
    console.log(`    Passed: ${TestRunner.passedTests}`);
    console.log(`    Failed: ${TestRunner.failedTests}`);
    console.log(`    Success Rate: ${TestRunner.getSuccessRate()}%`);
  }

  // Static method - Factory method
  static createSmokeTest(name) {
    console.log(`  Factory: Creating smoke test "${name}"`);
    return new TestRunner(`[SMOKE] ${name}`);
  }

  // Static method - Reset
  static reset() {
    TestRunner.totalTestsRun = 0;
    TestRunner.passedTests = 0;
    TestRunner.failedTests = 0;
    console.log(`  Reset all test counters`);
  }
}

/*
To call a methods inside a class, we need to create an object first.
To use a instance variable defined inside a class, we need to create an object first.
BUT,
to use static variable, you do not need any object of the class
to use static methods, you do not need any object of the class.
*/

console.log(TestRunner.totalTestsRun);
console.log(TestRunner.passedTests);
TestRunner.createSmokeTest("UI");
TestRunner.run();
