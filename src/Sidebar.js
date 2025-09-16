import React from "react";

function Sidebar() {
  return (
    <nav className="sidebar" aria-label="Sidebar Navigation">
      <div className="sidebar-header">
        <span className="copilot-logo" aria-hidden="true">🧑‍💻</span>
        <span className="sidebar-title">Copilot</span>
      </div>
      <ul className="sidebar-list">
        <li>
          <span className="icon discover" aria-hidden="true"></span>
          <div>
            <span className="list-title">Discover</span>
            <span className="list-desc">Your daily news and inspiration</span>
          </div>
        </li>
        <li>
          <span className="icon gallery" aria-hidden="true"></span>
          <div>
            <span className="list-title">
              Creator Gallery <span className="badge">New</span>
            </span>
            <span className="list-desc">Your inspiration studio</span>
          </div>
        </li>
        <li>
          <span className="icon labs" aria-hidden="true"></span>
          <div>
            <span className="list-title">Labs</span>
            <span className="list-desc">Experimental AI initiatives</span>
          </div>
        </li>
      </ul>
      <div className="sidebar-pages">
        <span className="pages-title">Pages</span>
        <span className="pages-desc">
          Work on writing, code, or your next big idea in a focused space. I can offer edits and feedback along the way.
        </span>
        <button className="create-page-btn">Create a page</button>
      </div>
      <div className="sidebar-convo">
        <span className="convo-title">Conversations</span>
        <span className="convo-desc">Sign in to save our conversations.</span>
      </div>
    </nav>
  );
}

export default Sidebar;