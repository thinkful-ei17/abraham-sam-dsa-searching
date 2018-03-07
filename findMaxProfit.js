'use strict';

const stockShareDailyValues = [128, 97, 121, 123, 98, 97, 105];

const findMaxProfit = price => {
  let bestBuyAmount = price[0];
  let maxProfit = 0;

  for (let i=0; i<price.length; i++) {
    if (price[i] > bestBuyAmount) {
      let currentProfit = price[i] - bestBuyAmount;
      if (currentProfit > maxProfit) {
        maxProfit = currentProfit;
      }
    } else if (price[i] < bestBuyAmount) {
      bestBuyAmount = price[i];
    }
  }

  return maxProfit;
};

console.log(findMaxProfit(stockShareDailyValues));