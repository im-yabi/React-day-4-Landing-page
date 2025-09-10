import React, { useState } from "react";

export default function VolunteerForm({ onSubmit }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="volunteer" className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h3 className="fw-bold">Volunteer / Contact</h3>
            <p className="mb-0">Sign up to receive updates, volunteer, or request a public meeting.</p>
          </div>
          <div className="col-lg-6">
            <form onSubmit={(e) => { e.preventDefault(); onSubmit(form); setForm({ name: "", email: "", phone: "", message: "" }); }}>
              <div className="row g-2">
                <div className="col-sm-6"><input name="name" required className="form-control" placeholder="Full name" value={form.name} onChange={handleChange} /></div>
                <div className="col-sm-6"><input name="email" required type="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} /></div>
                <div className="col-12"><input name="phone" className="form-control" placeholder="Phone (optional)" value={form.phone} onChange={handleChange} /></div>
                <div className="col-12"><textarea name="message" className="form-control" rows="2" placeholder="Message (optional)" value={form.message} onChange={handleChange} /></div>
                <div className="col-12 text-end">
                  <button type="submit" className="btn btn-light">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
