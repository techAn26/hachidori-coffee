"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-green/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <HachidoriIcon className="h-8 w-8 text-brand-gold" />
            <span className="font-serif text-lg tracking-wider text-brand-cream">
              HACHIDORI COFFEE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#story"
              className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors"
            >
              ストーリー
            </a>
            <a
              href="#beans"
              className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors"
            >
              コーヒー豆
            </a>
            <a
              href="#howto"
              className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors"
            >
              ご予約の流れ
            </a>
            <a
              href="#faq"
              className="text-sm text-brand-cream/80 hover:text-brand-gold transition-colors"
            >
              FAQ
            </a>
            <Link
              href="/shop"
              className="rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-brand-green-dark hover:bg-brand-gold-light transition-colors"
            >
              予約する
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-brand-cream"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニュー"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
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
        <nav className="md:hidden border-t border-brand-green-light bg-brand-green/98 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            <a
              href="#story"
              className="block text-sm text-brand-cream/80 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              ストーリー
            </a>
            <a
              href="#beans"
              className="block text-sm text-brand-cream/80 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              コーヒー豆
            </a>
            <a
              href="#howto"
              className="block text-sm text-brand-cream/80 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              ご予約の流れ
            </a>
            <a
              href="#faq"
              className="block text-sm text-brand-cream/80 hover:text-brand-gold"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Link
              href="/shop"
              className="block w-full text-center rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-brand-green-dark"
              onClick={() => setIsMenuOpen(false)}
            >
              予約する
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
      {/* Hummingbird silhouette */}
      <path d="M8 14c0-4 3-8 7-9 1-.3 2 0 2.5.8l3 5c.5.8.3 1.8-.4 2.4L17 16l5 2c1 .4 1.5 1.5 1 2.5l-2 4c-.5 1-1.7 1.3-2.6.7L14 22l-1 3c-.3 1-1.3 1.5-2.3 1.2C9 25.5 8 23.5 8 21v-7z" />
      {/* Beak */}
      <path d="M20 13.5l6-3c.5-.3 1 .2.7.7l-2 4-4.7-1.7z" />
      {/* Eye */}
      <circle cx="13" cy="10" r="1" fill="white" opacity="0.9" />
      {/* Wing detail */}
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
