"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Find the shortest string in an array.
 * In the case of a tie, returns the earlier string in the array.
 *
 * @param stringArr array of strings
 * @returns the shortest string
 */
function findShortestString(stringArr) {
  let shortestString = stringArr[0];
  for (const str of stringArr) {
    if (str.length < shortestString.length) {
      shortestString = str;
    }
  }
  return shortestString;
}
exports.default = findShortestString;
