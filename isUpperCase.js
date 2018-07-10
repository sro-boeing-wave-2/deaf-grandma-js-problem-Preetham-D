/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  let a = false;
  if (s === s.toUpperCase()) {
    a = true;
  }
  return (a);
};

module.exports = isUppercase;
