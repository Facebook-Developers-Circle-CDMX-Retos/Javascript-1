const findNumber = function (number) {
  let x = 0;
  for(let i = 1; i<=number;i++){
    if(number%i === 0) {
      x++;
    }
  }
  return x >= 2;
};

module.exports = findNumber;
