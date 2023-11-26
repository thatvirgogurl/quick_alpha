// const VITE_API_KEY = import.meta.env.VITE_API_KEY || "RIP4NX17LFEM1EWN";
export const fetchStockData = async (symbol) => {
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=SA0WXRFUXDV4E9DG`
  );
  const data = await response.json();
  return data;
};

// TIME_SERIES_INTRADAY Trending

// This API returns current and 20+ years of historical intraday OHLCV time series of the equity specified, covering extended trading hours where applicable (e.g., 4:00am to 8:00pm Eastern Time for the US market). You can query both raw (as-traded) and split/dividend-adjusted intraday data from this endpoint. The OHLCV data is sometimes called "candles" in finance literature.
