import React, { useState } from "react";
import axios from "axios";

function App() {
  const [link, setLink] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page
    // Use the 'link' state variable as needed, e.g., send it to an API, perform an action, etc.

    console.log("Link submitted:", link);
  };

  const handleInputChange = (event) => {
    setLink(event.target.value);
    console.log(link);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="input-box">
          <form onSubmit={handleSubmit}>
            <label htmlFor="link">Paste Link:</label>
            <input
              type="text"
              value={link}
              id="link"
              onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
