"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="rule-bottom sticky top-0 z-50 bg-[var(--color-bg)]/95 backdrop-blur-sm">
      <div className="container-site flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="micro-label tracking-wider text-[var(--color-text)]">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`micro-label transition-colors hover:text-[var(--color-text)] ${
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-[var(--color-text)]"
                  : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden micro-label p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden rule-top pb-6 pt-4">
          <div className="container-site flex flex-col gap-4">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`micro-label text-base transition-colors hover:text-[var(--color-text)] ${
                  pathname === item.href || pathname.startsWith(item.href + "/")
                    ? "text-[var(--color-text)]"
                    : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
