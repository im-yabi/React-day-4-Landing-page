import React from "react";
import "../index.css";

export default function About({ emblemSrc = "/images/emblem.png" }) {
  return (
    <section className="section" id="about">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "28px", alignItems: "center" }}>
        <div>
          <h3 style={{ position: "relative", display: "inline-block", paddingBottom: "6px" }}>
            About Us
            <span
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                height: "4px",
                width: "60px",
                borderRadius: "2px",
                background: "linear-gradient(90deg,var(--accent-b),var(--accent-a))",
              }}
            />
          </h3>
          <p className="lead">
            Welcome to the <strong>Tamil Nadu Civic Hub</strong>. 
            This platform brings together citizens, ideas, and initiatives that
            shape the future of our state.
          </p>
          <p style={{ color: "var(--muted)", maxWidth: "70ch", lineHeight: 1.6 }}>
            Our mission is to create a transparent, colorful, and accessible space 
            for civic engagement. Whether it’s education, healthcare, rural 
            development, or urban mobility — we believe that every citizen’s 
            voice matters. Join us as we work toward a brighter, inclusive 
            Tamil Nadu.
          </p>
        </div>

        <div style={{ textAlign: "center" }}>
          <img
            src={emblemSrc}
            alt="Tamil Nadu emblem"
            style={{
              maxWidth: "220px",
              borderRadius: "12px",
              boxShadow: "0 12px 30px rgba(11,24,48,0.08)",
              animation: "float 6s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}
