"use client";

import Image from "next/image";
import { useState } from "react";

const VIDEO_SRC = "/videos/instagram-DcTSilvCLqn.mp4";
const POSTER_SRC = "/videos/instagram-DcTSilvCLqn-poster.jpg";

type ConsorcioVideoProps = {
  title?: string;
  description?: string;
};

/**
 * Vertical reel (9:16) capped by viewport height so it cannot blow out
 * page width/height on mobile or desktop.
 */
export function ConsorcioVideo({
  title = "Lance livre, fixo ou embutido?",
  description = "Emmanuel explica as modalidades de lance no consórcio — para você escolher com clareza antes de dar o próximo passo.",
}: ConsorcioVideoProps) {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <section
      id="video-lances"
      className="overflow-x-clip border-t border-[var(--edias-line)] bg-[var(--edias-canvas)] py-12 sm:py-16"
      aria-labelledby="consorcio-video-heading"
    >
      <div className="mx-auto grid min-w-0 max-w-6xl items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-[0.16em] text-[var(--edias-gold)] uppercase">
            Explicação rápida
          </p>
          <h2
            id="consorcio-video-heading"
            className="mt-2 font-heading text-3xl font-semibold text-[var(--edias-navy)]"
          >
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-[var(--edias-ink-muted)]">
            {description}
          </p>
        </div>

        <div className="flex min-w-0 justify-center">
          <div
            className="relative overflow-hidden rounded-[16px] bg-[var(--edias-navy)] shadow-[0_16px_40px_rgba(10,30,60,0.16)]"
            style={{
              // Cap by viewport so 9:16 never becomes a full-page tower
              height: "min(58vh, 480px)",
              width: "min(260px, 72vw, calc(min(58vh, 480px) * 9 / 16))",
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
                sizes="260px"
                className="object-contain object-center"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
