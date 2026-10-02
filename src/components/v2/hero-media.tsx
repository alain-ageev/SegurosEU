"use client";

import Image from "next/image";
import { useState } from "react";

type HeroMediaProps = {
  videoSrc?: string | null;
  posterSrc: string;
  alt: string;
};

/** Slot da mídia principal — mesmo efeito visual de `.v2-media` em #diferenciais */
export function HeroMedia({ videoSrc, posterSrc, alt }: HeroMediaProps) {
  const [showVideo, setShowVideo] = useState(Boolean(videoSrc));

  return (
    <div className="v2-hero-media relative aspect-[4/3] w-full">
      {showVideo && videoSrc ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
          aria-label={alt}
          onError={() => setShowVideo(false)}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : (
        <Image
          src={posterSrc}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 92vw, 520px"
          className="object-cover object-center"
        />
      )}
    </div>
  );
}
