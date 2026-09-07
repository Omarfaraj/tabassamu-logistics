import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PlaceholderImage from "@/components/PlaceholderImage";

const STATS = [
  { value: "2016", label: "Moving cargo since" },
  { value: "1", label: "Border crossing, mastered — Taveta" },
  { value: "2", label: "Offices — Nairobi & Mombasa" },
  { value: "24/7", label: "Shipment tracking" },
];

const SERVICES = [
  {
    kicker: "Core route",
    title: "Cross-Border Freight — Nairobi to Taveta",
    body: "Regular cargo movement across the Kenya–Tanzania border, with experience navigating Taveta procedures so your shipment doesn't sit and wait.",
  },
  {
    kicker: "Coastal support",
    title: "Mombasa Support",
    body: "A presence in Mombasa positions us to support cargo connected to the port — import/export goods moving inland or onward to Tanzania.",
  },
  {
    kicker: "Visibility",
    title: "Real-Time Shipment Tracking",
    body: "Every shipment can be tracked from pickup to delivery, so you always know exactly where your cargo is.",
  },
];

const WHY_US = [
  {
    title: "Border Know-How",
    body: "We know the Taveta crossing, so your cargo isn't delayed by guesswork.",
  },
  {
    title: "Real-Time Tracking",
    body: "Know where your shipment is, every step of the way.",
  },
  {
    title: "Friendly, Responsive Team",
    body: "Reach us on WhatsApp or phone, and get a real answer.",
  },
  {
    title: "Reliable Timelines",
    body: "We move on schedule, so your customers don't wait.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "“Tabassamu got our stock across to Tanzania faster than we expected, no drama at the border.”",
    attribution: "— Client Name, Business [Placeholder]",
  },
  {
    quote:
      "“Responsive on WhatsApp, and our shipment arrived exactly when they said it would.”",
    attribution: "— Client Name, Business [Placeholder]",
  },
  {
    quote:
      "“They handled the paperwork end to end. One less thing for us to worry about.”",
    attribution: "— Client Name, Business [Placeholder]",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="wrap grid-2-7-5" style={{ paddingTop: 76, paddingBottom: 64, alignItems: "center" }}>
        <div>
          <span className="kicker" style={{ fontFeatureSettings: "'tnum' 1" }}>
            Nairobi · Taveta · Tanzania
          </span>
          <h1 style={{ fontWeight: 400, fontSize: "clamp(40px, 5.4vw, 60px)", lineHeight: 1.08 }}>
            Your Cargo, Delivered Across Borders — On Time, Every Time
          </h1>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              maxWidth: "52ch",
              color: "color-mix(in srgb, var(--color-text) 82%, transparent)",
              marginTop: 24,
            }}
          >
            Tabassamu Logistics Ltd moves your goods from Nairobi to Tanzania through Taveta, backed by our team
            in Mombasa. You focus on your business — we&apos;ll handle the road.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Link href="/contact" className="btn btn-primary">
              Get a Quote
            </Link>
            <Link href="/#track" className="btn btn-secondary">
              Track Your Shipment
            </Link>
          </div>
        </div>
        <PlaceholderImage label="Drop a photo of a cargo truck or the Taveta border crossing" />
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 56, paddingBottom: 56 }}>
        <div className="grid-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                  fontSize: "clamp(30px, 3vw, 42px)",
                  lineHeight: 1.2,
                  margin: 0,
                  fontFeatureSettings: "'tnum' 1",
                  color: "var(--color-accent)",
                }}
              >
                {stat.value}
              </p>
              <p className="text-muted" style={{ fontSize: 12, letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 8 }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr" />

      <section className="wrap grid-2-5-7" style={{ paddingTop: 64, paddingBottom: 64, alignItems: "start" }}>
        <div>
          <span className="kicker">About us</span>
          <h2 style={{ fontSize: 30, margin: 0 }}>Every shipment carries more than boxes</h2>
        </div>
        <div>
          <p style={{ fontSize: "15.5px", lineHeight: 1.8, textAlign: "justify", hyphens: "auto", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
            Tabassamu Logistics Ltd is a Kenya-based freight and cargo transport company connecting Nairobi to
            Tanzania through the Taveta border crossing, with additional support from our Mombasa office.
          </p>
          <p style={{ fontSize: "15.5px", lineHeight: 1.8, textAlign: "justify", hyphens: "auto", color: "color-mix(in srgb, var(--color-text) 82%, transparent)" }}>
            It carries someone&apos;s business, income, and promise to a customer — that&apos;s why we treat every
            load, big or small, with the same care and urgency as if it were our own.
          </p>
          <Link href="/about" className="btn btn-ghost">
            Read our full story →
          </Link>
        </div>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <span className="kicker">What we do</span>
        <h2 style={{ fontSize: 30, margin: "0 0 32px" }}>Freight, handled end to end</h2>
        <div className="grid-3">
          {SERVICES.map((service) => (
            <div className="card" key={service.title} style={{ padding: 24 }}>
              <span className="card-kicker">{service.kicker}</span>
              <h3 className="card-title" style={{ fontSize: 19 }}>{service.title}</h3>
              <p className="card-body" style={{ fontSize: 14 }}>{service.body}</p>
            </div>
          ))}
        </div>
        <Link href="/services" className="btn btn-ghost" style={{ marginTop: 28 }}>
          See all services →
        </Link>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <span className="kicker">Why choose Tabassamu</span>
        <div className="grid-2" style={{ marginTop: 20 }}>
          {WHY_US.map((item) => (
            <div key={item.title}>
              <h4 style={{ fontSize: 18, margin: "0 0 6px" }}>{item.title}</h4>
              <p style={{ fontSize: "14.5px", lineHeight: 1.65, opacity: 0.82, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <span className="kicker" style={{ marginBottom: 24 }}>What clients say</span>
        <div className="grid-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.attribution + t.quote}>
              <blockquote style={{ fontFamily: "var(--font-heading)", fontSize: 19, lineHeight: 1.5, margin: 0, fontWeight: 400 }}>
                {t.quote}
              </blockquote>
              <figcaption style={{ fontSize: 13, opacity: 0.65, marginTop: 14 }}>{t.attribution}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <hr className="hr" />

      <section id="track" className="wrap" style={{ paddingTop: 64, paddingBottom: 64, display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 32, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: 28, margin: "0 0 8px" }}>Already Shipping With Us?</h2>
          <p style={{ fontSize: "15.5px", opacity: 0.82, margin: 0, maxWidth: "52ch" }}>
            Enter your tracking number to see exactly where your cargo is.
          </p>
        </div>
        <a
          href="#"
          className="btn btn-primary"
          style={{ whiteSpace: "nowrap" }}
          title="Links out to TransportBook's public tracking page"
        >
          Track Now →
        </a>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64, textAlign: "center" }}>
        <h2 style={{ fontSize: 32, margin: "0 0 12px" }}>Ready to Move Your Cargo?</h2>
        <p style={{ fontSize: 16, opacity: 0.82, margin: "0 auto 28px", maxWidth: "48ch" }}>
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
