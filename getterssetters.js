class TestConfiguration {
  constructor() {
    this._timeout = 30000;
    this._retries = 2;
    this._browserName = "chromium";
  }

  // Getter - computed property , reading the value of a instance variable or its computed value
  //Get is to read the instance variable value,
  //set is to change the value of your instance variables
  get timeout() {
    console.log(`  Getting timeout: ${this._timeout}ms`);
    return this._timeout;
  }

  // Setter - with validation
  set timeout(value) {
    if (value < 1000) {
      console.log(`  ❌ Timeout too short! Minimum is 1000ms`);
      this._timeout = 1000;
    } else if (value > 300000) {
      console.log(`  ❌ Timeout too long! Maximum is 300000ms`);
      this._timeout = 300000;
    } else {
      console.log(`  ✓ Setting timeout to: ${value}ms`);
      this._timeout = value;
    }
  }

  get retries() {
    return this._retries;
  }

  set retries(value) {
    if (value < 0) {
      console.log(`  ❌ Retries cannot be negative!`);
      this._retries = 0;
    } else if (value > 5) {
      console.log(`  ⚠️  Too many retries! Setting to maximum: 5`);
      this._retries = 5;
    } else {
      console.log(`  ✓ Setting retries to: ${value}`);
      this._retries = value;
    }
  }

  // Getter with computation
  get timeoutInSeconds() {
    return this._timeout / 1000;
  }

  // Read-only property (getter without setter)
  get browserName() {
    return this._browserName.toUpperCase();
  }
}

let config = new TestConfiguration();
config.timeout = 5000; //here the setter methods is called
console.log(config.timeout); //getter method is called.
config.retries = 3;
