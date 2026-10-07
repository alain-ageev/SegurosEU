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
 * Constrained 9:16 reel beside Tabelas.
 * Uses simple max-width + aspect-ratio (no nested calc) so the frame cannot collapse to 0.
 */
export function ConsorcioVideo({
  title = "Lance livre, fixo ou embutido?",
  caption = "Emmanuel explica as modalidades de lance no consórcio.",
}: ConsorcioVideoProps) {
  const [failed, setFailed] = useState(false);

  return (
    <aside
      id="video-lances"
      className="mx-auto flex w-full min-w-0 max-w-[260px] shrink-0 flex-col items-center gap-3 lg:mx-0 lg:sticky lg:top-24"
      aria-label={title}
    >
      <div className="relative aspect-[9/16] w-full max-h-[min(52vh,420px)] overflow-hidden rounded-[16px] bg-black shadow-[0_16px_40px_rgba(10,30,60,0.16)]">
        {!failed ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            controls
            preload="auto"
            poster={POSTER_SRC}
            aria-label={title}
            onError={() => setFailed(true)}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={POSTER_SRC}
            alt={title}
            fill
            sizes="260px"
            className="object-cover object-center"
            unoptimized
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
