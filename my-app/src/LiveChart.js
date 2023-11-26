import React, { useEffect, useMemo, useState } from "react";
import { fetchStockData } from "./Services.js";
import { formatStockData } from "./utils.js";
import ReactApexChart from "react-apexcharts";
import { candelStickOptions } from "./constant.js";
const LiveChart = ({ symbol }) => {
  const [stockData, setStockData] = useState({});
  useEffect(() => {
    fetchStockData(symbol).then((data) => {
      console.log(data);
      setStockData(data);
    });
  }, []);
  // const seriesData = fetchStockData(stockData)
  // console.log(seriesData)
  const seriesData = useMemo(() => formatStockData(stockData), [stockData]);
  return (
    <div>
      <ReactApexChart
        series={[
          {
            data: seriesData,
          },
        ]}
        options={candelStickOptions}
        type="candlestick"
      />
    </div>
  );
};
export default LiveChart;
