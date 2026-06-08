/*

- Map
- Error handling

- try, catch, finally
- throw an error 
- structure of that error object
*/

function testElementInteraction(element) {
  try {
    // This could throw different types of errors
    if (element === null) {
      throw new TypeError("Element cannot be null");
    }
    //e = new TypeError()

    if (element.index < 0 || element.index > 100) {
      throw new RangeError("Element index out of valid range (0-100)");
    }

    if (!element.selector) {
      throw new ReferenceError("Selector property not found");
    }

    console.log(`  ✓ Element valid: ${element.selector}`);
  } catch (testError) {
    if (e instanceof TypeError) {
      console.log(`  ⚠ TYPE ERROR: ${e.message}`);
      console.log("     → Check if element is properly initialized");
    } else if (e instanceof RangeError) {
      console.log(`  ⚠ RANGE ERROR: ${e.message}`);
      console.log("     → Element index should be between 0-100");
    } else if (e instanceof ReferenceError) {
      console.log(`  ⚠ REFERENCE ERROR: ${e.message}`);
      console.log("     → Make sure selector property exists");
    } else {
      // Unknown error type - rethrow it
      console.log(`  ❌ UNEXPECTED ERROR: ${e.message}`);
      throw e;
    }
  }
}
testElementInteraction(null);
let a = 5;
console.log(a);


class TestFrameworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "TestFrameworkError";
  }
}

class NoSuchElementError extends TestFrameworkError {
  constructor(message) {
    super(message);
    this.name = "NoSuchElementError";
  }
}