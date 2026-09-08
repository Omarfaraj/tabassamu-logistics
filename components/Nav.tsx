"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/#track", label: "Track Shipment" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <Link href="/" className="nav-brand">
        <Image src="/brand/logo-mark.png" alt="" width={30} height={30} priority style={{ height: 30, width: "auto" }} />
        Tabassamu Logistics
      </Link>
      <div className="nav-links">
        {LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/contact" className="btn btn-primary">
          Get a Quote
        </Link>
      </div>
    </nav>
  );
}
