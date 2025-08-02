const dfs = (grid, i, j) => {
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= arr[0].length ||
    grid[i][j] === 0
  ) {
    return;
  }
  grid[i][j] = 0;
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
};
const numOfIsland = (arr) => {
  if (arr.length == 0 || arr[0].length == 0) {
    return 0;
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] == 1) {
        dfs(arr, i, j);
        count++;
      }
    }
  }
  return count;
};

const arr = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 1],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1],
];
console.log(numOfIsland(arr));
