"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Failed to send message.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
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
    <form className="grid-form" onSubmit={handleSubmit}>
      {/* Honeypot — hidden from real visitors via CSS, bots fill it in automatically */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px" }}
      />

      <div className="field span-2">
        <label htmlFor="name">Name</label>
        <input className="input" id="name" name="name" type="text" placeholder="Your name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Phone / WhatsApp</label>
        <input className="input" id="phone" name="phone" type="text" placeholder="+254 7XX XXX XXX" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email (optional)</label>
        <input className="input" id="email" name="email" type="email" placeholder="you@example.com" />
      </div>
      <div className="field">
        <label htmlFor="origin">Origin</label>
        <input className="input" id="origin" name="origin" type="text" placeholder="e.g. Nairobi" />
      </div>
      <div className="field">
        <label htmlFor="destination">Destination</label>
        <input className="input" id="destination" name="destination" type="text" placeholder="e.g. Dar es Salaam" />
      </div>
      <div className="field span-2">
        <label htmlFor="cargo">Cargo Details</label>
        <input className="input" id="cargo" name="cargo" type="text" placeholder="What are you shipping?" />
      </div>
      <div className="field span-2">
        <label htmlFor="message">Message</label>
        <textarea className="input" id="message" name="message" rows={4} placeholder="Tell us about your shipment" required />
      </div>
      <div className="span-2">
        <button type="submit" className="btn btn-primary btn-block" style={{ fontSize: 15, padding: 12 }} disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send Request"}
        </button>
        {status === "error" && (
          <p role="alert" style={{ color: "#a83232", fontSize: 13, marginTop: 10, marginBottom: 0 }}>
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}
