"use client";

import Image from "next/image";
import { useState } from "react";

const VIDEO_SRC = "/videos/instagram-DcTSilvCLqn.mp4";
const POSTER_SRC = "/videos/instagram-DcTSilvCLqn-poster.jpg";

type ConsorcioVideoProps = {
  title?: string;
  description?: string;
};

export function ConsorcioVideo({
  title = "Lance livre, fixo ou embutido?",
  description = "Emmanuel explica as modalidades de lance no consórcio — para você escolher com clareza antes de dar o próximo passo.",
}: ConsorcioVideoProps) {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <section
      id="video-lances"
      className="border-t border-[var(--edias-line)] bg-[var(--edias-canvas)] py-16 sm:py-20"
      aria-labelledby="consorcio-video-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:px-8">
        <div>
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

        <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-[16px] bg-[var(--edias-navy)] shadow-[0_20px_50px_rgba(10,30,60,0.18)]">
          <div className="relative aspect-[9/16] w-full">
            {showVideo ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
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
                sizes="(max-width: 1024px) 90vw, 360px"
                className="object-cover object-center"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
