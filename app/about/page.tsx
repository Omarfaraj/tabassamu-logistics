import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About",
  description:
    "Tabassamu Logistics Ltd is a Kenya-based freight and cargo transport company connecting Nairobi to Tanzania through the Taveta border crossing, since 2016.",
};

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

const bodyText = "color-mix(in srgb, var(--color-text) 85%, transparent)";

export default function AboutPage() {
  return (
    <>
      <Nav />

      <section className="wrap" style={{ paddingTop: 76, paddingBottom: 48 }}>
        <span className="kicker">About us</span>
        <h1 style={{ fontWeight: 400, fontSize: "clamp(36px, 4.6vw, 52px)", lineHeight: 1.1, maxWidth: "22ch", margin: 0 }}>
          Every shipment carries someone&apos;s business, income, and promise to a customer.
        </h1>
      </section>

      <section className="wrap grid-2-7-5" style={{ paddingTop: 8, paddingBottom: 64, alignItems: "start" }}>
        <div>
          <p style={{ fontSize: 16, lineHeight: 1.8, textAlign: "justify", hyphens: "auto", color: bodyText }}>
            Tabassamu Logistics Ltd is a Kenya-based freight and cargo transport company connecting Nairobi to
            Tanzania through the Taveta border crossing, with additional support from our Mombasa office.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, textAlign: "justify", hyphens: "auto", color: bodyText }}>
            We know every shipment carries more than boxes — it carries someone&apos;s business, income, and
            promise to a customer. That&apos;s why we treat every load, big or small, with the same care and
            urgency as if it were our own.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, textAlign: "justify", hyphens: "auto", color: bodyText }}>
            From single-business consignments to full truckloads, our team handles the road, the paperwork, and
            the border crossing — so your goods arrive safely and on schedule, every time.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.8, color: bodyText, marginBottom: 0 }}>
            Since 2016, we&apos;ve been moving cargo across the Kenya–Tanzania corridor — a decade on the road
            between Nairobi, Taveta and Tanzania.
          </p>
        </div>
        <figure
          className="plate"
          style={{ width: "100%", position: "relative", aspectRatio: "4 / 5", overflow: "hidden" }}
        >
          <Image
            src="/photos/amin-yarban-cN_dT5LRHEM-unsplash.jpg"
            alt="A container yard road stretching toward the horizon under a dramatic sky"
            fill
            sizes="(max-width: 860px) 100vw, 480px"
            style={{ objectFit: "cover" }}
          />
        </figure>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
        <span className="kicker">Why choose Tabassamu Logistics</span>
        <h2 style={{ fontSize: 30, margin: "0 0 32px" }}>Four reasons shippers stay with us</h2>
        <div className="grid-2">
          {WHY_US.map((item) => (
            <div key={item.title}>
              <h4 style={{ fontSize: 18, margin: "0 0 6px" }}>{item.title}</h4>
              <p style={{ fontSize: "14.5px", lineHeight: 1.65, opacity: 0.82, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="hr" />

      <section className="wrap" style={{ paddingTop: 64, paddingBottom: 64, textAlign: "center" }}>
        <h2 style={{ fontSize: 30, margin: "0 0 12px" }}>Want to see what we move, and where?</h2>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
          <Link href="/services" className="btn btn-secondary">
            Our Services
          </Link>
          <Link href="/contact" className="btn btn-primary">
            Get a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
