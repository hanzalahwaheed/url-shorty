import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [shortLinkID, setShortLinkID] = useState("");

  const uploadLink = async () => {
    try {
      const res = await axios.post("/api", {
        url: inputValue,
      });
      setShortLinkID(res.data.id);
    } catch (error) {
      console.error("Error uploading link:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    uploadLink();
    console.log("Form submitted with value:", inputValue);
  };

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  //   console.log(inputValue);
  // };

  const handlePaste = (event) => {
    const pastedValue = event.clipboardData.getData("text");
    console.log("Pasted value:", pastedValue);
    setInputValue(pastedValue);
    console.log(inputValue);
  };

  const fetchShortUrl = useCallback(async () => {
    try {
      await axios.get(`/api/${shortLinkID}`);
    } catch (error) {
      console.error("Error fetching link:", error);
    }
  }, [shortLinkID]);

  useEffect(() => {
    fetchShortUrl();
  }, [fetchShortUrl]);

  return (
    <div className="App">
      <div className="container">
        <div className="input-box">
          <form onSubmit={handleSubmit}>
            <h3>Url Shortner</h3>
            <input
              type="text"
              value={inputValue}
              onPaste={handlePaste}
              // onChange={handleChange}
              placeholder="Paste link here..."
            />
            <h4>http://localhost:5000/api/{shortLinkID}</h4>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
