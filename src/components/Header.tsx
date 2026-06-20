"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

function UserIcon() {
  return (
    <Link
      href="/login"
      className="text-brand-cream/50 hover:text-brand-gold"
      aria-label="ログイン / アカウント"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    </Link>
  );
}

function CartIcon({ count }: { count: number }) {
  return (
    <Link
      href="/cart"
      className="relative text-brand-cream/50 hover:text-brand-gold"
    >
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.2}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-brand-gold text-brand-green-dark text-[9px] font-medium flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  );
}

const navLinkClass =
  "text-xs tracking-[0.15em] uppercase text-brand-cream/50 hover:text-brand-gold";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const pathname = usePathname();
  const isLP = pathname === "/";
  const isEC = !isLP;

  useEffect(() => {
    if (!isEC) return;
    const updateCount = () => {
      try {
        const cart = JSON.parse(
          localStorage.getItem("hachidori-cart") || "[]"
        );
        const total = cart.reduce(
          (sum: number, item: { quantity: number }) => sum + item.quantity,
          0
        );
        setCartCount(total);
      } catch {
        setCartCount(0);
      }
    };

    updateCount();
    window.addEventListener("storage", updateCount);
    const interval = setInterval(updateCount, 2000);
    return () => {
      window.removeEventListener("storage", updateCount);
      clearInterval(interval);
    };
  }, [isEC]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-green/95 backdrop-blur-md border-b border-brand-gold/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="HACHIDORI COFFEE"
              width={36}
              height={36}
              className="rounded-full"
            />
            <span className="font-serif text-base sm:text-lg tracking-[0.12em] text-brand-cream hidden sm:block">
              HACHIDORI COFFEE
            </span>
          </Link>

          {/* Right: all nav + actions */}
          <div className="flex items-center gap-5 sm:gap-7">
            {/* LP nav links */}
            {isLP && (
              <>
                <nav className="hidden lg:flex items-center gap-7">
                  <a href="#story" className={navLinkClass}>Story</a>
                  <a href="#beans" className={navLinkClass}>Beans</a>
                  <a href="#howto" className={navLinkClass}>Order</a>
                  <a href="#faq" className={navLinkClass}>FAQ</a>
                </nav>
                <Link
                  href="/shop"
                  className="hidden sm:inline-flex items-center rounded-lg border border-brand-gold/50 px-5 py-1.5 text-xs tracking-[0.12em] uppercase text-brand-gold hover:bg-brand-gold hover:text-brand-green-dark"
                >
                  Shop
                </Link>
              </>
            )}

            {/* EC: nav + icons */}
            {isEC && (
              <>
                <nav className="hidden sm:flex items-center gap-6">
                  <Link href="/" className={navLinkClass}>Top</Link>
                  <Link href="/shop" className={navLinkClass}>Shop</Link>
                </nav>
                <UserIcon />
                <CartIcon count={cartCount} />
              </>
            )}

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden text-brand-cream/50"
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
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="lg:hidden border-t border-brand-gold/10 bg-brand-green/98 backdrop-blur-md">
          <div className="px-6 py-5 space-y-4">
            {isLP && (
              <>
                <Link
                  href="/shop"
                  className="block text-xs tracking-[0.15em] uppercase text-brand-gold font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Shop — 商品一覧
                </Link>
                <div className="border-t border-brand-cream/5" />
                <a href="#story" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/40 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>Story</a>
                <a href="#beans" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/40 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>Beans</a>
                <a href="#howto" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/40 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>Order</a>
                <a href="#faq" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/40 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>FAQ</a>
              </>
            )}

            {isEC && (
              <>
                <Link href="/" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
                  Top — トップページ
                </Link>
                <Link href="/shop" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
                  Shop — 商品一覧
                </Link>
                <Link href="/cart" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
                  Cart — カート{cartCount > 0 && ` (${cartCount})`}
                </Link>
                <Link href="/login" className="block text-xs tracking-[0.15em] uppercase text-brand-cream/60 hover:text-brand-gold" onClick={() => setIsMenuOpen(false)}>
                  Login — ログイン
                </Link>
              </>
            )}
          </div>
        </nav>
      )}
    </header>
  );
}
