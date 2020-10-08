const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let countOfDepths = [];
    if (!Array.isArray(arr)) {
      return 0;
    };

    if (arr.length == 0) {
      return 1;
    };
    
    arr.forEach(elem => countOfDepths.push(this.calculateDepth(elem)))
    return 1 + Math.max( ...countOfDepths );
  };
};