"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { Arrow } from "./Icons";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetlerimiz", label: "Hizmetlerimiz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-5 sm:px-8 lg:px-14">
        <Logo />

        <nav aria-label="Ana menü" className="hidden items-center gap-10 lg:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`border-b pb-1 text-[15px] transition-colors hover:text-gold ${
                  active ? "border-gold text-gold" : "border-transparent text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <Link
          href="/iletisim"
          className="hidden items-center gap-3 border border-gold px-7 py-3 text-[15px] text-gold transition-colors hover:bg-gold hover:text-navy lg:inline-flex"
        >
          Randevu Al <Arrow />
        </Link>

        <button
          type="button"
          className="p-2 text-gold lg:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav
          id="mobil-menu"
          aria-label="Mobil menü"
          className="mx-5 flex flex-col gap-1 border border-gold/30 bg-navy/95 p-4 backdrop-blur lg:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`px-3 py-3 ${pathname === l.href ? "text-gold" : "text-white"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/iletisim"
            onClick={() => setOpen(false)}
            className="mt-2 bg-gold px-3 py-3 text-center font-medium text-navy"
          >
            Randevu Al
          </Link>
        </nav>
      )}
    </header>
  );
}
