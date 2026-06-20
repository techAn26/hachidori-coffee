"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-green/95 backdrop-blur-md border-b border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <HachidoriIcon className="h-7 w-7 text-brand-gold" />
            <span className="font-serif text-lg tracking-[0.15em] text-brand-cream">
              HACHIDORI COFFEE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            <a
              href="#story"
              className="text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
            >
              Story
            </a>
            <a
              href="#beans"
              className="text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
            >
              Beans
            </a>
            <a
              href="#howto"
              className="text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
            >
              Order
            </a>
            <a
              href="#faq"
              className="text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
            >
              FAQ
            </a>
            <Link
              href="/shop"
              className="rounded-lg border border-brand-gold/60 bg-transparent px-6 py-2 text-xs tracking-[0.1em] uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-green-dark"
            >
              Reserve
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-brand-cream/60"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-brand-gold/10 bg-brand-green/98 backdrop-blur-md">
          <div className="px-6 py-6 space-y-4">
            <a
              href="#story"
              className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Story
            </a>
            <a
              href="#beans"
              className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Beans
            </a>
            <a
              href="#howto"
              className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Order
            </a>
            <a
              href="#faq"
              className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Link
              href="/shop"
              className="block w-full text-center rounded-lg border border-brand-gold/60 px-6 py-2.5 text-xs tracking-[0.1em] uppercase text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              Reserve
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

function HachidoriIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 14c0-4 3-8 7-9 1-.3 2 0 2.5.8l3 5c.5.8.3 1.8-.4 2.4L17 16l5 2c1 .4 1.5 1.5 1 2.5l-2 4c-.5 1-1.7 1.3-2.6.7L14 22l-1 3c-.3 1-1.3 1.5-2.3 1.2C9 25.5 8 23.5 8 21v-7z" />
      <path d="M20 13.5l6-3c.5-.3 1 .2.7.7l-2 4-4.7-1.7z" />
      <circle cx="13" cy="10" r="1" fill="white" opacity="0.9" />
      <path
        d="M10 15c2-1 4-1 6 0"
        fill="none"
        stroke="white"
        strokeWidth="0.5"
        opacity="0.3"
      />
    </svg>
  );
}
