const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard/* matrix */) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here

  let number = 0;
  backyard.flat().forEach(element => {
    if (element === '^^') {
      number += 1;
    }
  });
  return number
};
