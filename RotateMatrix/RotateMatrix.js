function rotateMatrix(matrix) {
  // Empty matrix to be returned.
  const result = [];
  const size = matrix.length;

  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
      // If not an array, make a new one.
      if (!Array.isArray(result[j])) {
        result[j] = [];
      }

      // result[j] will be a column (and move left -> right)
      // matrix[i][j] will find the rotated value and unshift
      result[j].unshift(matrix[i][j])
    }
  }

  return result;
}
