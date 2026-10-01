"use client";

import Image from "next/image";
import { partners } from "@/lib/site";

/** Carrossel contínuo das seguradoras — sem links */
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
          <div
            key={`${partner.name}-${index}`}
            className="v2-partners-slide"
            title={partner.name}
            aria-hidden={index >= partners.length ? true : undefined}
          >
            <Image
              src={partner.logo}
              alt={index < partners.length ? partner.name : ""}
              width={200}
              height={80}
              className="h-12 w-auto max-w-[140px] object-contain sm:h-14 sm:max-w-[160px]"
              loading="lazy"
              sizes="160px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
