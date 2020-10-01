const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let defaultRepeatTimes = 0
  let defaultSeparator = '+';
  let defaultAddition = '';
  let defaultAdditionTimes = 0;
  let defaultadditionSeparator = '';
  if (str === null) {
    str = 'null'
  }
  if (str === true) {
    str = 'true'
  }
  if (options['repeatTimes'] !== undefined ) {
    defaultRepeatTimes = options['repeatTimes'] - 1
  }
  if (options['separator'] !== undefined) {
    defaultSeparator = options['separator'];
  }
  if (options['addition'] !== undefined) {
    defaultAddition = options['addition'];
  }
  if (options['additionRepeatTimes'] !== 0) {
    defaultAdditionTimes = options['additionRepeatTimes'] - 1;
  }
  if (options['additionSeparator'] !== undefined) {
    defaultadditionSeparator = options['additionSeparator'];
  }
  let zeroPattern = str + defaultAddition;
  let firstPattern = `${defaultadditionSeparator}${defaultAddition}`.repeat(defaultAdditionTimes);
  let secondPattern = `${defaultSeparator}${zeroPattern}${firstPattern}`.repeat(defaultRepeatTimes);
  
  return zeroPattern + firstPattern + secondPattern;
};  