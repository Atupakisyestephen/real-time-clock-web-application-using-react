import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(getFormattedTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getFormattedTime() {
    const options = { hour12: false };
    return new Date().toLocaleTimeString([], options);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getFormattedTime}>Get Time</button>
    </div>
  );
}

export default App;