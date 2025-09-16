import React from "react";

const suggestions = [
  "Create an image",
  "Improve writing",
  "Write a first draft",
  "Get advice",
  "Draft a text",
  "Say it with care",
  "Design a logo",
  "Improve communication",
];

function Suggestions({ setMessage }) {
  return (
    <div className="suggestions" aria-label="Suggestions">
      {suggestions.map((s, i) => (
        <button
          key={s}
          onClick={() => setMessage(s)}
          tabIndex="0"
          aria-label={`Suggestion: ${s}`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export default Suggestions;