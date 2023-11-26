// Time Series (5min)
export const formatStockData = (stockData) => {
  const formatData = [];
  if (stockData["Time Series (5min)"]) {
    //   console.log(stockData);
    //   console.log(stockData["Time Series (5min)"]);
    // Object.entries(stockData["Time Series (5min)"]).map(entry=>console.log(entry))
    Object.entries(stockData["Time Series (5min)"]).map(([key, value]) => {
      formatData.push({
        x: key,
        y: [
          value["1. open"],
          value["2. high"],
          value["3. low"],
          value["4. close"],
        ],
      });
    });
  }
  return formatData;
};
