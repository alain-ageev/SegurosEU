"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { v2Nav } from "@/lib/v2-content";

export function V2Header() {
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="bg-[var(--v2-carbon)] px-4 py-1.5 text-center text-[12px] font-medium tracking-[-0.01em] text-white">
        Consultoria B2B em seguros ·{" "}
        <Link href="/v2#contato" className="text-[var(--v2-ember)] hover:underline">
          Solicitar diagnóstico
        </Link>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--v2-mist)] bg-[var(--v2-paper)]">
        <div className="v2-container flex h-16 items-center justify-between gap-4">
          <BrandLogo variant="dark" />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Principal versão conversão"
          >
            {v2Nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)] hover:text-[var(--v2-graphite)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-[14px] font-medium tracking-[-0.01em] text-[var(--v2-ink)] xl:inline"
            >
              Site atual
            </Link>
            <Link href="/v2#contato" className="v2-btn v2-btn-primary hidden sm:inline-flex">
              Fale com um especialista
            </Link>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-[12px] border border-[var(--v2-mist)] text-[var(--v2-ink)] lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <div
            id={menuId}
            className="border-t border-[var(--v2-mist)] bg-[var(--v2-paper)] px-4 py-4 lg:hidden"
            role="dialog"
            aria-label="Menu"
          >
            <nav className="mx-auto flex max-w-[1200px] flex-col gap-1" aria-label="Mobile">
              {v2Nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[12px] px-3 py-3 text-[14px] font-medium text-[var(--v2-ink)] hover:bg-[var(--v2-fog)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/v2#contato"
                onClick={() => setOpen(false)}
                className="v2-btn v2-btn-primary mt-2"
              >
                Fale com um especialista
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
