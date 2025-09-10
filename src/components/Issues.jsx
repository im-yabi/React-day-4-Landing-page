import React from "react";

function IssueCard({ title, text }) {
  return (
    <div className="col">
      <div className="card h-100 border-0 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-muted">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function Issues({ issues = [] }) {
  return (
    <section id="issues" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-4">
          <h3 className="h4 fw-bold">Key issues</h3>
          <p className="text-muted">Top-level topics shaping public conversation in Tamil Nadu.</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {issues.map((it, i) => <IssueCard key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}
