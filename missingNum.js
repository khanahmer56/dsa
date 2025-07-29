const missingNum = (arr) => {
  const n = arr.length;
  const totalSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((a, b) => {
    return a + b;
  }, 0);

  return totalSum - actualSum;
};

const arr = [1, 3, 2, 4, 7, 6, 8, 9, 0];
console.log(missingNum(arr));
