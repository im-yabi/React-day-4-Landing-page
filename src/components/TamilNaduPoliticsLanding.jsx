import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import "../index.css";

export default function TamilNaduPoliticsLanding({ emblemSrc = "/images/emblem.png" }) {
  const [form, setForm] = useState({ name: "", email: "", city: "" });
  const [volunteers, setVolunteers] = useState([]);
  const [flash, setFlash] = useState("");
  const [selectedEvent, setSelectedEvent] = useState(null); 

  const issues = [
    { title: "Education & Skills", text: "Quality schooling and skill development for youth.", color: "linear-gradient(135deg,#7c3aed,#ec4899)" },
    { title: "Rural Development", text: "Water, agriculture support, and rural livelihoods.", color: "linear-gradient(135deg,#06b6d4,#3b82f6)" },
    { title: "Urban Transport", text: "Sustainable mobility and metro projects.", color: "linear-gradient(135deg,#f59e0b,#ef4444)" },
  ];

  const events = [
    { date: "Oct 12, 2025", title: "Chennai Town Hall", desc: "Public forum on municipal services" },
    { date: "Oct 20, 2025", title: "Madurai Youth Roundtable", desc: "Discussion on employment & startups" },
    { date: "Nov 3, 2025", title: "Coimbatore Health Camp", desc: "Free screening & awareness clinic" },
  ];

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email) {
      alert("Please fill in name and email");
      return;
    }
    setVolunteers([...volunteers, { ...form, when: new Date().toLocaleString() }]);
    setForm({ name: "", email: "", city: "" });
    setFlash("✅ Thank you! Your info was recorded.");
    setTimeout(() => setFlash(""), 2500);
  }

  return (
    <div className="tn-wrap">
      <Navbar />
      <section className="tn-hero" id="hero">
        <div className="blob a"></div>
        <div className="blob b"></div>
        <div className="blob c"></div>

        <div>
          <div className="hero-badge">Civic • Updates</div>
          <h1 className="hero-title">Tamil Nadu — Civic Hub</h1>
          <p className="hero-sub">Stay informed, attend events, and get involved in local civic life.</p>
    
        </div>

        <aside className="right-panel">
          <div className="event-card">
            <div className="event-top">
              <div className="event-avatar">TN</div>
              <div>
                <div className="event-label">Next Event</div>
                <div className="event-meta">Chennai Town Hall</div>
                <div className="event-label">Oct 12, 2025 • 5:00 PM</div>
              </div>
            </div>
            <div className="event-cta">
              <a href="#volunteer" className="btn btn-primary">Register</a>
              <a href="#events" className="btn btn-ghost">Details</a>
            </div>
          </div>
        </aside>
      </section>
      <About emblemSrc={emblemSrc} />
      <section className="section" id="issues">
        <h3>Key Issues</h3>
        <p className="lead">A snapshot of important topics shaping public life.</p>
        <div className="grid-3">
          {issues.map((it, idx) => (
            <div key={idx} className="issue" style={{ background: it.color }}>
              <div className="title">{it.title}</div>
              <div className="desc">{it.text}</div>
            </div>
          ))}
        </div>
      </section>
      <section className="section" id="events">
        <h3>Upcoming Events</h3>
        <p className="lead">Meetups, town halls, and forums across Tamil Nadu.</p>
        <div className="grid-3">
          {events.map((ev, idx) => (
            <div key={idx} className="event-card-simple">
              <div className="event-date">{ev.date}</div>
              <div className="event-title">{ev.title}</div>
              <p className="event-desc">{ev.desc}</p>
              <button
                className="btn btn-primary"
                style={{ marginTop: 10 }}
                onClick={() => setSelectedEvent(ev)}
              >
                Join
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="section" id="volunteer">
        <h3>Get Involved</h3>
        <p className="lead">Volunteer, host meetups, or spread verified updates.</p>
        <div className="vol-grid">
          <div>
            <h4 style={{ marginBottom: 10 }}>Local Volunteers</h4>
            {volunteers.length === 0 ? (
              <p className="vol-list">No volunteers yet — be the first!</p>
            ) : (
              <ul className="vol-list">
                {volunteers.map((v, idx) => (
                  <li key={idx}>
                    <strong>{v.name}</strong> ({v.city || "—"}) — <span>{v.when}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <form className="vol-form" onSubmit={handleSubmit}>
            <h4 style={{ marginBottom: 10 }}>Sign Up</h4>
            <input className="input" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />
            <input className="input" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input className="input" name="city" placeholder="City / Area" value={form.city} onChange={handleChange} />
            <button className="btn btn-primary" type="submit">Join</button>
          </form>
        </div>
      </section>
      <footer className="tn-footer">
        © {new Date().getFullYear()} Tamil Nadu Civic Hub — Landing Page
      </footer>
      {flash && <div className="flash">{flash}</div>}
      {selectedEvent && (
        <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedEvent.title}</h3>
            <p><strong>Date:</strong> {selectedEvent.date}</p>
            <p>{selectedEvent.desc}</p>
            <div style={{ marginTop: "14px", display: "flex", gap: "10px" }}>
              <a href="#volunteer" className="btn btn-primary" onClick={() => setSelectedEvent(null)}>
                Volunteer Now
              </a>
              <button className="btn btn-ghost" onClick={() => setSelectedEvent(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
