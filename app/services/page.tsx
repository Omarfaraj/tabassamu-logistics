import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services & Coverage",
  description:
    "Cross-border freight from Nairobi to Tanzania via Taveta, Mombasa port support, and real-time shipment tracking, covering Nairobi to Dar es Salaam.",
};

const SERVICES = [
  {
    kicker: "Core route",
    title: "Cross-Border Freight — Nairobi to Tanzania via Taveta",
    body: "Our core route. We handle regular cargo movement across the Kenya–Tanzania border, with experience navigating Taveta border procedures so your shipment doesn't sit and wait.",
  },
  {
    kicker: "Coastal support",
    title: "Mombasa Support",
    body: "With a presence in Mombasa, we're positioned to support cargo connected to the port — whether that's import/export goods moving inland or onward to Tanzania.",
  },
  {
    kicker: "Visibility",
    title: "Real-Time Shipment Tracking",
    body: "Every shipment can be tracked from pickup to delivery, so you always know where your cargo is.",
  },
];

const ROUTE = [
  { num: "01", place: "Nairobi", detail: "Head Office / Origin Point" },
  { num: "02", place: "Taveta", detail: "Kenya–Tanzania Border Crossing" },
  { num: "03", place: "Holili, Tanzania", detail: "Entry point on the Tanzanian side of the border" },
  { num: "04", place: "Dar es Salaam", detail: "Onward destination, Tanzania" },
  { num: "—", place: "Mombasa", detail: "Connected office" },
];

export default function ServicesPage() {
  return (
    <>
      <Nav />

      <section className="wrap" style={{ paddingTop: 76, paddingBottom: 48 }}>
        <span className="kicker">What we do</span>
        <h1 style={{ fontWeight: 400, fontSize: "clamp(36px, 4.6vw, 52px)", lineHeight: 1.1, maxWidth: "24ch", margin: 0 }}>
          Freight, handled end to end
        </h1>
      </section>

      <section className="wrap grid-3" style={{ paddingBottom: 64 }}>
        {SERVICES.map((service) => (
          <div className="card" key={service.title} style={{ padding: 26 }}>
            <span className="card-kicker">{service.kicker}</span>
            <h3 className="card-title" style={{ fontSize: 20 }}>{service.title}</h3>
            <p className="card-body">{service.body}</p>
          </div>
        ))}
      </section>

      <hr className="hr" />

      <section className="wrap grid-2-5-7" style={{ paddingTop: 64, paddingBottom: 64, alignItems: "start" }}>
        <div>
          <span className="kicker">Our coverage</span>
          <h2 style={{ fontSize: 30, margin: 0 }}>Nairobi to Dar es Salaam, one corridor</h2>
        </div>
        <div>
          {ROUTE.map((stop) => (
            <div className="route-row" key={stop.place}>
              <span className="route-num">{stop.num}</span>
              <div>
                <strong style={{ fontSize: 16 }}>{stop.place}</strong>
                <div className="text-muted" style={{ fontSize: 14, marginTop: 2 }}>{stop.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64, textAlign: "center" }}>
        <h2 style={{ fontSize: 30, margin: "0 0 12px" }}>Ready to Move Your Cargo?</h2>
        <p style={{ fontSize: 16, opacity: 0.82, margin: "0 auto 24px", maxWidth: "48ch" }}>
          Get in touch for a quote, or reach us directly on WhatsApp.
        </p>
        <Link href="/contact" className="btn btn-primary">
          Get a Quote
        </Link>
      </section>

      <Footer />
    </>
  );
}
