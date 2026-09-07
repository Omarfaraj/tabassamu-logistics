"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        className="card"
        style={{ padding: 32, textAlign: "center", alignItems: "center" }}
      >
        <h3 className="card-title" style={{ fontSize: 20 }}>
          Thanks — we&apos;ve got your request.
        </h3>
        <p className="card-body" style={{ maxWidth: "40ch" }}>
          Our team will get back to you shortly. For anything urgent, reach
          us directly on WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      className="grid-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="field span-2">
        <label htmlFor="name">Name</label>
        <input className="input" id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input className="input" id="phone" name="phone" type="text" placeholder="+254 7XX XXX XXX" required />
      </div>
      <div className="field">
        <label htmlFor="origin">Origin</label>
        <input className="input" id="origin" name="origin" type="text" placeholder="e.g. Nairobi" />
      </div>
      <div className="field">
        <label htmlFor="destination">Destination</label>
        <input className="input" id="destination" name="destination" type="text" placeholder="e.g. Dar es Salaam" />
      </div>
      <div className="field">
        <label htmlFor="cargo">Cargo Details</label>
        <input className="input" id="cargo" name="cargo" type="text" placeholder="What are you shipping?" />
      </div>
      <div className="field span-2">
        <label htmlFor="message">Message</label>
        <textarea className="input" id="message" name="message" rows={4} placeholder="Tell us about your shipment" />
      </div>
      <div className="span-2">
        <button type="submit" className="btn btn-primary btn-block" style={{ fontSize: 15, padding: 12 }}>
          Send Request
        </button>
      </div>
    </form>
  );
}
