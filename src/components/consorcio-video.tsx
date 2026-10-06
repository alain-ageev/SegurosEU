"use client";

import Image from "next/image";
import { useState } from "react";

const VIDEO_SRC = "/videos/instagram-DcTSilvCLqn.mp4";
const POSTER_SRC = "/videos/instagram-DcTSilvCLqn-poster.jpg";

type ConsorcioVideoProps = {
  title?: string;
  caption?: string;
};

/**
 * Constrained 9:16 reel player for embedding beside Tabelas (or elsewhere).
 * Height/width capped so it cannot blow out the page layout.
 */
export function ConsorcioVideo({
  title = "Lance livre, fixo ou embutido?",
  caption = "Emmanuel explica as modalidades de lance no consórcio.",
}: ConsorcioVideoProps) {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <aside
      id="video-lances"
      className="mx-auto flex w-full min-w-0 max-w-[280px] flex-col items-center gap-3 lg:mx-0 lg:sticky lg:top-24"
      aria-label={title}
    >
      <div
        className="relative overflow-hidden rounded-[16px] bg-[var(--edias-navy)] shadow-[0_16px_40px_rgba(10,30,60,0.16)]"
        style={{
          height: "min(52vh, 420px)",
          width: "min(240px, 72vw, calc(min(52vh, 420px) * 9 / 16))",
          maxWidth: "100%",
        }}
      >
        {showVideo ? (
          <video
            className="absolute inset-0 h-full w-full object-contain"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="metadata"
            poster={POSTER_SRC}
            aria-label={title}
            onError={() => setShowVideo(false)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={POSTER_SRC}
            alt={title}
            fill
            sizes="240px"
            className="object-contain object-center"
          />
        )}
      </div>
      <p className="max-w-[240px] text-center text-sm leading-snug text-[var(--edias-ink-muted)]">
        <span className="font-semibold text-[var(--edias-navy)]">{title}</span>
        <span className="mt-1 block">{caption}</span>
      </p>
    </aside>
  );
}
