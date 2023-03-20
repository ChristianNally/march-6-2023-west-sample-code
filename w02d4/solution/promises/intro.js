const promiseGenerator = require('./promise-generator');
const returnPromise = promiseGenerator.returnPromise;

const promise = returnPromise('first promise', 4444);
console.log('promise:',promise);

console.log('first');
// console.log('second');

// // Not the best way to do this
// setTimeout(()=>{
//   console.log('promise 6 seconds later:',promise);
// },6000);

//
// The RIGHT way to do this
//

promise
  .then((data) => {
    console.log('third');
    console.log('data:', data);
    return returnPromise('second promise', 2000);
  })
  .then((data) => {
    console.log('data (the second version)', data);
  });
