const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error()
  if (arr.length == 0) return arr;

  let result = []
  let discardFlag = false
  for (let index = 0; index < arr.length; index++) {
    switch(arr[index]) {
      case '--discard-prev':
        if (result.length !== 0 && discardFlag != true) {
          result.pop();
        }
        break;
      case '--discard-next':

        if (index < arr.length - 1) {

          discardFlag = true
          index++;
        };
        break;
      case '--double-prev':
        if (arr[index - 1] !== undefined  && discardFlag != true) {
          result.push(arr[index - 1]);
        }
        break;
      case '--double-next':
        if (arr[index + 1] !== undefined) {
          result.push(arr[index + 1]);
        };
        break;
      default:
        result.push(arr[index]);
        discardFlag = false
        break;
    };
  };
  return result;
}; 
