import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap row" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div>
          <div className="nav-brand" style={{ marginBottom: 6 }}>
            Tabassamu Logistics
          </div>
          <div className="text-muted" style={{ fontSize: 13 }}>
            Moving your cargo, Nairobi to Tanzania and beyond.
          </div>
        </div>
        <div className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/#track">Track Shipment</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <hr className="hr" style={{ margin: "24px auto" }} />
      <div className="wrap fine-print" style={{ paddingLeft: 0, paddingRight: 0 }}>
        © Tabassamu Logistics Ltd — {new Date().getFullYear()}
      </div>
    </footer>
  );
}
