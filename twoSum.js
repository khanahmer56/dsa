const twoSum = (nums, target) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    console.log(obj);
    if (obj.hasOwnProperty(diff)) {
      return [obj[diff], i];
    }
    obj[nums[i]] = i;
  }
  console.log(obj);
};

const arr = [2, 7, 11, 15];
console.log(twoSum(arr, 9));
