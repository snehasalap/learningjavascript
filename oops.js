/*
- oops
- error handling
- Map and Set
- wrapper classes
- callback, async-await, promises
*/

/*
objects are typically mapped to real world entities.

HRMS
- Employee
  (have attributes/properties,name, surname, id, address, blood group, dob, addEmp(), DeleteEmp(), EditEmp(), getEmp() )
- Managers
- Departments


*/

//Emp class - design, blueprint
//Emp Name?, Actual DoB,
//we create objects from classes.
//each object will have its own data.

class Test {
  name;
  priority;
  status;
  errors;
  // Constructor is a special function
  constructor(name, priority = "MEDIUM") {
    this.name = name;
    this.priority = priority;
    this.status = "PENDING";
    this.errors = [];
  }

  // Instance methods
  start() {
    console.log(`  Starting: ${this.name} (${this.priority} priority)`);
    this.status = "RUNNING";
  }

  fail(error) {
    this.errors.push(error);
    this.status = "FAILED";
    console.log(`  ✗ ${this.name} FAILED: ${error}`);
  }

  #pass() {
    this.status = "PASSED";
    console.log(`  ✓ ${this.name} PASSED`);
  }

  getReport() {
    return {
      name: this.name,
      priority: this.priority,
      status: this.status,
      errorCount: this.errors.length,
    };
  }
}

let uiTest = new Test("UI Test", "HIGH");
let apiTest = new Test("API Test");
let securityTest = new Test("Security Test");
let performanceTest = new Test();
//instance variables,

console.log(uiTest.status);
uiTest.start();
console.log(uiTest.status);

apiTest.start();
securityTest.start();
//uiTest.name = "1000000";

class TestSuite {
  // Public fields
  name = "Unnamed Suite";
  tests = [];

  // Private fields (# prefix)
  #apiKey = "secret-key-12345";
  #executionLog = [];

  constructor(name) {
    this.name = name;
  }

  addTest(testName) {
    this.tests.push(testName);
    this.#log(`Added test: ${testName}`);
  }

  // Private method
  #log(message) {
    let timestamp = new Date().toISOString();
    this.#executionLog.push(`[${timestamp}] ${message}`);
  }

  // Public method to access private data
  getLog() {
    return this.#executionLog;
  }

  run() {
    console.log(`  Running suite: ${this.name}`);
    console.log(`  Tests: ${this.tests.join(", ")}`);
    this.#log(`Suite executed with ${this.tests.length} tests`);
  }
}

let suite = new TestSuite("Smoke Tests");
suite.addTest("Login Test");
/*

Encapsulation is preventing important data to be directly exposed to outside world

User of your class ()
those who will create objects from your class. 


Car class, speed = 

new Car(); //120

setSpeed(200)

setSpeed(speed) {
if (speed<= 120) {
    this.speed = speed
} else {
    console.log("Sorry, speed cannot exeed 120");
    }

}


Abstraction
- hiding the details, hiding things, 

*/
