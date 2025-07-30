const smallerThanCur = (arr) => {
  let tempArr = Array.from(new Set(arr)).sort((a, b) => a - b);
  let obj = {};
  for (let i = 0; i < tempArr.length; i++) {
    obj[tempArr[i]] = i;
  }
  let result = arr.map((val) => obj[val]);
  return result;
};

const arr = [6, 5, 4, 8, 5];
console.log(smallerThanCur(arr));
