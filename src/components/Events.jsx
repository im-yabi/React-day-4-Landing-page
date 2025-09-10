import React from "react";

export default function Events({ events = [] }) {
  return (
    <section id="events" className="py-5">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="h4 fw-bold">Upcoming events</h3>
          <p className="text-muted">Meetups, town halls, and public forums.</p>
        </div>
        <div className="row g-3">
          {events.map((e, i) => (
            <div key={i} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div>
                      <h6 className="fw-bold">{e.title}</h6>
                      <div className="small text-muted">{e.date} • {e.location}</div>
                    </div>
                    <div>
                      <a className="btn btn-outline-primary btn-sm" href={e.link || "#"}>Details</a>
                    </div>
                  </div>
                  <p className="mt-3 text-muted small">{e.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
