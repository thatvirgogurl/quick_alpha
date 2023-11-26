import React, { useEffect, useState } from "react";
import "chartjs-adapter-date-fns";
import CandlestickChart from "./CandlestickChart";

const WebSocketData = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    );

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response);
      setResponseData(response);
    };

    ws.onclose = () => {
      ws.close();
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>WebSocket Example</h1>
      {responseData && (
        <div>
          <p>Received data: {JSON.stringify(responseData)}</p>
          {/* Dynamically generate CandlestickCharts based on instruments and time intervals */}
          {["Nifty", "Banknifty", "Finnifty"].map((instrument) =>
            [1, 3, 5].map((timeInterval) => (
              <CandlestickChart
                key={`${instrument}-${timeInterval}`}
                instrument={instrument}
                timeInterval={timeInterval}
                ltpData={responseData}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WebSocketData />
      </header>
    </div>
  );
}

export default App;
