const BestTSellnBuy = (arr) => {
  let left = 0;
  let right = 1;
  let maxProfit = 0;
  while (right < arr.length) {
    if (arr[right] > arr[left]) {
      let profit = arr[right] - arr[left];

      maxProfit = Math.max(profit, maxProfit);
    } else {
      left = right;
    }
    right++;
  }
  return maxProfit;
};
const arr = [7, 1, 5, 3, 6, 4];
console.log(BestTSellnBuy(arr));
