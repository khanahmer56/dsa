const disappearedNum = (arr) => {
  let tempArr = new Array(arr.length + 1).fill(0);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr[arr[i]] = 1;
  }
  for (let i = 1; i < tempArr.length; i++) {
    if (tempArr[i] === 0) {
      result.push(i);
    }
  }
  return result;
};

const arr1 = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(disappearedNum(arr1));
