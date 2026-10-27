"use client";

import { useState } from "react";
import Image from "next/image";

type CoverageItem = {
  title: string;
  body: string;
  image: string;
};

export function VidaCoverageCards({
  items,
  accent = "#9631fa",
  imageWidth = 420,
  imageHeight = 504,
}: {
  items: readonly CoverageItem[];
  accent?: string;
  imageWidth?: number;
  imageHeight?: number;
}) {
  const [open, setOpen] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ul className="mt-6 grid grid-cols-2 justify-items-center gap-x-4 gap-y-4 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-5">
      {items.map((item) => {
        const isOpen = open === item.title;
        const shown = isOpen || hovered === item.title;
        return (
          <li key={item.title} className="w-full max-w-[205px]">
            <button
              type="button"
              aria-expanded={shown}
              aria-label={item.title}
              data-open={shown ? "true" : "false"}
              onClick={() => setOpen(isOpen ? null : item.title)}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setHovered(item.title);
              }}
              onPointerLeave={(event) => {
                if (event.pointerType === "mouse") setHovered(null);
              }}
              style={{
                aspectRatio: `${imageWidth} / ${imageHeight}`,
                ["--reveal" as string]: accent,
              }}
              className="group relative block w-full cursor-pointer overflow-hidden rounded-[10px] border-0 bg-white p-0 shadow-[0_10px_28px_rgba(5,46,68,0.14)] transition duration-500 ease-in-out hover:-translate-y-1 hover:bg-[var(--reveal)] hover:shadow-[0_18px_40px_color-mix(in_srgb,var(--reveal)_32%,transparent)] focus-visible:bg-[var(--reveal)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--reveal)] data-[open=true]:-translate-y-1 data-[open=true]:bg-[var(--reveal)] data-[open=true]:shadow-[0_18px_40px_color-mix(in_srgb,var(--reveal)_32%,transparent)]"
            >
              <Image
                src={item.image}
                alt=""
                width={imageWidth}
                height={imageHeight}
                className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0 group-focus-visible:opacity-0 group-data-[open=true]:opacity-0"
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-3 text-center text-[13px] leading-snug font-bold text-white opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[open=true]:opacity-100">
                {item.body}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
