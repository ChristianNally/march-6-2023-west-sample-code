// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (person) => {
  let output = '';
  output = `Hello, ${person}`;
  return output;
};

const sayGoodbye = (person) => {
  let output = '';
  output = `Goodbye, ${person}`;
  return output;
};

// make the functions exportable
module.exports = {sayHello, sayGoodbye};
