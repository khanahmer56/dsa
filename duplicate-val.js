const duplicate = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = (obj[arr[i]] || 0) + 1;

    if (obj[arr[i]] > 1) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, 5];
console.log(duplicate(arr));
