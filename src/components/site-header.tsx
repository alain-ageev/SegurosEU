"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRightIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";

function MegaPanel({
  item,
  open,
  onNavigate,
}: {
  item: NavItem;
  open: boolean;
  onNavigate: () => void;
}) {
  if (!item.mega) return null;
  const { mega } = item;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 w-[min(52rem,calc(100vw-2rem))] -translate-x-1/2 pt-3 transition duration-200",
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      <div className="grid gap-5 rounded-[1.5rem] border border-[var(--edias-navy)]/10 bg-white p-5 shadow-[0_24px_70px_rgba(0,48,91,0.16)] lg:grid-cols-[0.85fr_1.6fr]">
        <div className="rounded-[1.1rem] bg-[var(--edias-canvas)] p-5">
          <p className="text-xs font-extrabold tracking-[0.2em] text-[var(--edias-gold-deep)] uppercase">
            {mega.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-raleway)] text-2xl font-semibold leading-tight text-[var(--edias-navy)]">
            {mega.title}
          </h2>
          <p className="mt-3 text-sm font-medium leading-6 text-[var(--edias-ink-muted)]">
            {mega.description}
          </p>
          <Link
            href={mega.cta.href}
            onClick={onNavigate}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--edias-navy)] px-5 py-2.5 text-xs font-extrabold text-white transition hover:bg-[var(--edias-deep)]"
          >
            {mega.cta.label}
            <ArrowRightIcon className="size-3.5" />
          </Link>
        </div>
        <div
          className={cn(
            "grid gap-4 sm:grid-cols-2",
            mega.columns.length > 2 && "lg:grid-cols-3"
          )}
        >
          {mega.columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className="px-3 text-xs font-extrabold tracking-[0.18em] text-[var(--edias-ink-muted)] uppercase">
                {column.title}
              </p>
              <div className="mt-2 space-y-1">
                {column.links.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={onNavigate}
                    className="block rounded-[0.9rem] px-3 py-2.5 text-sm font-bold leading-5 text-[var(--edias-navy)] transition hover:bg-[var(--edias-canvas)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = openMobile ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [openMobile]);

  const openPanel = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(label);
  };

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b px-4 py-3 backdrop-blur-xl transition-colors",
        scrolled
          ? "border-[var(--edias-navy)]/10 bg-white/95"
          : "border-[var(--edias-navy)]/10 bg-[var(--edias-canvas)]/90"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
        <BrandLogo variant="dark" />

        <nav
          className="hidden items-center gap-1 rounded-full bg-white/80 p-1 shadow-[0_18px_45px_rgba(0,48,91,0.08)] lg:flex"
          aria-label="Principal"
          onMouseLeave={scheduleClose}
        >
          {navItems.map((item) => {
            const hasMega = Boolean(item.mega);
            const isOpen = openMega === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  hasMega ? openPanel(item.label) : setOpenMega(null)
                }
              >
                {hasMega ? (
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-sm font-bold text-[var(--edias-navy)] transition",
                      "hover:bg-[var(--edias-navy)] hover:text-white focus:bg-[var(--edias-navy)] focus:text-white focus:outline-none",
                      isOpen && "bg-[var(--edias-navy)] text-white"
                    )}
                    onClick={() =>
                      setOpenMega(isOpen ? null : item.label)
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronDownIcon
                      className={cn(
                        "size-4 transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center rounded-full px-4 py-2.5 text-sm font-bold text-[var(--edias-navy)] transition hover:bg-[var(--edias-navy)] hover:text-white"
                    onClick={() => setOpenMega(null)}
                  >
                    {item.label}
                  </Link>
                )}
                {hasMega ? (
                  <MegaPanel
                    item={item}
                    open={isOpen}
                    onNavigate={() => setOpenMega(null)}
                  />
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<Link href="/contato" />}
            size="sm"
            className="hidden h-10 rounded-full bg-[var(--edias-navy)] px-4 text-white hover:bg-[var(--edias-deep)] md:inline-flex"
          >
            Fale com um especialista
            <ArrowRightIcon />
          </Button>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--edias-navy)]/15 text-[var(--edias-navy)] hover:bg-white lg:hidden"
            aria-expanded={openMobile}
            aria-controls={menuId}
            aria-label={openMobile ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpenMobile((value) => !value)}
          >
            {openMobile ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {openMobile ? (
        <div
          id={menuId}
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto border-t border-[var(--edias-navy)]/10 bg-[var(--edias-canvas)] lg:hidden"
        >
          <nav className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5" aria-label="Mobile">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[1rem] border border-[var(--edias-navy)]/10 bg-white p-3"
              >
                <Link
                  href={item.href}
                  onClick={() => setOpenMobile(false)}
                  className="flex items-center justify-between gap-3 px-1 py-2 text-base font-bold text-[var(--edias-navy)]"
                >
                  {item.label}
                  <ArrowRightIcon className="size-4 opacity-50" />
                </Link>
                {item.mega
                  ? item.mega.columns.flatMap((column) =>
                      column.links.map((link) => (
                        <Link
                          key={item.label + link.href + link.label}
                          href={link.href}
                          onClick={() => setOpenMobile(false)}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--edias-ink-muted)] hover:bg-[var(--edias-canvas)]"
                        >
                          {link.label}
                        </Link>
                      ))
                    )
                  : null}
              </div>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--edias-navy)] px-5 py-3 text-sm font-bold text-white"
            >
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
