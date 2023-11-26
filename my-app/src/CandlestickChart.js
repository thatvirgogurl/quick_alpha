// CandlestickChart.js
import React, { useState, useEffect } from "react";
// ...

import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the entire chart.js library

const CandlestickChart = ({ instrument, timeInterval, ltpData }) => {
  const [candlestickData, setCandlestickData] = useState([]);

  useEffect(() => {
    // Update candlestick data based on the received real-time data
    const generateCandlestickData = () => {
      const now = new Date();
      const instrumentLTP = ltpData[instrument];

      // Create a new candlestick data point
      const candlestick = {
        t: now,
        o: instrumentLTP,
        h: instrumentLTP * 1.02,
        l: instrumentLTP * 0.98,
        c: instrumentLTP,
      };

      // Update the state with the new candlestick data
      setCandlestickData((prevData) => [...prevData, candlestick]);
    };

    // Call the function to generate and update candlestick data
    generateCandlestickData();
  }, [ltpData, instrument]);

  const data = {
    datasets: [
      {
        label: `${instrument} - ${timeInterval} min`,
        data: candlestickData,
        borderColor: 'rgba(0, 0, 0, 0.2)',
        backgroundColor: {
          up: 'rgba(255, 0, 0, 0.6)', // Red for bearish (down) candles
          down: 'rgba(0, 255, 0, 0.6)', // Green for bullish (up) candles
        },
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          stepSize: 1,
        },
        title: {
          display: true,
          text: 'Time',
        },
      },
      y: {
        // Add additional options for the y-axis if needed
        title: {
          display: true,
          text: 'Price',
        },
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default CandlestickChart;
