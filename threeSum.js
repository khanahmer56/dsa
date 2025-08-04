const threeSum = (arr) => {
  let result = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length - 2; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) continue;
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[left] + arr[i] + arr[right];
      if (sum == 0) {
        result.push([arr[i], arr[left], arr[right]]);
        while (arr[left] === arr[left + 1]) left++;
        while (arr[right] === arr[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
const arr = [0, 0, 0, 0, 0, 0];
console.log(threeSum(arr));
