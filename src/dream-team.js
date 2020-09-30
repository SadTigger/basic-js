const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false
  if (members == null || members === undefined) return false
  
  let array;
  array = members.filter(el => typeof(el) === 'string');
  return array.map(el => el.trim().slice(0,1).toUpperCase()).sort().join('');
};
