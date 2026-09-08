import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Tabassamu Logistics Ltd for a freight quote, or reach us directly on WhatsApp. Offices in Nairobi (HQ) and Mombasa.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />

      <section className="wrap" style={{ paddingTop: 76, paddingBottom: 48 }}>
        <span className="kicker">Contact</span>
        <h1 style={{ fontWeight: 400, fontSize: "clamp(36px, 4.6vw, 52px)", lineHeight: 1.1, maxWidth: "20ch", margin: 0 }}>
          Ready to Move Your Cargo?
        </h1>
        <p style={{ fontSize: 16, opacity: 0.82, marginTop: 16, maxWidth: "48ch" }}>
          Get in touch for a quote, or reach us directly on WhatsApp.
        </p>
      </section>

      <section className="wrap grid-2-5-7" style={{ paddingTop: 8, paddingBottom: 72, alignItems: "start" }}>
        <div>
          <div style={{ marginBottom: 28 }}>
            <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.6, margin: "0 0 8px" }}>
              Phone
            </h4>
            <a href="tel:+254713916340" style={{ fontSize: 18, fontFamily: "var(--font-heading)" }}>
              +254 713 916 340

            </a>
          </div>
          <div style={{ marginBottom: 28 }}>
            <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.6, margin: "0 0 8px" }}>
              WhatsApp
            </h4>
            <a
              href="https://wa.me/254713916340"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 18, fontFamily: "var(--font-heading)" }}
            >
              +254 713 916 340
            </a>
          </div>
          <div style={{ marginBottom: 28 }}>
            <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.6, margin: "0 0 8px" }}>
              Email
            </h4>
            <a href="mailto:info@tabassamulogistics.co.ke" style={{ fontSize: 18, fontFamily: "var(--font-heading)" }}>
              tabasamulogisticltd254@gmail.com
            </a>
          </div>
          <div>
            <h4 style={{ fontSize: 14, textTransform: "uppercase", letterSpacing: "0.06em", opacity: 0.6, margin: "0 0 8px" }}>
              Offices
            </h4>
            <p style={{ fontSize: 15, margin: 0, lineHeight: 1.7 }}>
              Nairobi (HQ)
              <br />
              Mombasa
            </p>
          </div>
        </div>

        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
