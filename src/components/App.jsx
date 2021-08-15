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
    // in case submit is inside a form or we use onSubmit Attribute
    event.preventDefault();
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
      {/* This is the default display of React Forms.
      The use of submit type will refresh the page. */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
