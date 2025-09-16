import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Chatbox from "./Chatbox";
import Suggestions from "./Suggestions";
import "./styles.css";

function App() {
  const [anonymize, setAnonymize] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  // For backend integration: send message + anonymize state to backend
  const handleSend = async () => {
    // Example POST to backend
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, anonymize }),
    });
    const data = await res.json();
    setResponse(data.reply);
  };
  return (
    <div className="container">
      <Sidebar />
      <div className="main">
        <header>
          <button className="sign-in-btn" aria-label="Sign in">
            Sign in <span className="user-icon" aria-hidden="true"></span>
          </button>
        </header>
        <main>
          <h1 tabIndex="0">
            Hi there. What should we dive into today?
          </h1>
          <Chatbox
            anonymize={anonymize}
            setAnonymize={setAnonymize}
            message={message}
            setMessage={setMessage}
            onSend={handleSend}
          />
          <Suggestions setMessage={setMessage} />
          {response && (
            <div
              className="response"
              aria-live="polite"
              tabIndex="0"
              style={{ marginTop: "1rem" }}
            >
              {response}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;