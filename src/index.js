module.exports = function towelSort (matrix) {

  if (matrix === undefined) {
    return [];
  }

  let arrSort = [];

  for (let i = 0; i < matrix.length; i++) {
    arrSort = arrSort.concat(i % 2 ? matrix[i].reverse() : matrix[i]);
  }

  return arrSort;
}
