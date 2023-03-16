const assert = require("chai").assert;
const objectOfFunctions = require('../hello-world');

// testing our functions

describe('salutation tests', () => {
  it('makes breakfast for you!', () => {
    makeBreakfast();
  });

  it('says Hello to the person we expect it to', () => {
    const expected = 'Hello, World';
    const actual = objectOfFunctions.sayHello('World');
    assert.equal(actual, expected);
  });
  
  it('says Goodbye to the person we expect it to', () => {
    const expected2 = 'Goodbye, World';
    const actual2 = objectOfFunctions.sayGoodbye('World');
    assert.equal(actual2, expected2);
  });
});
