import React from "react";

export default function Footer({ smallText = "Empowering people through civic awareness" }) {
  return (
    <footer className="bg-white border-top py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="text-muted small">{smallText}</div>

        <div className="mt-2 mt-md-0 small text-muted">
          © {new Date().getFullYear()} Tamil Nadu Civic Hub — All rights reserved
        </div>
      </div>
    </footer>
  );
}
