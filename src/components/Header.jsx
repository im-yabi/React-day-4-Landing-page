import React from "react";
import "../index.css"; 
export default function Header() {
  return (
    <header className="tn-topbar">
      <div className="tn-brand">
        <div className="tn-logo">TN</div>
        <span>Tamil Nadu Civic Hub</span>
      </div>
      <nav className="tn-nav">
        <a href="#about">About</a>
        <a href="#issues">Issues</a>
        <a href="#events">Events</a>
        <a href="#volunteer">Volunteer</a>
      </nav>
    </header>
  );
}
