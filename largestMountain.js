const largestMountain = (arr) => {
  let maxLen = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    // Check if current element is a peak
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      let left = i - 1;
      let right = i + 1;

      // Expand to the left
      while (left > 0 && arr[left] > arr[left - 1]) {
        left--;
      }

      // Expand to the right
      while (right < arr.length - 1 && arr[right] > arr[right + 1]) {
        right++;
      }

      // Calculate mountain length
      let currentLen = right - left + 1;
      maxLen = Math.max(maxLen, currentLen);
    }
  }

  return maxLen;
};

const arr = [2, 1, 4, 7, 3, 2, 5];
console.log(largestMountain(arr)); // Output: 5
