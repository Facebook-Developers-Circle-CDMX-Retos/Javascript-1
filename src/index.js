const findNumber = function (number) {
  let counter = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) counter += 1;
  }
  return counter === 2 ? true : false;
};

module.exports = findNumber;
