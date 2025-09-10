import React from "react";

export default function Hero({ title, subtitle, emblemSrc = "" }) {
  return (
    <header className="bg-light">
      <div className="container py-6">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-5 fw-bold">{title}</h1>
            <p className="lead text-muted">{subtitle}</p>
            <div className="mt-4">
              <a className="btn btn-primary btn-lg me-2" href="#volunteer">Get Involved</a>
              <a className="btn btn-outline-secondary btn-lg" href="#events">Upcoming Events</a>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-4 mt-lg-0">
            <div className="rounded bg-white shadow-sm p-4 d-inline-block">
              {emblemSrc ? (
                <img src={emblemSrc} alt="State emblem" style={{ maxWidth: 220 }} />
              ) : (
                <svg width="220" height="220" viewBox="0 0 220 220" role="img" aria-label="Tamil Nadu emblem placeholder">
                  <rect width="100%" height="100%" rx="20" fill="#fff" stroke="#e9ecef" />
                  <text x="50%" y="52%" textAnchor="middle" dominantBaseline="middle" fill="#6c757d" fontSize="12">
                    Tamil Nadu Emblem
                  </text>
                </svg>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
