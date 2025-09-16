import React from "react";

function Chatbox({ anonymize, setAnonymize, message, setMessage, onSend }) {
  return (
    <div className="chatbox" role="form" aria-label="Chat input">
      <div className="chatbox-top">Message Copilot</div>
      <div className="chatbox-input">
        <div className="chatbox-left">
          <span className="copilot-icon" aria-hidden="true">🧑‍💻</span>
          <select
            className="response-type"
            aria-label="Response type"
            defaultValue="Quick response"
          >
            <option>Quick response</option>
            <option>Detailed response</option>
            <option>Accessible response</option>
          </select>
        </div>
        <div className="chatbox-right">
          <label className="anonymize-toggle" htmlFor="anonymizeToggle">
            <input
              type="checkbox"
              id="anonymizeToggle"
              checked={anonymize}
              onChange={() => setAnonymize((a) => !a)}
              aria-checked={anonymize}
              aria-label="Anonymize my disability"
            />
            <span
              className={`anonymize-btn${anonymize ? " checked" : ""}`}
              aria-live="polite"
            >
              🔒 Anonymize my disability
              {anonymize ? " (Opted in)" : ""}
            </span>
          </label>
          <button
            className="add-btn"
            aria-label="Add attachment"
            tabIndex="0"
          >
            +
          </button>
          <button
            className="mic-btn"
            aria-label="Record voice message"
            tabIndex="0"
          >
            <span className="mic-icon" aria-hidden="true">🎤</span>
          </button>
        </div>
      </div>
      <div className="chatbox-message-input">
        <label htmlFor="messageInput" className="visually-hidden">
          Type your message
        </label>
        <input
          id="messageInput"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          aria-label="Type your message here"
          autoComplete="off"
        />
        <button
          onClick={onSend}
          className="send-btn"
          aria-label="Send message"
          disabled={!message.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default Chatbox;