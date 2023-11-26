import "./App.css";
import React, { useEffect, useState } from "react";
import LiveChart from "./LiveChart.js";

const WebSocketData = () => {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket(
      "wss://functionup.fintarget.in/ws?id=fintarget-functionup"
    );

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      // console.log(response);
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
      <h1>WebSocket with CandleStickChart</h1>
      <p>Received data: {JSON.stringify(responseData)}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <WebSocketData />
      <LiveChart symbol={"IBM"} />
    </div>
  );
}

export default App;
