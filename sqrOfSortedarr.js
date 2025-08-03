const sqrFun = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * arr[i];
  }
  return result.sort((a, b) => a - b);
};
const arr = [-7, -3, 2, 3, 11];
console.log(sqrFun(arr));
