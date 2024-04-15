import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const [inputValue, setInputValue] = useState("");
  const [shortLinkID, setShortLinkID] = useState("");

  const uploadLink = async () => {
    try {
      const res = await axios.post(`${BASE_URL}`, {
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
  };

  const handlePaste = (event) => {
    const pastedValue = event.clipboardData.getData("text");
    setInputValue(pastedValue);
  };

  const fetchShortUrl = useCallback(async () => {
    try {
      await axios.get(`${BASE_URL}/${shortLinkID}`);
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
            <h4>{`${BASE_URL}/${shortLinkID}`}</h4>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
