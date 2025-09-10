// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import "../index.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");
  const sections = ["hero", "about", "issues", "events", "volunteer"];

  useEffect(() => {
    const handleScroll = () => {
      let current = "hero"; 
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop - 100; 
          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const renderLinks = (isMobile = false) => (
    <>
      <a href="#about" className={active === "about" ? "active" : ""}>
        About
      </a>
      <a href="#issues" className={active === "issues" ? "active" : ""}>
        Issues
      </a>
      <a href="#events" className={active === "events" ? "active" : ""}>
        Events
      </a>
      <a
        href="#volunteer"
        className={`btn btn-primary ${active === "volunteer" ? "active" : ""}`}
      >
        Volunteer
      </a>
    </>
  );

  return (
    <nav className="tn-topbar">
      <div className="tn-brand">
        <div className="tn-logo">TN</div>
        <span>Tamil Nadu Civic Hub</span>
      </div>
      <div className="tn-nav desktop-only">{renderLinks()}</div>
      <button
        className="hamburger mobile-only"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        ☰
      </button>
      {open && <div className="mobile-menu">{renderLinks(true)}</div>}
    </nav>
  );
}
