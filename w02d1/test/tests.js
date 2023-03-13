const assert = require("assert");
const objectOfFunctions = require('../hello-world');

// testing our functions

describe('salutation tests', () => {
  it('says Hello to the person we expect it to', () => {
    const expected = 'Hello, World!';
    const actual = objectOfFunctions.sayHello('World');
    assert.equal(expected, actual);
  });
  
  it('says Goodbye to the person we expect it to', () => {
    const expected2 = 'Goodbye, World';
    const actual2 = objectOfFunctions.sayGoodbye('World');
    assert.equal(expected2, actual2);
  });  
});

