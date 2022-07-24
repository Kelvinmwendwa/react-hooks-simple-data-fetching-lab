//create your App component here

import React, { useState, useEffect } from "react";

function App() {
  const [dogData, setdogData] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setdogData(data.message));
  }, []);

  if (!dogData) {
    return <p>Loading...</p>;
  } else {
    return (
        <img src={dogData} alt="A Random Dog" />
    );
  }
}

export default App;
