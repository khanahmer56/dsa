const spiralMatrix = (arr) => {
  let rowBegin = 0;
  let rowEnd = arr.length - 1;
  let colBegin = 0;
  let colEnd = arr[0].length - 1;
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      console.log(arr[rowBegin][i]);
    }
    rowBegin++;
    for (let i = rowBegin; i <= rowEnd; i++) {
      console.log(arr[i][colEnd]);
    }
    colEnd--;
    if (rowBegin <= rowEnd) {
      for (let i = colEnd; i >= colBegin; i--) {
        console.log(arr[rowEnd][i]);
      }
      rowEnd--;
    }
    if (colBegin <= colEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        console.log(arr[i][colBegin]);
      }
      colBegin++;
    }
  }
};
const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
spiralMatrix(arr);
