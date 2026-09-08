"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

type Props = {
  photos: Photo[];
  aspect?: string;
  intervalMs?: number;
};

export default function PhotoSlider({ photos, aspect = "4 / 5", intervalMs = 5000 }: Props) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % photos.length), intervalMs);
    return () => clearInterval(id);
  }, [photos.length, intervalMs]);

  return (
    <figure
      className="plate"
      style={{ width: "100%", position: "relative", aspectRatio: aspect, overflow: "hidden" }}
    >
      {photos.map((photo, i) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(max-width: 860px) 100vw, 480px"
          priority={i === 0}
          style={{ objectFit: "cover", opacity: i === index ? 1 : 0, transition: "opacity 1.2s ease" }}
        />
      ))}
      {photos.length > 1 && (
        <div
          style={{
            position: "absolute",
            bottom: 14,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            gap: 7,
          }}
        >
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === index ? "#fff" : "rgba(255,255,255,0.5)",
                boxShadow: "0 0 0 1px rgba(0,0,0,0.25)",
              }}
            />
          ))}
        </div>
      )}
    </figure>
  );
}
