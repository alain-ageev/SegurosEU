"use client";

import Image from "next/image";
import { partners } from "@/lib/site";

/** Marquee estilo Belz — logos contínuos, sem links */
export function PartnersCarousel() {
  const track = [...partners, ...partners];

  return (
    <div
      className="v2-partners-carousel"
      aria-label="Principais seguradoras e operadoras"
      role="region"
    >
      <div className="v2-partners-track">
        {track.map((partner, index) => (
          <Image
            key={`${partner.name}-${index}`}
            src={partner.logo}
            alt={index < partners.length ? partner.name : ""}
            title={partner.name}
            width={200}
            height={80}
            className="v2-partners-logo"
            loading="lazy"
            sizes="200px"
            aria-hidden={index >= partners.length ? true : undefined}
          />
        ))}
      </div>
    </div>
  );
}
