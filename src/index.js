/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0;;
  for (i = 0; i <= preferences.length; i++) {
    let a = preferences[i];
    let b = preferences[a - 1];
    let c = preferences[b -  1];

    if (c === (i + 1) && i != (a - 1) && i != (b -  1)){
      count++;
    }
  }
  return count/3;
};
