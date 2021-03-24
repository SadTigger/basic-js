const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string' || sampleActivity === undefined) return false
  if (sampleActivity === '' || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0) return false
  if (parseFloat(sampleActivity) > MODERN_ACTIVITY) return false

  let number = 0;
  number = Math.log(parseFloat(sampleActivity) / MODERN_ACTIVITY) / (-0.693) * HALF_LIFE_PERIOD
  return Math.ceil(number)
};
