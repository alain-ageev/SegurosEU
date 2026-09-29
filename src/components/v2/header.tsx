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
      <div className="bg-[var(--v2-abyss)] px-4 py-2 text-center text-[13px] font-semibold text-white">
        Consultoria B2B em seguros ·{" "}
        <Link href="/v2#contato" className="text-[var(--v2-ember)] underline-offset-2 hover:underline">
          Solicitar diagnóstico
        </Link>
      </div>

      <header className="sticky top-0 z-50 border-b border-[var(--v2-mist)] bg-[var(--v2-paper)]/95 backdrop-blur">
        <div className="v2-container flex h-16 items-center justify-between gap-4">
          <BrandLogo variant="dark" href="/v2" />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Principal versão conversão"
          >
            {v2Nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-[16px] px-3 py-2 text-[14px] font-semibold text-[var(--v2-ink)] transition hover:bg-[var(--v2-fog)] hover:text-[var(--v2-abyss-soft)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-[13px] font-semibold text-[var(--v2-pewter)] underline-offset-2 hover:underline xl:inline"
            >
              Ver site institucional
            </Link>
            <Link href="/v2#contato" className="v2-btn v2-btn-primary hidden sm:inline-flex">
              Fale com um especialista
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-[16px] border border-[var(--v2-mist)] text-[var(--v2-ink)] lg:hidden"
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
                  className="rounded-[16px] px-3 py-3 text-[15px] font-semibold text-[var(--v2-ink)] hover:bg-[var(--v2-fog)]"
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
