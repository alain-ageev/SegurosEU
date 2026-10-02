"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRightIcon, ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { navItems, siteConfig, type NavItem } from "@/lib/site";
import { cn } from "@/lib/utils";

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function NavAnchor({
  href,
  onClick,
  className,
  children,
}: {
  href: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        className={className}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} onClick={onClick} className={className}>
      {children}
    </Link>
  );
}

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
      <div className="grid gap-5 rounded-[20px] border border-[var(--v2-mist)] bg-[#f4f4f4] p-5 shadow-[0_24px_70px_rgba(5,46,68,0.12)] lg:grid-cols-[0.85fr_1.6fr]">
        <div className="rounded-[16px] bg-[#ececec] p-5">
          <p className="text-xs font-bold tracking-[0.16em] text-[var(--v2-ember)] uppercase">
            {mega.eyebrow}
          </p>
          <h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--v2-ink)]">
            {mega.title}
          </h2>
          <p className="mt-3 text-sm font-medium leading-6 text-[var(--v2-graphite)]">
            {mega.description}
          </p>
          <NavAnchor
            href={mega.cta.href}
            onClick={onNavigate}
            className="v2-btn v2-btn-menu mt-6"
          >
            {mega.cta.label}
            <ArrowRightIcon className="size-3.5" />
          </NavAnchor>
        </div>
        <div
          className={cn(
            "grid gap-4 sm:grid-cols-2",
            mega.columns.length > 2 && "lg:grid-cols-3"
          )}
        >
          {mega.columns.map((column) => (
            <div key={column.title} className="min-w-0">
              <p className="px-3 text-xs font-bold tracking-[0.14em] text-[var(--v2-pewter)] uppercase">
                {column.title}
              </p>
              <div className="mt-2 space-y-1">
                {column.links.map((link) => (
                  <NavAnchor
                    key={link.href + link.label}
                    href={link.href}
                    onClick={onNavigate}
                    className="block rounded-[12px] px-3 py-2.5 text-sm font-bold leading-5 text-[var(--v2-ink)] transition hover:bg-white"
                  >
                    {link.label}
                  </NavAnchor>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function V2Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [openMobileTab, setOpenMobileTab] = useState<string | null>("Soluções");
  const [barHeight, setBarHeight] = useState(100);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const menuId = useId();

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const update = () => setBarHeight(el.getBoundingClientRect().height);
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
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
    <header className="sticky top-0 z-50">
      <div ref={barRef}>
        <div className="bg-[var(--v2-abyss)] px-3 py-2 text-center text-[12px] font-semibold leading-snug text-white sm:px-4 sm:text-[13px]">
          <span className="hidden sm:inline">Consultoria B2B em seguros · </span>
          <Link
            href="/#contato"
            className="text-[var(--v2-ember)] underline-offset-2 hover:underline"
          >
            Solicitar diagnóstico
          </Link>
        </div>

        <div className="border-b border-[var(--v2-mist)] bg-[#f4f4f4]">
          <div className="v2-container flex h-16 items-center justify-between gap-3 sm:h-[4.5rem] sm:gap-4">
            <div className="min-w-0 shrink">
              <BrandLogo variant="dark" href="/" />
            </div>

            <nav
              className="v2-nav-shell !hidden lg:!inline-flex"
              aria-label="Principal com abas"
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
                        className={cn("v2-nav-btn", isOpen && "is-active")}
                        onClick={() => setOpenMega(isOpen ? null : item.label)}
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
                      <NavAnchor
                        href={item.href}
                        className="v2-nav-btn"
                        onClick={() => setOpenMega(null)}
                      >
                        {item.label}
                      </NavAnchor>
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

            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="v2-btn v2-btn-primary !hidden lg:!inline-flex"
              >
                Fale com um especialista
              </a>
              <button
                type="button"
                className={cn(
                  "inline-flex size-11 items-center justify-center rounded-[16px] border lg:!hidden",
                  openMobile
                    ? "border-[var(--v2-abyss)] bg-[var(--v2-abyss)] text-white"
                    : "border-[var(--v2-mist)] bg-white text-[var(--v2-ink)]"
                )}
                aria-expanded={openMobile}
                aria-controls={menuId}
                aria-label={openMobile ? "Fechar menu" : "Abrir menu"}
                onClick={() => setOpenMobile((value) => !value)}
              >
                {openMobile ? (
                  <XIcon className="size-5" />
                ) : (
                  <MenuIcon className="size-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {openMobile ? (
        <div
          id={menuId}
          className="fixed inset-x-0 bottom-0 z-[70] lg:hidden"
          style={{ top: barHeight }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
        >
          <button
            type="button"
            className="absolute inset-0 bg-[var(--v2-abyss)]/45"
            aria-label="Fechar menu"
            onClick={() => setOpenMobile(false)}
          />
          <div className="absolute inset-x-0 top-0 bottom-0 overflow-y-auto border-t border-[var(--v2-mist)] bg-[#f4f4f4]">
            <nav
              className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-5 pb-28"
              aria-label="Mobile"
            >
              {navItems.map((item) => {
                const isTabOpen = openMobileTab === item.label;
                const mega = item.mega;

                return (
                  <div
                    key={item.label}
                    className="rounded-[16px] border border-[var(--v2-mist)] bg-[#ececec] p-3"
                  >
                    {mega ? (
                      <>
                        <button
                          type="button"
                          aria-expanded={isTabOpen}
                          className="flex w-full items-center justify-between gap-3 px-1 py-2 text-left text-base font-bold text-[var(--v2-ink)]"
                          onClick={() =>
                            setOpenMobileTab(isTabOpen ? null : item.label)
                          }
                        >
                          {item.label}
                          <ChevronDownIcon
                            className={cn(
                              "size-4 opacity-60 transition-transform",
                              isTabOpen && "rotate-180"
                            )}
                          />
                        </button>

                        {isTabOpen ? (
                          <div className="mt-2 space-y-3 border-t border-[var(--v2-mist)] pt-3">
                            <div className="rounded-[12px] bg-white p-4">
                              <p className="text-xs font-bold tracking-[0.14em] text-[var(--v2-ember)] uppercase">
                                {mega.eyebrow}
                              </p>
                              <p className="mt-2 text-lg font-bold text-[var(--v2-ink)]">
                                {mega.title}
                              </p>
                              <p className="mt-2 text-sm text-[var(--v2-graphite)]">
                                {mega.description}
                              </p>
                              <NavAnchor
                                href={mega.cta.href}
                                onClick={() => setOpenMobile(false)}
                                className="v2-btn v2-btn-menu mt-4"
                              >
                                {mega.cta.label}
                                <ArrowRightIcon className="size-3.5" />
                              </NavAnchor>
                            </div>
                            {mega.columns.flatMap((column) =>
                              column.links.map((link) => (
                                <NavAnchor
                                  key={item.label + link.href + link.label}
                                  href={link.href}
                                  onClick={() => setOpenMobile(false)}
                                  className="block rounded-[12px] bg-white/70 px-3 py-2 text-sm font-medium text-[var(--v2-graphite)] hover:bg-white"
                                >
                                  {link.label}
                                </NavAnchor>
                              ))
                            )}
                          </div>
                        ) : null}
                      </>
                    ) : (
                      <NavAnchor
                        href={item.href}
                        onClick={() => setOpenMobile(false)}
                        className="flex items-center justify-between gap-3 px-1 py-2 text-base font-bold text-[var(--v2-ink)]"
                      >
                        {item.label}
                        <ArrowRightIcon className="size-4 opacity-50" />
                      </NavAnchor>
                    )}
                  </div>
                );
              })}

              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpenMobile(false)}
                className="v2-btn v2-btn-primary mt-2"
              >
                Fale com um especialista
              </a>
              <a href={siteConfig.phoneHref} className="v2-btn v2-btn-menu">
                {siteConfig.phone}
              </a>
            </nav>
          </div>
        </div>
      ) : null}
    </header>
  );
}
