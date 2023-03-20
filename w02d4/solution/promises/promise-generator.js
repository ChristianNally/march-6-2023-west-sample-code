
const returnPromise = (name, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`yay! resolved!: ${name}`), delay);
  });
};

const returnRejectedPromise = (name, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${name}`), delay);
  });
};

const returnRandomPromise = (name, delay = 1000) => {
  const num = Math.floor(Math.random() * 2);
  if (num < 1) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`yay! resolved!: ${name}`), delay);
    });
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(`doh! rejected: ${name}`), delay);
  });
};

module.exports = {
  returnPromise,
  returnRejectedPromise,
  returnRandomPromise
}
