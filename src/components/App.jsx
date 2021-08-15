import React, { useState } from "react";

function App() {
  const [userName, setName] = useState("");
  const [headinName, setHeading] = useState("");

  function handleChange() {
    console.log(event.target.value);
    setName(event.target.value);
  }
  function handleSubmit() {
    setHeading(userName);
  }

  return (
    <div className="container">
      <h1>Hello, {headinName} </h1>
      <input
        type="text"
        placeholder="What's your name?"
        onChange={handleChange}
        value={userName}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
