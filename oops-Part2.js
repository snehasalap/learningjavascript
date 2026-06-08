/*
classes
objects
constructor
instance variables

encapsulation
access modifiers
abstraction 

private instance variables

*/

class BaseTest {
  name;
  constructor(name) {
    this.name = name;
    this.status = "PENDING";
    this.errors = [];
  }

  start() {
    console.log(`  Starting: ${this.name}`);
    this.status = "RUNNING";
  }

  fail(error) {
    this.errors.push(error);
    this.status = "FAILED";
    console.log(`  ✗ ${this.name} FAILED: ${error}`);
  }

  pass() {
    this.status = "PASSED";
    console.log(`  ✓ ${this.name} PASSED`);
  }
}

class UITest extends BaseTest {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
}

let uiTest = new UITest("UI Test", "Smoke");
uiTest.start();
uiTest.pass();

class APITest extends BaseTest {
  constructor(name, endpoint, method = "GET") {
    super(name);
    this.endpoint = endpoint;
    this.method = method;
    this.responseTime = 0;
  }

  sendRequest() {
    console.log(`    ${this.method} ${this.endpoint}`);
    this.responseTime = Math.random() * 500;
    console.log(`    Response time: ${this.responseTime.toFixed(2)}ms`);
  }

  start() {
    super.start();
    this.sendRequest();
  }
}

let getUsersAPITest = new APITest("Get Users API Test", "/api/users", "GET");
getUsersAPITest.start();

class BackEndAPITest extends APITest {
  constructor(name, endpoint, method = "POST") {
    super(name, endpoint, method);
  }

  sendRequest() {
    super.sendRequest();
    super.start();
    super.fail();
  }
}
