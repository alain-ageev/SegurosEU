"use client";

import Link from "next/link";
import { useState } from "react";
import { MenuIcon, PhoneIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navItems, siteConfig } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-white"
          aria-label={`${siteConfig.name} — página inicial`}
        >
          <span className="flex size-9 items-center justify-center rounded-sm bg-[var(--edias-gold)] font-[family-name:var(--font-raleway)] text-sm font-bold tracking-wide text-[var(--edias-navy)] transition-transform duration-300 group-hover:scale-105 sm:size-10 sm:text-base">
            ED
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-[family-name:var(--font-raleway)] text-base font-semibold tracking-[0.04em] sm:text-lg">
              Edias
            </span>
            <span className="text-[10px] font-medium tracking-[0.18em] text-white/70 uppercase sm:text-[11px]">
              Consultoria
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Principal"
        >
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className="inline-flex h-10 items-center px-3 text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
              {"children" in item && item.children ? (
                <div className="invisible absolute left-0 top-full z-40 min-w-48 translate-y-1 rounded-md border border-white/10 bg-[var(--edias-deep)]/95 p-2 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-sm px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            nativeButton={false}
            render={<a href={siteConfig.phoneHref} />}
            variant="outline"
            size="sm"
            className="hidden border-white/25 bg-white/5 text-white hover:bg-white/15 hover:text-white sm:inline-flex"
          >
            <PhoneIcon />
            {siteConfig.phone}
          </Button>
          <Button
            nativeButton={false}
            render={<Link href="/contato" />}
            size="sm"
            className="hidden bg-[var(--edias-gold)] text-[var(--edias-navy)] hover:bg-[var(--edias-gold-soft)] md:inline-flex"
          >
            Falar com especialista
          </Button>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-lg text-white hover:bg-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-[var(--edias-deep)]/95 px-4 py-4 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => (
              <div key={item.href} className="border-b border-white/10 py-2">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-1 py-2 text-base font-medium text-white"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children
                  ? item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-1.5 text-sm text-white/70"
                      >
                        {child.label}
                      </Link>
                    ))
                  : null}
              </div>
            ))}
            <a
              href={siteConfig.phoneHref}
              className="mt-3 inline-flex items-center gap-2 px-1 text-sm text-[var(--edias-gold)]"
            >
              <PhoneIcon className="size-4" />
              {siteConfig.phone}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
