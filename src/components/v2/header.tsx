"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { v2Nav } from "@/lib/v2-content";
import { cn } from "@/lib/utils";

export function V2Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "relative z-[80] border-b px-4 py-3 transition-colors",
          scrolled
            ? "border-[var(--edias-navy)]/10 bg-white/95 backdrop-blur-xl"
            : "border-[var(--edias-navy)]/10 bg-[var(--edias-canvas)]/95 backdrop-blur-xl"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <BrandLogo variant="dark" />

          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="Principal versão conversão"
          >
            {v2Nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-bold text-[var(--edias-navy)] transition hover:bg-[var(--edias-navy)] hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/v2#contato"
              className="hidden h-10 items-center bg-[var(--edias-navy)] px-4 text-sm font-bold text-white transition hover:bg-[var(--edias-deep)] md:inline-flex"
            >
              Fale com um especialista
            </Link>
            <Link
              href="/"
              className="hidden text-xs font-semibold text-[var(--edias-ink-muted)] underline-offset-2 hover:underline xl:inline"
            >
              Site atual
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-[var(--edias-navy)]/25 bg-white text-[var(--edias-navy)] lg:hidden"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="fixed inset-x-0 bottom-0 top-[4.75rem] z-[70] lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[var(--edias-deep)]/45"
            aria-label="Fechar menu"
            onClick={() => setOpen(false)}
          />
          <nav
            className="absolute inset-x-0 top-0 bottom-0 overflow-y-auto border-t border-[var(--edias-navy)]/10 bg-[var(--edias-canvas)] px-4 py-5"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col gap-2 pb-28">
              {v2Nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border border-[var(--edias-navy)]/10 bg-white px-4 py-3 text-base font-bold text-[var(--edias-navy)]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/v2#contato"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center bg-[var(--edias-navy)] px-5 py-3 text-sm font-bold text-white"
              >
                Fale com um especialista
              </Link>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center border border-[var(--edias-navy)]/20 bg-white px-5 py-3 text-sm font-bold text-[var(--edias-navy)]"
              >
                Voltar ao site atual
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
