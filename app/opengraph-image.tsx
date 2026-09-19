import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Tabassamu Logistics Ltd — Nairobi to Tanzania Freight";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logoData = await readFile(join(process.cwd(), "public/brand/logo-mark.png"), "base64");
const logoSrc = `data:image/png;base64,${logoData}`;

const bgData = await readFile(
  join(process.cwd(), "public/photos/amin-yarban-cN_dT5LRHEM-unsplash.jpg"),
  "base64"
);
const bgSrc = `data:image/jpeg;base64,${bgData}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#201f1d",
        }}
      >
        <img
          src={bgSrc}
          width={1200}
          height={630}
          alt=""
          style={{ position: "absolute", inset: 0, objectFit: "cover", filter: "sepia(0.25) saturate(0.8) brightness(0.55)" }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, rgba(32,31,29,0.35) 0%, rgba(32,31,29,0.8) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            width: "100%",
            height: "100%",
            padding: "64px 72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
            <img src={logoSrc} width={64} height={64} alt="" />
            <span style={{ fontSize: 34, fontWeight: 700, color: "#f8f4f4", letterSpacing: -0.5 }}>
              Tabassamu Logistics
            </span>
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, color: "#f8f4f4", lineHeight: 1.15, maxWidth: 980 }}>
            Your Cargo, Delivered Across Borders
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#e1ad66", marginTop: 18 }}>
            Nairobi · Multiple Border Crossings · Tanzania — cross-border freight, real-time tracking
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
