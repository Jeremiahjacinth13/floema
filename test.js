function getMaxProfits(stockPrices){
let max = [0, 0];
  
  for (let i = 0; i < stockPrices.length; i++){
    for(let j = i; j < stockPrices.length; j++){
      if(
        stockPrices[i] < stockPrices[j] && 
        Math.abs(stockPrices[i] - stockPrices[j]) > Math.abs(max[0] - max[1])
      ){
        max = [stockPrices[i], stockPrices[j]]
      }
    }
  }

  console.log(max)
  return Math.abs(max[0] - max[1]);
}

console.log(getMaxProfits([1, 1, 1, 1, 1, 1]));
